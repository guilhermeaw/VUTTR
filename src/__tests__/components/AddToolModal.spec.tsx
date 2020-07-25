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

  it('should render error messages when submit form with invalid schema', async () => {
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

  it('should not render error messages when submit form with valid schema', async () => {
    const { getByTestId, queryByText, getByPlaceholderText } = render(
      <AddToolModal
        ariaHideApp={false}
        onRequestSubmit={() => jest.fn()}
        isOpen
      />,
    );

    const addToolButton = getByTestId('addTool-button');

    fireEvent.change(getByPlaceholderText('EX: Yarn'), {
      target: { value: 'Yarn' },
    });

    fireEvent.change(getByPlaceholderText('EX: https://yarnpkg.com/'), {
      target: { value: 'https://yarnpkg.com/' },
    });

    fireEvent.change(getByPlaceholderText('EX: Yarn is a package manager'), {
      target: { value: 'Yarn is a package manager' },
    });

    fireEvent.change(
      getByPlaceholderText('EX: package-manager innovation react'),
      {
        target: { value: 'package-manager innovation react' },
      },
    );

    fireEvent.click(addToolButton);

    await waitFor(() => {
      expect(queryByText('Nome obrigatório')).toBeNull();
      expect(queryByText('Link obrigatório')).toBeNull();
      expect(queryByText('Descrição obrigatória')).toBeNull();
      expect(queryByText('Tags obrigatórias')).toBeNull();
    });
  });

  it('should close modal when submit form with valid schema', async () => {
    const toggleAddTool = jest.fn();

    const { getByTestId, getByPlaceholderText } = render(
      <AddToolModal
        ariaHideApp={false}
        onRequestSubmit={toggleAddTool}
        isOpen
      />,
    );

    const addToolButton = getByTestId('addTool-button');

    fireEvent.change(getByPlaceholderText('EX: Yarn'), {
      target: { value: 'Yarn' },
    });

    fireEvent.change(getByPlaceholderText('EX: https://yarnpkg.com/'), {
      target: { value: 'https://yarnpkg.com/' },
    });

    fireEvent.change(getByPlaceholderText('EX: Yarn is a package manager'), {
      target: { value: 'Yarn is a package manager' },
    });

    fireEvent.change(
      getByPlaceholderText('EX: package-manager innovation react'),
      {
        target: { value: 'package-manager innovation react' },
      },
    );

    fireEvent.click(addToolButton);

    await waitFor(() => {
      expect(toggleAddTool).toHaveBeenCalled();
    });
  });
});
