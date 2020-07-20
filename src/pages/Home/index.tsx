import React, { useState, useCallback, useEffect } from 'react';
import ReactModal from 'react-modal';
import { AxiosResponse } from 'axios';

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
  const [tools, setTools] = useState<Tool[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsfocused] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isTagSearch, setIsTagSearch] = useState(false);

  useEffect(() => {
    async function loadTools(): Promise<void> {
      let response = {} as AxiosResponse;

      isTagSearch
        ? (response = await api.get(`/tools?tags_like=${inputValue}`))
        : (response = await api.get(`/tools?title_like=${inputValue}`));

      setTools(response.data);
    }

    const debouncer = setTimeout(() => {
      loadTools();
    }, 500);

    return () => {
      clearTimeout(debouncer);
    };
  }, [inputValue, isTagSearch]);

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

  const toggleAddTool = useCallback(() => {
    setIsAddModalOpen(!isAddModalOpen);
  }, [isAddModalOpen]);

  const handleAddTool = useCallback(
    (tool: Tool) => {
      toggleAddTool();
      setTools([...tools, tool]);
    },
    [toggleAddTool, tools],
  );

  const toggleRemoveTool = useCallback(() => {
    setIsRemoveModalOpen(!isRemoveModalOpen);
  }, [isRemoveModalOpen]);

  const handleRemoveTool = useCallback(
    async (toolId: number) => {
      await api.delete(`/tools/${toolId}`);

      toggleRemoveTool();
      setTools(tools.filter(tool => tool.id !== toolId));
    },
    [toggleRemoveTool, tools],
  );

  const toggleCheckbox = useCallback(() => {
    setIsTagSearch(!isTagSearch);
  }, [isTagSearch]);

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
          <label>
            <Checkbox onChange={toggleCheckbox} type="checkbox" />
            Buscar apenas por tags
          </label>
        </div>

        <Button buttonType="add" onClick={toggleAddTool}>
          Adicionar
        </Button>
        <AddToolModal
          ariaHideApp={false}
          onRequestClose={toggleAddTool}
          isOpen={isAddModalOpen}
          onRequestSubmit={handleAddTool}
        />
      </SearchArea>

      <ToolsList>
        {tools &&
          tools.map(tool => (
            <ToolBox key={tool.id}>
              <header>
                <a href={tool.link}>{tool.title}</a>
                <Button buttonType="delete" onClick={toggleRemoveTool}>
                  Remover
                </Button>
                <ReactModal
                  ariaHideApp={false}
                  onRequestClose={toggleRemoveTool}
                  isOpen={isRemoveModalOpen}
                  style={customModalStyle}
                >
                  <RemoveModalContent>
                    <h3>Remover ferramenta</h3>
                    <span>
                      Você tem certeza que deseja remover essa ferramenta?
                    </span>
                    <footer>
                      <Button onClick={toggleRemoveTool} buttonType="generic">
                        Cancelar
                      </Button>
                      <Button
                        onClick={() => handleRemoveTool(tool.id)}
                        buttonType="add"
                      >
                        Confirmar
                      </Button>
                    </footer>
                  </RemoveModalContent>
                </ReactModal>
              </header>

              <p>{tool.description}</p>

              <footer>
                {tool.tags.map(tag => (
                  <strong key={tool.id + tag}>#{tag}</strong>
                ))}
              </footer>
            </ToolBox>
          ))}
      </ToolsList>
    </Container>
  );
};

export default Home;
