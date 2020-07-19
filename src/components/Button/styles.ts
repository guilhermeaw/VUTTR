import styled, { css } from 'styled-components';
import { ButtonProps } from './index';

export const Container = styled.button<ButtonProps>`
  padding: 8px 24px;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  transition: all 0.3s;

  ${props =>
    props.buttonType === 'delete'
      ? css`
          background-color: #f95e5a;
        `
      : css`
          background-color: #365df0;
        `}

  &:hover {
    ${props =>
      props.buttonType === 'delete'
        ? css`
            background-color: #cc4c4c;
          `
        : css`
            background-color: #2f55cc;
          `}
  }
`;
