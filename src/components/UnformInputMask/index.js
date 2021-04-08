import React, { useCallback, useState } from 'react';

import { Container, Label, Input } from './styles';

export default function UnformInputMask({ name, label, mask, style, ...rest }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = useCallback(() => setIsFocused(true), []);

  const handleOnBlur = useCallback(() => setIsFocused(false), []);

  const handleChangeText = useCallback(text => {
    if (inputRef.current) {
      console.tron.log(inputRef.current);

      inputRef.current.setNativeProps({ text });
      inputRef.current.value = text;
    }
  }, []);

  return (
    <Container style={style} error={!!error} isFocused={isFocused}>
      <Label error={!!error} isFocused={isFocused}>
        {label}
      </Label>
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        ref={inputRef}
        onChangeText={(formatted, _) => handleChangeText(formatted)}
        mask={mask}
        defaultValue={defaultValue}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...rest}
      />
    </Container>
  );
}
