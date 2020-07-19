import styled from 'styled-components';

export const customModalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Container = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  min-width: 420px;

  header {
    strong {
      font-weight: bold;
    }
  }

  span {
    color: #8f8a9b;
    margin: 16px 0 5px;
    font-size: 18px;
  }

  input {
    padding: 5px;
    font-size: 16px;
  }

  button {
    margin-top: 16px;
  }
`;
