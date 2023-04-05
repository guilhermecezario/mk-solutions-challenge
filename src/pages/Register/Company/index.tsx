import React from 'react';

import { BsRouter, BsThreeDots } from 'react-icons/bs';

import {
  Card, LineForm, Text, Button, Division, ButtonLink,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Radio from '../../../components/Radio';

export default function Company() {
  return (
    <Card>
      <Title>Cadastre sua empresa</Title>

      <Text>
        Agora cadastre as informações da sua empresa para
        criar sua conta empresarial customizada para o seu negocio
      </Text>

      <LineForm>
        <Radio>
          <BsRouter size="36px" color="#ADC8D3" />
          Provedores de internet
        </Radio>
        <Radio>
          <BsThreeDots size="36px" color="#ADC8D3" />
          Outros segmentos
        </Radio>
      </LineForm>

      <Division />

      <Select label="Tipo de empresa" width="370px" placeholder="Selecione o tipo da empresa" />

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

      <LineForm>
        <Button type="button">Confirmar</Button>

        <ButtonLink>Voltar</ButtonLink>
      </LineForm>
    </Card>
  );
}
