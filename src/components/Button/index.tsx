import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'add' | 'delete';
}

const Button: React.FC<ButtonProps> = ({ children, buttonType, ...rest }) => {
  return (
    <Container buttonType={buttonType} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
