import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DDD', () => {
  render(<App />);
  const linkElement = screen.getByText(/DDD/i);
  expect(linkElement).toBeInTheDocument();
});
