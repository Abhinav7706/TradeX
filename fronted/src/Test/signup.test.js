import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
  BrowserRouter: ({ children }) => <div>{children}</div>,
  useLocation: () => ({ pathname: '/signup' }),
}), { virtual: true });

import Signup from '../landing-page/signup/Signup';

describe('Signup component', () => {
  test('renders the Signup & Login tabs and inputs', () => {
    render(<Signup />);
    expect(screen.getAllByRole('button', { name: /sign up/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('button', { name: /log in/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByPlaceholderText(/e\.g\. rahul_sharma/i)).toBeInTheDocument();
  });
});
