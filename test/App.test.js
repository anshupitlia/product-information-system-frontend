import React from 'react';

import { render, screen } from '@testing-library/react';

import App from '../src/App';

test('renders products link', () => {

  render(<App />);

  const linkElement = screen.getByText(/products/i);

  expect(linkElement).toBeInTheDocument();

});
