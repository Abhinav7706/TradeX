import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
  useLocation: () => ({ pathname: '/' }),
}), { virtual: true });

import Navbar from '../landing-page/Navbar';

describe('Navbar Authentication Buttons', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('shows Sign Up button when user is not signed up', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
  });

  test('shows Login button when user has previously signed up', () => {
    localStorage.setItem('isRegistered', 'true');
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /^login$/i })).toBeInTheDocument();
  });

  test('shows Dashboard and username when user is logged in', () => {
    localStorage.setItem('user', JSON.stringify({ username: 'abhinav' }));
    render(<Navbar />);
    expect(screen.getByText(/Hi, abhinav/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
  });
});
