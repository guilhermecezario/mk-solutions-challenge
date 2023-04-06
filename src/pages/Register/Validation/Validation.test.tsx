import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Validation from '.';

import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// const middlewares = []
const mockStore = configureStore([
  
])

const setup = () => {
  const initialState = {
    user: {
      register: {
        phone: '123-456-7890'
      }
    }
  }
  const store = mockStore(initialState)

  const history = createMemoryHistory();
  
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Validation />
      </Provider>
    </MemoryRouter>
  );
}

describe('Validation page', () => {
  // it('renders all input fields', () => {
  //   setup()

  //   expect(emailInput).toBeInTheDocument();
  //   expect(nameInput).toBeInTheDocument();
  //   expect(phoneInput).toBeInTheDocument();
  // });

  it('displays the phone obtained from the Redux store', () => {
    setup()

    expect(screen.getByText('123-456-7890')).toBeInTheDocument();
  });

  it('submits the form with valid input', () => {
    setup()

    const submitButton = screen.getByText('Confirmar');

    fireEvent.click(submitButton);

    // expect(dispatchMock).toHaveBeenCalledTimes(1);
  });
});