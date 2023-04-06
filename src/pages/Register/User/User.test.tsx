import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import User from '.';

import {MemoryRouter} from 'react-router-dom'

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([])

const setup = () => {
  const initialState = {}
  const store = mockStore(initialState)
  const dispatchMock = jest.fn();
  jest.spyOn(store, 'dispatch').mockImplementation(dispatchMock);
  
  render(
    <MemoryRouter>
      <Provider store={store}>
        <User />
      </Provider>
    </MemoryRouter>
  );

  const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
  const nameInput = screen.getByLabelText('Nome completo') as HTMLInputElement;
  const phoneInput = screen.getByLabelText('Celular') as HTMLInputElement;
  
  return {
    emailInput,
    nameInput,
    phoneInput,
    dispatchMock
  }
}

describe('User page', () => {
  it('renders all input fields', () => {
    const { emailInput, nameInput, phoneInput} = setup()

    expect(emailInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
  });

  it('updates state when inputs change', () => {
    const { emailInput, nameInput, phoneInput} = setup()

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(nameInput, { target: { value: 'Guilherme' } });
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });

    expect(emailInput.value).toBe('test@test.com');
    expect(nameInput.value).toBe('Guilherme');
    expect(phoneInput.value).toBe('123-456-7890');
  });

  it('submits the form with valid input', () => {
    const { emailInput, nameInput, phoneInput, dispatchMock} = setup()

    const submitButton = screen.getByText('Cadastrar');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(nameInput, { target: { value: 'Guilherme' } });
    fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
    fireEvent.click(submitButton);

    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });
});