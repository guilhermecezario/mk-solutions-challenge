import React, { ChangeEvent } from 'react';

import { BsFillCheckCircleFill } from 'react-icons/bs';

import {
  Container, Content, Label, Input, Button, Text, TextSend
} from './styles';

interface InputProps {
  label: string;
  subtitle: string;
  value: File | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputFile({ label, subtitle, value, onChange }: InputProps) {
  return (
    <Container>
      {value && (<BsFillCheckCircleFill color="#63D391" size="18px" />)}

      <Content>
        <Label>{label}</Label>
        <Text>{subtitle}</Text>
      </Content>

      <Input type="file" onChange={onChange} />

      {value ? (
        <TextSend>Enviado</TextSend>
      ) : <Button>Enviar</Button>}
    </Container>
  );
}
