import React, { ChangeEvent } from 'react';

import { Container, Label, InputSelect } from './styles';

interface SelectProps {
  label: string;
  placeholder: string | undefined | null;
  width?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  isRequired: boolean;
}

export default function Select({
  label, placeholder, width, value, onChange, options, isRequired
}: SelectProps) {
  return (
    <Container>
      <Label>{label}</Label>

      <InputSelect
        width={width}
        value={value}
        onChange={onChange}
        required={isRequired}
      >
        <option value="">{placeholder}</option>

        {options.map((op) => (
          <option value={op} key={op}>{op}</option>
        ))}
      </InputSelect>
    </Container>
  );
}

Select.defaultProps = {
  width: '330px',
};
