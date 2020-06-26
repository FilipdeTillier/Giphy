import React from 'react';
import { render, fireEvent, cleanup, act, wait } from '@testing-library/react';
import ImagesPage from './ImagesPage';

jest.mock('../services/giphyService', () => {
  return {
    getGiphy: () => [],
  };
});

const setup = () => {
  const container = render(<ImagesPage />);
  const searchInput: HTMLElement = container.getByTestId('searchInput');
  const serachButton: HTMLElement = container.getByTestId('serachButton');
  return {
    container,
    searchInput,
    serachButton,
  };
};

beforeEach(() => {
  jest.restoreAllMocks();
  jest.resetModules();
});

afterEach(cleanup);

describe('Image page tests', () => {
  it('render component proprely', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('input should be empty on start', () => {
    const { searchInput } = setup();
    expect(searchInput).toHaveValue('');
  });

  it('should inform about no resultsu', async () => {
    const { searchInput, serachButton, container } = setup();
    await act(async () => {
      await fireEvent.change(searchInput, { target: { value: 'Test' } });
      await fireEvent.click(serachButton);
      await wait(() => {
        container.getByTestId('noResults');
      });
    });
  });
});
