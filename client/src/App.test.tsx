import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText, container } = render(<App />);

  const linkElement = getByText(/Giphy search/i);
  expect(linkElement).toBeInTheDocument();
});
