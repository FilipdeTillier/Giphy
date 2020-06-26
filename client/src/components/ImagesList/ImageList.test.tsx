import React from 'react';
import { render } from '@testing-library/react';
import ImagesList from './ImagesList';

const images = new Array(10)
  .fill('')
  .map((el: string, index: number) => index.toString());

const setup = () => {
  const container = render(<ImagesList images={images} />);
  const renderedImages: HTMLElement[] = container.getAllByRole('img');
  return {
    container,
    renderedImages,
  };
};

describe('Image list tests', () => {
  it('render component proprely', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('should render 10 elements and load button', () => {
    const { renderedImages } = setup();
    expect(renderedImages).toHaveLength(10);
  });
});
