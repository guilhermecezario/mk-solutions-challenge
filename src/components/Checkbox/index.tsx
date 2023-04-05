import React from 'react'

import { Container, Input } from './styles'

interface CheckboxProps {
    label: string
}

export default function Checkbox({ label }: CheckboxProps) {
  return (
    <Container>
      <Input type="checkbox" />
      {label}
    </Container>
  )
}
