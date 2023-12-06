import { render, screen } from '@testing-library/react'
import App from './App'

test('renders text CodePen', () => {
  render(<App />)
  const nameElement = screen.getByText(/codepen/i)
  expect(nameElement).toBeInTheDocument()
});