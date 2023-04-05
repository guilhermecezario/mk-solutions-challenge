import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Label, ButtonLink } from './styles';

import {
  Card, Text, Button, Division, Form,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import InputFile from '../../../components/InputFile';

export default function Documents() {
  const navigate = useNavigate();

  const [socialContractFile, setSocialContractFile] = useState<File>();
  const [documentFile, setDocumentFile] = useState<File>();
  const [selfieDocumentFile, setSelfieDocumentFile] = useState<File>();

  const handleChangeSocialContractFile = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;
    const selectedFiles = files as FileList;

    setSocialContractFile(selectedFiles?.[0]);
  }

  const handleChangeDocumentFile = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;
    const selectedFiles = files as FileList;

    setDocumentFile(selectedFiles?.[0]);
  }

  const handleChangeSelfieDocumentFile = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;
    const selectedFiles = files as FileList;

    setSelfieDocumentFile(selectedFiles?.[0]);
  }

  const handleSubmit = (event: FormEvent): void => {
    navigate("/register/confirmation");
  }

  return (
    <Card>
      <Title>Envie os documentos</Title>

      <Text>
        Para concluir o processo de cadastro,
        voce deve enviar os documentos da empresa e
        indentificação sua como responsavel pela empresa.
      </Text>

      <Label>Envie os documentos abaixo</Label>

      <Form onSubmit={handleSubmit}>
        <InputFile
          label="Contrato social"
          subtitle="Envie o contrato social completo da empresa"
          value={socialContractFile}
          onChange={handleChangeSocialContractFile}
        />

        <InputFile
          label="RG ou CNH"
          subtitle="Envie uma copia do documento de pessoa fisica"
          value={documentFile}
          onChange={handleChangeDocumentFile}
        />

        <InputFile
          label="Selfie com o documento"
          subtitle="Tire uma selfie segurando o documento de identificação"
          value={selfieDocumentFile}
          onChange={handleChangeSelfieDocumentFile}
        />

        <ButtonLink>Não sou o responsavel ou socio da empresa</ButtonLink>

        <Division />

        <Button type="submit">Cadastrar</Button>
      </Form>

    </Card>
  );
}
