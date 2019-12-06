import React from 'react';
import App from './App';

import { render } from '@testing-library/react';

test('App renders without flipping TFO', () => {
  render(<App />)
})

test('At least one element with testid = h1 renders', () => {
  const page = render(<App/>);
  page.getAllByTestId('h1');
})

test('button renders', () => {
  const page = render(<App/>);
  page.getAllByTestId('button');
})
