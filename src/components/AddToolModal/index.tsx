import React from 'react';
import Modal from 'react-modal';
import Button from '../Button';

import { Container } from './styles';
import { customModalStyle } from './styles';

interface ModalProps {
  isOpen: boolean;
}

const AddModal: React.FC<ModalProps> = ({ isOpen, ...rest }) => {
  return (
    <Modal style={customModalStyle} isOpen={isOpen} {...rest}>
      <Container>
        <header>
          <strong>Adicionar uma nova ferramenta</strong>
        </header>

        <span>Nome da ferramenta</span>
        <input />

        <span>Link da ferramenta</span>
        <input />

        <span>Descrição da ferramenta</span>
        <input />

        <span>Tags</span>
        <input />

        <Button buttonType="add">Adicionar</Button>
      </Container>
    </Modal>
  );
};

export default AddModal;
