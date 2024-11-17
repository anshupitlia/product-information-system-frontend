// ProductList.test.js

import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';

import ProductList from '../src/components/ProductList';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

test('fetches and displays product list data', async () => {
  const mockResponse = [{ title: 'Mascara', sku: 'SKU1', price: '19.99', country: 'UK', discountPercentage: '0.5'  }];
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return new Promise((resolve, reject) => {
      resolve({
        ok: true,
        status,
        json: () => {
          return mockResponse ? mockResponse : {};
        },
      });
    });
  });

  render(<BrowserRouter><ProductList/></BrowserRouter>);

  const productTitleElement = await waitFor(() => screen.getByText(/Mascara/i));
  expect(productTitleElement).toBeInTheDocument();
});