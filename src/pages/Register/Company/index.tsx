import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useTranslation } from 'react-i18next'

import { BsRouter, BsThreeDots } from 'react-icons/bs';

import {
  Card, Label, LineForm, Text, Button, Division, ButtonLink, Form,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Radio from '../../../components/Radio';
import api from '../../../services/api';

export default function Company() {
  const { t } = useTranslation();

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

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    try {
      await api.post("/validation", {
        segment,
        typeCompany,
        cnpj,
        companyName,
        phone,
        cep,
        address,
        number,
        complement,
        neighborhood,
      });
  
      navigate("/register/documents");
    } catch (error) {
      
    }

    navigate("/register/documents");
  }

  const navigationToBack = () => {
    navigate("/register/validation")
  }

  return (
    <Card>
      <Title>{t("Register your company")}</Title>

      <Text>
      {t("Now register as")}
      </Text>

      <Label>{t("Choose the segment")}</Label>

      <Form onSubmit={handleSubmit}>
        <LineForm>
          <Radio
            value="providers"
            onChange={handleChangeSegment}
            checked={segment === "providers"}
          >
            <BsRouter size="36px" color="#ADC8D3" />
            {t("Internet providers")}
          </Radio>
          <Radio
            value="others"
            onChange={handleChangeSegment}
            checked={segment === "others"}
          >
            <BsThreeDots size="36px" color="#ADC8D3" />
            {t("Other segments")}
          </Radio>
        </LineForm>

        <Division />

        <Select
          label={t("Company type")}
          width="370px"
          placeholder={t("Select company type")}
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
            label={t("Social reason")}
            value={companyName}
            onChange={handleChangeCompanyName}
            isRequired
            width="280px"
          />

          <Input
            label={t("Phone")}
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
          label={t("Address")}
          value={address}
          onChange={handleChangeAddress}
          isRequired
          width="480px"
        />

        <LineForm>
          <Input
            label={t("Number")}
            value={number}
            onChange={handleChangeNumber}
            isRequired
            width="160px"
          />
          <Input
            label={t("Complement")}
            value={complement}
            onChange={handleChangeComplement}
            isRequired
            width="160px"
          />
          <Input
            label={t("Neighborhood")}
            value={neighborhood}
            onChange={handleChangeNeighborhood}
            isRequired
            width="240px"
          />
        </LineForm>

        <LineForm>
          <Button type="submit">{t("Confirm")}</Button>

          <ButtonLink onClick={navigationToBack}>{t("Back")}</ButtonLink>
        </LineForm>
      </Form>
    </Card>
  );
}
