import React, { useState, useCallback, useEffect } from 'react';
import ReactModal from 'react-modal';

import {
  Container,
  TitleBox,
  SearchArea,
  SearchField,
  Checkbox,
  ToolsList,
  ToolBox,
  RemoveModalContent,
} from './styles';

import { customModalStyle } from './styles';

import AddToolModal from './components/AddToolModal';
import Button from '../../components/Button';
import api from '../../services/api';

interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

const Home: React.FC = () => {
  const [tools, setTools] = useState<Tool[]>();
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsfocused] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  useEffect(() => {
    async function loadTools(): Promise<void> {
      const response = await api.get('/tools');

      setTools(response.data);
    }

    loadTools();
  }, []);

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

  const handleRemoveTool = useCallback(() => {
    setIsRemoveModalOpen(!isRemoveModalOpen);
  }, [isRemoveModalOpen]);

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
        <AddToolModal
          ariaHideApp={false}
          onRequestClose={handleAddTool}
          isOpen={isAddModalOpen}
        />
      </SearchArea>

      <ToolsList>
        {tools &&
          tools.map(tool => (
            <ToolBox key={tool.id}>
              <header>
                <a href={tool.link}>{tool.title}</a>
                <Button buttonType="delete" onClick={handleRemoveTool}>
                  Remover
                </Button>
                <ReactModal
                  onRequestClose={handleRemoveTool}
                  isOpen={isRemoveModalOpen}
                  style={customModalStyle}
                  ariaHideApp={false}
                >
                  <RemoveModalContent>
                    <h3>Remover ferramenta</h3>
                    <span>
                      Você tem certeza que deseja remover essa ferramenta?
                    </span>
                    <footer>
                      <Button onClick={handleRemoveTool} buttonType="generic">
                        Cancelar
                      </Button>
                      <Button buttonType="add">Confirmar</Button>
                    </footer>
                  </RemoveModalContent>
                </ReactModal>
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
          ))}
      </ToolsList>
    </Container>
  );
};

export default Home;
