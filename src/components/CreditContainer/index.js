import React from 'react';

import { Container, Credit, UseCredit } from './styles';

import RedArrow from '~/assets/icons/caixa-cback.svg';

export default function CreditContainer() {
  return (
    <Container>
      <RedArrow
        width="109.5%"
        heigh={87}
        style={{
          // flex: 1,
          position: 'absolute',
        }}
      />
      <Credit>R$ 22,40</Credit>
      <UseCredit>Crédito para utilizar</UseCredit>
    </Container>
  );
}
