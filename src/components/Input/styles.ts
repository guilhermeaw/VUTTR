import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  border: 1px #ebeaed solid;
  background-color: #F5F4F6;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #f95e5a;
      background-color: #feefee;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #170c3a;
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: #170c3a;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #170C3A;
    font-size: 18px;

    &::placeholder {
      color: #B1ADB9;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  right: 40px;
  color: #f95e5a;
  font-size: 12px;
`;
