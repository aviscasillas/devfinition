import { render, screen } from '@testing-library/react';

import devfinitions from './data/devfinitions.json';
import App from './App';

test('App renders a random devfinition', () => {
  jest.spyOn(Math, 'random').mockImplementation(() => 0);

  render(<App />);
  const nameElement = screen.getByText(devfinitions[0]["name"]);
  expect(nameElement).toBeInTheDocument();
});

