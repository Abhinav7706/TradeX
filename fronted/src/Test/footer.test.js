import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
}), { virtual: true });

import Footer from '../landing-page/Footer';

describe('Footer Component', () => {
  test('renders TradeX logo and company sections', () => {
    render(<Footer />);
    expect(screen.getByAltText('TradeX logo')).toBeInTheDocument();
    expect(screen.getByText(/TradeX Technologies & Broking Ltd/i)).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Support & Learning')).toBeInTheDocument();
    expect(screen.getByText('Account & Trading')).toBeInTheDocument();
  });
});
