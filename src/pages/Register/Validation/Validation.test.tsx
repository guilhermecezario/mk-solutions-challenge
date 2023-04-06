import React from 'react';
import { render, screen } from '@testing-library/react';

import Validation from '.';

import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([])

const setup = () => {
  const initialState = {
    user: {
      register: {
        phone: '123-456-7890'
      }
    }
  }
  const store = mockStore(initialState)
  
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Validation />
      </Provider>
    </MemoryRouter>
  );
}

describe('Validation page', () => {
  it('displays the phone obtained from the Redux store', () => {
    setup()

    expect(screen.getByText('123-456-7890')).toBeInTheDocument();
  });
});