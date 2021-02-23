import React from 'react';

import { Container, ButtonText, ButtonBoldText } from './styles';

export default function Button({
  style,
  text,
  boldText,
  backgroundColor,
  ...rest
}) {
  return (
    <Container style={{ backgroundColor, ...style }} {...rest}>
      <ButtonText>{text}&nbsp;</ButtonText>
      <ButtonBoldText>{boldText}</ButtonBoldText>
    </Container>
  );
}
