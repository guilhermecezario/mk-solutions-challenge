import React from 'react';

import {
  Container, Content, Label, Input, Button, Text,
} from './styles';

interface InputProps {
  label: string;
  subtitle: string;
}

export default function InputFile({ label, subtitle }: InputProps) {
  return (
    <Container>
      <Content>
        <Label>{label}</Label>
        <Text>{subtitle}</Text>
      </Content>

      <Input type="file" />

      <Button>Enviar</Button>
    </Container>
  );
}
