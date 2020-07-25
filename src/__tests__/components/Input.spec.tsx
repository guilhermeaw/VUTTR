import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';
import Input from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'searchField',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByTestId } = render(
      <Input
        name="searchField"
        data-testid="input-component"
        placeholder="Buscar..."
      />,
    );

    expect(getByTestId('input-component')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByTestId } = render(
      <Input
        name="searchField"
        data-testid="input-component"
        placeholder="Buscar..."
      />,
    );

    const inputElement = getByTestId('input-component');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyle('border-color: #170c3a');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyle('border-color: #170c3a');
    });
  });
});
