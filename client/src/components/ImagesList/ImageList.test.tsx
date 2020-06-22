import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ImagesList from './ImagesList';

const images = new Array(10)
  .fill('')
  .map((el: string, index: number) => index.toString());

const loadMore = jest.fn();

const setup = () => {
  const container = render(<ImagesList images={images} loadMore={loadMore} />);
  const renderedImages: HTMLElement[] = container.getAllByRole('img');
  const loadMoreButton: HTMLElement = container.getByTestId('loadMore');
  return {
    container,
    renderedImages,
    loadMoreButton,
  };
};

test('render component proprely', () => {
  const { container } = setup();
  expect(container).toMatchSnapshot();
});

test('should render 10 elements and load button', () => {
  const { renderedImages, loadMoreButton } = setup();
  expect(renderedImages).toHaveLength(10);
  expect(loadMoreButton).toBeTruthy();
});

test('click button should run method', () => {
  const { loadMoreButton } = setup();
  fireEvent.click(loadMoreButton);
  expect(loadMore).toHaveBeenCalledTimes(1);
});
