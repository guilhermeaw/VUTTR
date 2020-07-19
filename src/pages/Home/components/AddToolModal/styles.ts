import styled from 'styled-components';

export const customModalStyle = {
  content: {
    top: '45%',
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
    margin-bottom: 8px;

    strong {
      font-weight: bold;
      font-size: 24px;
      margin-bottom: 16px;
    }
  }

  span {
    color: #170c3a;
    font-size: 18px;
    display: inline-block;
    margin-top: 8px;
  }

  button {
    margin-top: 16px;
  }
`;
