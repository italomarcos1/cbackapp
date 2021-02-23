import React, { useRef } from 'react';

import { Container, Label, Input } from './styles';

export default function InputMask({ label, mask, setText, style, ...rest }) {
  const inputRef = useRef();

  return (
    <Container style={style}>
      <Label>{label}</Label>
      <Input
        refInput={inputRef}
        onChangeText={(formatted, _) => setText(formatted)}
        mask={`${mask}`}
        {...rest}
      />
    </Container>
  );
}
