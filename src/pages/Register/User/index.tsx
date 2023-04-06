import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useTranslation } from 'react-i18next'

import {
  Card, Form, LineForm, SubTitle, Text, Button, Division,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';

import { useDispatch } from 'react-redux'
import { registerUser } from '../../../store/reducers/user'

import api from '../../../services/api';

export default function User() {
  const { t } = useTranslation();

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

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    const response = await api.post("/users", {
      email,
      name,
      phone
    });

    dispatch(registerUser(response.data))

    navigate("/register/validation");
  }

  return (
    <Card>
      <Title>{t('Register your account')}</Title>

      <SubTitle>{t("Let's start with the user account")}</SubTitle>

      <Text>
      {t('Fill in your email')}
      </Text>

      <Form onSubmit={handleSubmit}>
        <Input
          label={t('Email')}
          type="email"
          value={email}
          onChange={handleChangeEmail}
          isRequired
        />

        <LineForm>
          <Input
            label={t('Full name')}
            width="240px"
            value={name}
            onChange={handleChangeName}
            isRequired
          />
          <Input
            label={t('Phone')}
            width="160px"
            value={phone}
            onChange={handleChangePhone}
            isRequired
          />
        </LineForm>

        <Checkbox label={t('I have read and')} />

        <Division />

        <Button type="submit">{t('Register')}</Button>
      </Form>

    </Card>
  );
}
