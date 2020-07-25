import React from 'react';

import { render } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button component', () => {
  it('should be able to render a button', () => {
    const { getByTestId } = render(
      <Button
        buttonType="add"
        data-testid="button-component"
        onClick={() => jest.fn()}
      >
        Adicionar
      </Button>,
    );

    expect(getByTestId('button-component')).toBeTruthy();
  });
});
