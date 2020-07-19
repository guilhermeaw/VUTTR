import React, { useCallback, useRef } from 'react';
import Modal, { Props } from 'react-modal';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

import { Container } from './styles';
import { customModalStyle } from './styles';

interface ModalProps extends Props {
  isOpen: boolean;
}

const AddModal: React.FC<ModalProps> = ({ isOpen, ...rest }) => {
  const formRef = useRef<FormHandles>(null);

  const handleAddTool = useCallback(() => {
    // TODO: add tool
  }, []);

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
        </Form>

        <Button type="submit" buttonType="add">
          Adicionar
        </Button>
      </Container>
    </Modal>
  );
};

export default AddModal;
