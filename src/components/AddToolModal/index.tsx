import React, { useCallback, useRef } from 'react';
import Modal, { Props } from 'react-modal';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import Button from '../Button';
import Input from '../Input';

import { Container } from './styles';
import { customModalStyle } from './styles';

interface ModalProps extends Props {
  isOpen: boolean;
  onRequestSubmit(tool: Tool): void;
}

interface Tool {
  title: string;
  link: string;
  description: string;
  tags: string[];
}
interface AddToolFormData {
  title: string;
  link: string;
  description: string;
  tags: string;
}

const AddModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestSubmit,
  ...rest
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleAddTool = useCallback(
    async (data: AddToolFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Nome obrigatório'),
          link: Yup.string().required('Link obrigatório'),
          description: Yup.string().required('Descrição obrigatória'),
          tags: Yup.string().required('Tags obrigatórias'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formData = { ...data, tags: data.tags.split(' ') };

        const response = await api.post('/tools', formData);

        onRequestSubmit(response.data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [onRequestSubmit],
  );

  return (
    <Modal style={customModalStyle} isOpen={isOpen} {...rest}>
      <Container data-testid="addToolModal-container">
        <header>
          <strong>Adicionar uma nova ferramenta</strong>
        </header>

        <Form ref={formRef} onSubmit={handleAddTool}>
          <label>Nome da ferramenta *</label>
          <Input name="title" />

          <label>Link da ferramenta *</label>
          <Input name="link" />

          <label>Descrição da ferramenta *</label>
          <Input name="description" />

          <label>Tags *</label>
          <Input name="tags" />

          <Button data-testid="addTool-button" type="submit" buttonType="add">
            Adicionar
          </Button>
        </Form>
      </Container>
    </Modal>
  );
};

export default AddModal;
