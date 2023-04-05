import React from 'react';

import { Container, Label, InputText } from './styles';

interface InputProps {
  label: string;
  type?: string;
  width?: string;
}

export default function Input({ label, type, width }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText width={width} type={type} />
    </Container>
  );
}

Input.defaultProps = {
  type: 'text',
  width: '330px',
};
