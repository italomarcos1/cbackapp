import React from 'react';

import { Container, Label, Input } from './styles';

export default function AccountInput({ label, setText, style, ...rest }) {
  return (
    <Container style={style}>
      <Label>{label}</Label>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        onChangeText={value => setText(value)}
        {...rest}
      />
    </Container>
  );
}
