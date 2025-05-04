import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders the GeoVista logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText(/GeoVista/i)).toBeInTheDocument();
  });

  test('navigates to the World Map when the link is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const mapLink = screen.getByText(/World Map/i);
    expect(mapLink).toBeInTheDocument();
  });

  test('toggles the mobile menu', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const menuButton = screen.getByLabelText(/Menu/i);
    fireEvent.click(menuButton);
    expect(screen.getByText(/Explore our beautiful planet/i)).toBeInTheDocument();
  });
});
