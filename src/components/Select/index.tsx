import React from 'react';

import { Container, Label, InputSelect } from './styles';

interface SelectProps {
  label: string;
  placeholder: string | undefined;
  width?: string;
}

export default function Select({ label, placeholder, width }: SelectProps) {
  return (
    <Container>
      <Label>{label}</Label>

      <InputSelect width={width}>
        <option value="">{placeholder}</option>
      </InputSelect>
    </Container>
  );
}

Select.defaultProps = {
  width: '330px',
};
