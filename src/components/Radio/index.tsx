import React, { ChangeEvent, ReactNode } from 'react';

import {BsFillCheckCircleFill, BsCircle} from 'react-icons/bs';

import { Container, Input, IconSelect } from './styles';

interface RadioProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  children: ReactNode;
}

export default function Radio({ value, onChange, checked, children }: RadioProps) {
  return (
    <Container>
      <Input
        type="radio"
        value={value}
        onChange={onChange}
        checked={checked}
      />

      <IconSelect>
        {checked ? (
          <BsFillCheckCircleFill color="#63D391" size="18px" />
        
        ) : (
          <BsCircle size="18px" />
        )}
      </IconSelect>

      {children}
    </Container>
  );
}
