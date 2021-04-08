import React from 'react';
import { Container, Label, CustomInput } from './styles';

export default function Input({
  label,
  style,
  error = false,
  setText,
  ...rest
}) {
  return (
    <Container style={style} error={!!error}>
      <Label error={!!error}>{label}</Label>
      <CustomInput onChangeText={text => setText(text)} {...rest} />
    </Container>
  );
}
