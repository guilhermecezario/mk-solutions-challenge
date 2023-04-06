import React, { ChangeEvent } from 'react';

import { Container, InputText } from './styles';

interface InputProps {
  label: string;
  value: string;
  type?: string;
  width?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean
}

export default function Input({
  label, value, type, width, onChange, isRequired
}: InputProps) {
  return (
    <Container>
      <span>{label}</span>

      <InputText
        width={width}
        type={type}
        value={value}
        onChange={onChange}
        required={isRequired}
      />
    </Container>
  );
}

Input.defaultProps = {
  type: 'text',
  width: '330px',
  isRequired: false,
};
