import styled from 'styled-components';
import { ButtonProps } from './index';

const customStyleByType = {
  add: 'background: #365df0; color: #fff',
  delete: 'background: #f95e5a; color: #fff',
  generic: 'background: #E1E7FD; color: #365DF0',
};

const hoverColorByType = {
  add: '#2f55cc',
  delete: '#cc4c4c',
  generic: '#CAD6FC',
};

export const Container = styled.button<ButtonProps>`
  padding: 8px 24px;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ buttonType }) => hoverColorByType[buttonType]};
  }

  ${({ buttonType }) => customStyleByType[buttonType]}
`;
