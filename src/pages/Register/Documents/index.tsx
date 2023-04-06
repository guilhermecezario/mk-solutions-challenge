import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Label, ButtonLink } from './styles';

import {
  Card, Text, Button, Division, Form,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import InputFile from '../../../components/InputFile';
import { toast } from 'react-toastify';
import api from '../../../services/api';

export default function Documents() {
  const navigate = useNavigate();

  const [socialContractFile, setSocialContractFile] = useState<File>();
  const [documentFile, setDocumentFile] = useState<File>();
  const [selfieDocumentFile, setSelfieDocumentFile] = useState<File>();

  const handleChangeSocialContractFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const { files } = event.target;
    const selectedFiles = files as FileList;

    try {
      await handleUploadFile(selectedFiles?.[0], "social-contract")

      setSocialContractFile(selectedFiles?.[0]);
    } catch (error) {
      toast.error("Erro ao enviar RG ou CNH");
    }
  }

  const handleChangeDocumentFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const { files } = event.target;
    const selectedFiles = files as FileList;

    try {
      await handleUploadFile(selectedFiles?.[0], "document")

      setDocumentFile(selectedFiles?.[0]);
    } catch (error) {
      toast.error("Erro ao enviar o contrato social");
    }
  }

  const handleChangeSelfieDocumentFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const { files } = event.target;
    const selectedFiles = files as FileList;

    try {
      await handleUploadFile(selectedFiles?.[0], "selfie-document")

      setSelfieDocumentFile(selectedFiles?.[0]);
    } catch (error) {
      toast.error("Erro ao enviar o contrato social");
    }
  }

  const handleSubmit = (event: FormEvent): void => {
    if (!socialContractFile || !documentFile || !selfieDocumentFile) {
      toast("Adicione todos os documentos para continuar");

      return;
    }

    navigate("/register/confirmation");
  }

  const handleUploadFile = (file: File, url: string): Promise<any> => {
    let formData = new FormData();
  
    formData.append("file", file);
  
    return api.post(`company/document/${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

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
