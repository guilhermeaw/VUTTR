import React, { useCallback, useRef } from 'react';
import Modal, { Props } from 'react-modal';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../../../utils/getValidationErrors';
import api from '../../../../services/api';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

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
      <Container>
        <header>
          <strong>Adicionar uma nova ferramenta</strong>
        </header>

        <Form ref={formRef} onSubmit={handleAddTool}>
          <span>Nome da ferramenta *</span>
          <Input name="title" />

          <span>Link da ferramenta *</span>
          <Input name="link" />

          <span>Descrição da ferramenta *</span>
          <Input name="description" />

          <span>Tags *</span>
          <Input name="tags" />

          <Button type="submit" buttonType="add">
            Adicionar
          </Button>
        </Form>
      </Container>
    </Modal>
  );
};

export default AddModal;
