import React from 'react';

import {
  Card, LineForm, Text, Button, Division,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

export default function Company() {
  return (
    <Card>
      <Title>Cadastre sua empresa</Title>

      <Text>
        Agora cadastre as informações da sua empresa para
        criar sua conta empresarial customizada para o seu negocio
      </Text>

      <Division />

      <Select label="Tipo de empresa" width="220px" />

      <Input label="CNPJ" width="220px" type="select" />

      <LineForm>
        <Input label="Razão social" width="280px" />
        <Input label="Telefone" width="180px" />
      </LineForm>

      <Input label="CEP" width="130px" />

      <Input label="Endereço" width="480px" />

      <LineForm>
        <Input label="Número" width="160px" />
        <Input label="Complemento" width="160px" />
        <Input label="Bairro" width="240px" />
      </LineForm>

      <Button type="button">Confirmar</Button>
    </Card>
  );
}
