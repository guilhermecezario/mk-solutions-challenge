import React from 'react';

import { Container, Text, Line } from './styles';

interface TitleProps {
  children: string;
}

export default function Title({ children }: TitleProps) {
  return (
    <Container>
      <Text>{children}</Text>
      <Line />
    </Container>
  );
}
