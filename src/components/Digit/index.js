import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

import { Container, CustomInput } from './styles';

const Digit = forwardRef(({ type = 'text', nextFieldAction, ...rest }, ref) => {
  const [digitWidth, setDigitWidth] = useState(56);

  const handleChangeText = useCallback(
    text => {
      if (ref.current) {
        let currentText = text !== ' ' ? text : '';

        ref.current.setNativeProps({
          text: !!currentText ? (type === 'password' ? '*' : currentText) : '',
        });
        ref.current.value = currentText;

        if (!!ref.current.value) nextFieldAction();
      }
    },
    [ref]
  );

  useEffect(() => {
    const screenWidth = Dimensions.get('screen').width;
    setDigitWidth(Math.floor((screenWidth - 135) / 4));
  }, []);

  return (
    <Container width={digitWidth}>
      <CustomInput
        ref={ref}
        maxLength={1}
        onChangeText={text => handleChangeText(text)}
        {...rest}
      />
    </Container>
  );
});

Digit.displayName = 'Digit';

export default Digit;
