import React, { useCallback, useState } from 'react';

import { Container, Label, Input } from './styles';

export default function InputMask({
  label,
  mask,
  style,
  error = false,
  setText,
  ...rest
}) {
  return (
    <Container style={style} error={!!error}>
      <Label error={!!error}>{label}</Label>
      <Input
        onChangeText={(formatted, _) => setText(formatted)}
        mask={mask}
        {...rest}
      />
    </Container>
  );
}
