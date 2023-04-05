import React from 'react';

import {
  Card, LineForm, SubTitle, Text, Button, Division,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';

export default function User() {
  return (
    <Card>
      <Title>Cadastre sua conta</Title>

      <SubTitle>Vamos começar  pela conta de usuario</SubTitle>

      <Text>
        Preencha seu email que utiliza profissionalmente,
        nome completo de pessoa fisica e seu numero de celular
      </Text>

      <Input label="Email" type="email" />

      <LineForm>
        <Input label="Nome completo" width="240px" />
        <Input label="Celular" width="160px" />
      </LineForm>

      <Checkbox label="Eu li e concordo com o Contrato de Uso" />

      <Division />

      <Button type="button">Cadastrar</Button>
    </Card>
  );
}
