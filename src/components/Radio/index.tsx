import React, { ReactNode } from 'react';

import * as Icons from 'react-icons/bs';

import { Container, Input, IconSelect } from './styles';

interface RadioProps {
  children: ReactNode;
}

export default function Radio({ children }: RadioProps) {
  return (
    <Container htmlFor="html">
      <Input type="radio" id="html" name="fav_language" value="HTML" />

      <IconSelect>
        <Icons.BsFillCheckCircleFill color="#63D391" size="18px" />
      </IconSelect>

      {children}
    </Container>
  );
}
