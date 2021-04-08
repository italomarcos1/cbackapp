import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { useField } from '@unform/core';

import { Container, Label, Input } from './styles';

const UnformInput = forwardRef(({ name, label, style, ...rest }, ref) => {
  const inputRef = ref;

  const [isFocused, setIsFocused] = useState(false);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  const handleOnFocus = useCallback(() => setIsFocused(true), []);

  const handleOnBlur = useCallback(() => setIsFocused(false), []);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,

      getValue() {
        if (inputRef.current) return inputRef.current.value;

        return '';
      },

      setValue(_, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });

          inputRef.current.value = value;
        }
      },

      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' });

          inputRef.current.value = '';
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(text => {
    if (inputRef.current) {
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
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...rest}
      />
    </Container>
  );
});

UnformInput.displayName = 'UnformInput';

export default UnformInput;
