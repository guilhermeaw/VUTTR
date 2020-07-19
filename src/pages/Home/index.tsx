import React, { useState, useCallback } from 'react';

import {
  Container,
  TitleBox,
  SearchArea,
  SearchField,
  Checkbox,
  ToolsList,
  ToolBox,
} from './styles';

import AddToolModal from '../../components/AddToolModal';
import Button from '../../components/Button';

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsfocused] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleInputChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setInputValue(event.currentTarget.value);
    },
    [],
  );

  const handleInputFocus = useCallback(() => {
    setIsfocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsfocused(false);
  }, []);

  const handleAddTool = useCallback(() => {
    setIsAddModalOpen(!isAddModalOpen);
  }, [isAddModalOpen]);

  return (
    <Container>
      <TitleBox>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
      </TitleBox>

      <SearchArea>
        <div>
          <SearchField
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            isFocused={isFocused}
            placeholder="Buscar..."
          />
          <span>
            <Checkbox type="checkbox" />
            Buscar apenas por tags
          </span>
        </div>

        <Button buttonType="add" onClick={handleAddTool}>
          Adicionar
        </Button>
        <AddToolModal isOpen={isAddModalOpen} />
      </SearchArea>

      <ToolsList>
        <ToolBox>
          <header>
            <a href="/">Notion</a>
            <Button buttonType="delete">Remover</Button>
          </header>

          <p>
            Essa é uma ferramenta para gerenciar anotações variadas sobre
            qualquer assunto
          </p>

          <footer>
            <strong>#anotacoes</strong>
            <strong>#utilidades</strong>
            <strong>#geral</strong>
          </footer>
        </ToolBox>
      </ToolsList>
    </Container>
  );
};

export default Home;
