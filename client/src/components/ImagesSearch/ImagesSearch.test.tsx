import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ImagesSearch from './ImagesSearch';

const onSubmit = jest.fn();

const setup = () => {
  const container = render(<ImagesSearch onSubmit={onSubmit} />);
  const searchInput: HTMLElement = container.getByTestId('searchInput');
  const serachButton: HTMLElement = container.getByTestId('serachButton');
  return {
    container,
    searchInput,
    serachButton,
  };
};

describe('Image serach tests', () => {
  it('render component proprely', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('renders images search component', () => {
    const { searchInput, serachButton } = setup();
    expect(searchInput).toBeInTheDocument();
    expect(serachButton).toBeInTheDocument();
  });

  it('on click submit with empty input shouldnt call method', async () => {
    const { serachButton } = setup();
    fireEvent.click(serachButton);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it('on click submit should call method once', () => {
    const { searchInput, serachButton } = setup();
    fireEvent.change(searchInput, { target: { value: 'Test' } });
    fireEvent.click(serachButton);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
