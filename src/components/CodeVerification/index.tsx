import React from 'react';

import OtpInput from 'react-otp-input';

import { Container, Label, InputNumber } from './styles';

interface Props {
  value: string;
  label: string;
  onChange: (value: string) => void;
}

export default function CodeVerification({ value, label, onChange }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <OtpInput
        value={value}
        onChange={onChange}
        numInputs={6}
        renderInput={(props) => <InputNumber {...props} placeholder="0" />}
      />
    </Container>
  );
}
