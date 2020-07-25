import React from 'react';

import { render, fireEvent, waitFor } from '@testing-library/react';
import AddToolModal from '../../components/AddToolModal';

describe('AddToolModal component', () => {
  it('should be able to render a AddToolModal', () => {
    const { getByTestId } = render(
      <AddToolModal
        ariaHideApp={false}
        onRequestSubmit={() => jest.fn()}
        isOpen
      />,
    );

    expect(getByTestId('addToolModal-container')).toBeTruthy();
  });

  it('should not be able to submit form with invalid schema', async () => {
    const { getByTestId, queryByText } = render(
      <AddToolModal
        ariaHideApp={false}
        onRequestSubmit={() => jest.fn()}
        isOpen
      />,
    );

    const addToolButton = getByTestId('addTool-button');

    fireEvent.click(addToolButton);

    await waitFor(() => {
      expect(queryByText('Nome obrigatório')).not.toBeNull();
      expect(queryByText('Link obrigatório')).not.toBeNull();
      expect(queryByText('Descrição obrigatória')).not.toBeNull();
      expect(queryByText('Tags obrigatórias')).not.toBeNull();
    });
  });
});
