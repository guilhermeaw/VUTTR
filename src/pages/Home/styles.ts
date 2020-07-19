import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: boolean;
}

export const Container = styled.div`
  height: 100vh;
  max-width: 1120px;
  padding: 64px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.header`
  margin-bottom: 40px;

  h1 {
    margin-bottom: 16px;
    font-weight: bold;
  }
`;

export const SearchArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchField = styled.input<InputProps>`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #f5f4f6;
  border: 1px #ebeaed solid;
  margin-right: 32px;
  transition: all 0.2s;

  ${props =>
    props.isFocused &&
    css`
      border-color: #170c3a;
    `}
`;

export const Checkbox = styled.input`
  margin-right: 8px;
`;

export const AddButton = styled.button`
  padding: 8px 24px;
  border: 0;
  border-radius: 5px;
  background-color: #365df0;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  transition: all 0.3s;

  &:hover {
    background-color: #2f55cc;
  }
`;

export const ToolsList = styled.div`
  padding: 32px 0;

  display: flex;
  flex-direction: column;
`;

export const ToolBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: 1px #ebeaed solid;
  padding: 16px 32px;
  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: 5px 5px 5px #ebeaed;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    a {
      font-size: 24px;
      color: #170c3a;
    }
  }

  p {
    color: #8f8a9b;
    font-size: 18px;
  }

  footer {
    margin-top: 8px;

    strong {
      font-weight: bold;

      & + strong {
        margin-left: 8px;
      }
    }
  }
`;

export const RemoveButton = styled.button`
  padding: 8px 24px;
  border: 0;
  border-radius: 5px;
  background-color: #f95e5a;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  transition: all 0.3s;

  &:hover {
    background-color: #cc4c4c;
  }
`;