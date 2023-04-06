import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useTranslation } from 'react-i18next';

import { Label, ButtonLink } from './styles';

import {
  Card, Text, Button, Division, Form,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import InputFile from '../../../components/InputFile';
import { toast } from 'react-toastify';
import api from '../../../services/api';

export default function Documents() {
  const { t } = useTranslation();

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
      toast.error(t("Error sending social contract"));
    }
  }

  const handleChangeDocumentFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const { files } = event.target;
    const selectedFiles = files as FileList;

    try {
      await handleUploadFile(selectedFiles?.[0], "document")

      setDocumentFile(selectedFiles?.[0]);
    } catch (error) {
      toast.error(t("Error sending RG or CNH"));
    }
  }

  const handleChangeSelfieDocumentFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const { files } = event.target;
    const selectedFiles = files as FileList;

    try {
      await handleUploadFile(selectedFiles?.[0], "selfie-document")

      setSelfieDocumentFile(selectedFiles?.[0]);
    } catch (error) {
      toast.error(t("Error sending selfie with document"));
    }
  }

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    if (!socialContractFile || !documentFile || !selfieDocumentFile) {
      toast(t("Add all documents to continue"));

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
      <Title>{t("Send the documents")}</Title>

      <Text>
      {t("To complete the process")}
      </Text>

      <Label>{t("Send the documents below")}</Label>

      <Form onSubmit={handleSubmit}>
        <InputFile
          label={t("Social contract")}
          subtitle={t("Send the complete articles of incorporation of the company")}
          value={socialContractFile}
          onChange={handleChangeSocialContractFile}
        />

        <InputFile
          label={t("RG or CNH")}
          subtitle={t("Send a copy of the natural person document")}
          value={documentFile}
          onChange={handleChangeDocumentFile}
        />

        <InputFile
          label={t("Selfie with document")}
          subtitle={t("Take a selfie holding ID")}
          value={selfieDocumentFile}
          onChange={handleChangeSelfieDocumentFile}
        />

        <ButtonLink>{t("I am not the person in charge or partner of the company")}</ButtonLink>

        <Division />

        <Button type="submit">{t("Register")}</Button>
      </Form>

    </Card>
  );
}
