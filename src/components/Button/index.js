import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, ButtonText, ButtonBoldText } from './styles';

export default function Button({
  style,
  fontStyle,
  text,
  loading,
  boldText,
  backgroundColor,
  ...rest
}) {
  return (
    <Container style={{ backgroundColor, ...style }} {...rest}>
      {loading ? (
        <ActivityIndicator color="#FFF" size={28} />
      ) : (
        <>
          <ButtonText>{text}&nbsp;</ButtonText>
          <ButtonBoldText style={fontStyle}>{boldText}</ButtonBoldText>
        </>
      )}
    </Container>
  );
}
