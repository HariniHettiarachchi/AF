import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import Countries from './Countries';

jest.mock('axios');

describe('Countries Component', () => {
  test('fetches and displays countries', async () => {
    const mockCountries = [
      { cca3: 'USA', name: { common: 'United States' }, region: 'Americas', flags: { png: 'flag.png' } },
      { cca3: 'CAN', name: { common: 'Canada' }, region: 'Americas', flags: { png: 'flag.png' } },
    ];
    axios.get.mockResolvedValueOnce({ data: mockCountries });

    render(
      <BrowserRouter>
        <Countries />
      </BrowserRouter>
    );

    expect(screen.getByText(/Loading countries/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/United States/i)).toBeInTheDocument();
      expect(screen.getByText(/Canada/i)).toBeInTheDocument();
    });
  });

  test('filters countries by region', async () => {
    const mockCountries = [
      { cca3: 'USA', name: { common: 'United States' }, region: 'Americas', flags: { png: 'flag.png' } },
    ];
    axios.get.mockResolvedValueOnce({ data: mockCountries });

    render(
      <BrowserRouter>
        <Countries />
      </BrowserRouter>
    );

    const regionSelect = screen.getByDisplayValue(/All Regions/i);
    fireEvent.change(regionSelect, { target: { value: 'Americas' } });

    await waitFor(() => {
      expect(screen.getByText(/United States/i)).toBeInTheDocument();
    });
  });
});
