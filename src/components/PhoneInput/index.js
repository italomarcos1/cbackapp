import React, { useCallback, useRef, useState } from 'react';

import {
  Container,
  Label,
  InputContainer,
  AreaContainer,
  AreaCode,
  Input,
} from './styles';

import ChevronDown from '~/assets/icons/chevron-down.svg';

export default function PhoneInput({ label, style, ...rest }) {
  const [error, setError] = useState(false);

  const inputRef = useRef(null);

  const handleChangeText = useCallback(
    text => {
      if (inputRef.current) {
        inputRef.current.setNativeProps({ text: value });
        inputRef.current.value = text;
      }
    },
    [inputRef]
  );

  return (
    <Container style={style} error={error}>
      <Label error={error}>{label}</Label>
      <InputContainer>
        <AreaContainer>
          <AreaCode>12</AreaCode>
          <ChevronDown width={16} height={23} />
        </AreaContainer>
        <Input
          refInput={inputRef}
          onChangeText={text => handleChangeText(text)}
          maxLength={10}
          mask="[00000]-[0000]"
          {...rest}
        />
      </InputContainer>
    </Container>
  );
}
