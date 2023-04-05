import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
  Card, Form, LineForm, SubTitle, Text, Button, Division,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';

import { useDispatch } from 'react-redux'
import { registerUser } from '../../../store/reducers/user'

export default function User() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  }

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  }

  const handleChangePhone = (event: ChangeEvent<HTMLInputElement>): void => {
    setPhone(event.target.value);
  }

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    dispatch(registerUser({
      phone,
      token: "1234"
    }))

    navigate("/register/validation");
  }

  return (
    <Card>
      <Title>Cadastre sua conta</Title>

      <SubTitle>Vamos começar  pela conta de usuario</SubTitle>

      <Text>
        Preencha seu email que utiliza profissionalmente,
        nome completo de pessoa fisica e seu numero de celular
      </Text>

      <Form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          isRequired
        />

        <LineForm>
          <Input
            label="Nome completo"
            width="240px"
            value={name}
            onChange={handleChangeName}
            isRequired
          />
          <Input
            label="Celular"
            width="160px"
            value={phone}
            onChange={handleChangePhone}
            isRequired
          />
        </LineForm>

        <Checkbox label="Eu li e concordo com o Contrato de Uso" />

        <Division />

        <Button type="submit">Cadastrar</Button>
      </Form>

    </Card>
  );
}
