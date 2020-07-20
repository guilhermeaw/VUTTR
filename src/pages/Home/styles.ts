import styled, { css } from 'styled-components';

interface InputProps {
  isFocused: boolean;
}

export const customModalStyle = {
  content: {
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Container = styled.div`
  height: 100vh;
  max-width: 1120px;
  padding: 64px 32px;
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
  flex-direction: row;
  justify-content: space-between;

  label {
    display: inline-block;
    cursor: pointer;
  }
`;

export const SearchField = styled.input<InputProps>`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #f5f4f6;
  border: 1px #ebeaed solid;
  margin-right: 32px;
  margin-bottom: 8px;
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
  padding: 24px 0;

  display: flex;
  flex-direction: column;
`;

export const ToolBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: 1px #ebeaed solid;
  padding: 16px 32px;
  margin-bottom: 16px;
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
      display: inline-block;

      & + strong {
        margin-left: 8px;
      }
    }
  }
`;

export const RemoveModalContent = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  min-width: 420px;

  h3 {
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    font-size: 18px;
  }

  footer {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;

    button + button {
      margin-left: 16px;
    }
  }
`;
