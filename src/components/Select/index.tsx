import React from 'react';

import { Container, Label, InputSelect } from './styles';

interface SelectProps {
  label: string;
  width?: string;
}

export default function Select({ label, width }: SelectProps) {
  return (
    <Container>
      <Label>{label}</Label>

      <InputSelect width={width} />
    </Container>
  );
}

Select.defaultProps = {
  width: '330px',
};
