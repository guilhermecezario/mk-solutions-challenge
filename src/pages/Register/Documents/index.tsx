import React from 'react';

import { Label, ButtonLink } from './styles';

import {
  Card, Text, Button, Division,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import InputFile from '../../../components/InputFile';

export default function Documents() {
  return (
    <Card>
      <Title>Envie os documentos</Title>

      <Text>
        Para concluir o processo de cadastro,
        voce deve enviar os documentos da empresa e
        indentificação sua como responsavel pela empresa.
      </Text>

      <Label>Envie os documentos abaixo</Label>

      <InputFile label="Contrato social" subtitle="Envie o contrato social completo da empresa" />
      <InputFile label="RG ou CNH" subtitle="Envie uma copia do documento de pessoa fisica" />
      <InputFile label="Selfie com o documento" subtitle="Tire uma selfie segurando o documento de identificação" />

      <ButtonLink>Não sou o responsavel ou socio da empresa</ButtonLink>

      <Division />

      <Button type="button">Cadastrar</Button>
    </Card>
  );
}
