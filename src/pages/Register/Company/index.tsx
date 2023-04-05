import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { BsRouter, BsThreeDots } from 'react-icons/bs';

import {
  Card, Label, LineForm, Text, Button, Division, ButtonLink, Form,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Radio from '../../../components/Radio';

export default function Company() {
  const navigate = useNavigate();

  const [segment, setSegment] = useState('providers');
  const [typeCompany, setTypeCompany] = useState('providers');

  const [cnpj, setCnpj] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');

  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const typeCompanyOptions = ['Comunicação', 'Infraestrutra']

  const handleChangeSegment = (event: ChangeEvent<HTMLInputElement>): void => {
    setSegment(event.target.value);
  }

  const handleChangeTypeCompany = (event: ChangeEvent<HTMLSelectElement>): void => {
    setTypeCompany(event.target.value);
  }

  const handleChangeCnpj = (event: ChangeEvent<HTMLInputElement>): void => {
    setCnpj(event.target.value);
  }

  const handleChangeCompanyName = (event: ChangeEvent<HTMLInputElement>): void => {
    setCompanyName(event.target.value);
  }

  const handleChangePhone = (event: ChangeEvent<HTMLInputElement>): void => {
    setPhone(event.target.value);
  }

  const handleChangeCep = (event: ChangeEvent<HTMLInputElement>): void => {
    setCep(event.target.value);
  }

  const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>): void => {
    setAddress(event.target.value);
  }

  const handleChangeNumber = (event: ChangeEvent<HTMLInputElement>): void => {
    setNumber(event.target.value);
  }

  const handleChangeComplement = (event: ChangeEvent<HTMLInputElement>): void => {
    setComplement(event.target.value);
  }

  const handleChangeNeighborhood = (event: ChangeEvent<HTMLInputElement>): void => {
    setNeighborhood(event.target.value);
  }

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    navigate("/register/documents");
  }

  const navigationToBack = () => {
    navigate("/register/validation")
  }

  return (
    <Card>
      <Title>Cadastre sua empresa</Title>

      <Text>
        Agora cadastre as informações da sua empresa para
        criar sua conta empresarial customizada para o seu negocio
      </Text>

      <Label>Escolha o segmento de sua empresa</Label>

      <Form onSubmit={handleSubmit}>
        <LineForm>
          <Radio
            value="providers"
            onChange={handleChangeSegment}
            checked={segment === "providers"}
          >
            <BsRouter size="36px" color="#ADC8D3" />
            Provedores de internet
          </Radio>
          <Radio
            value="others"
            onChange={handleChangeSegment}
            checked={segment === "others"}
          >
            <BsThreeDots size="36px" color="#ADC8D3" />
            Outros segmentos
          </Radio>
        </LineForm>

        <Division />

        <Select
          label="Tipo de empresa"
          width="370px"
          placeholder="Selecione o tipo da empresa"
          value={typeCompany}
          onChange={handleChangeTypeCompany}
          isRequired
          options={typeCompanyOptions}
        />

        <Input
          label="CNPJ"
          value={cnpj}
          onChange={handleChangeCnpj}
          isRequired
          width="220px"
        />

        <LineForm>
          <Input
            label="Razão social"
            value={companyName}
            onChange={handleChangeCompanyName}
            isRequired
            width="280px"
          />

          <Input
            label="Telefone"
            value={phone}
            onChange={handleChangePhone}
            isRequired
            width="180px"
          />
        </LineForm>

        <Input
          label="CEP"
          value={cep}
          onChange={handleChangeCep}
          isRequired
          width="130px"
        />

        <Input
          label="Endereço"
          value={address}
          onChange={handleChangeAddress}
          isRequired
          width="480px"
        />

        <LineForm>
          <Input
            label="Número"
            value={number}
            onChange={handleChangeNumber}
            isRequired
            width="160px"
          />
          <Input
            label="Complemento"
            value={complement}
            onChange={handleChangeComplement}
            isRequired
            width="160px"
          />
          <Input
            label="Bairro"
            value={neighborhood}
            onChange={handleChangeNeighborhood}
            isRequired
            width="240px"
          />
        </LineForm>

        <LineForm>
          <Button type="submit">Confirmar</Button>

          <ButtonLink onClick={navigationToBack}>Voltar</ButtonLink>
        </LineForm>
      </Form>
    </Card>
  );
}
