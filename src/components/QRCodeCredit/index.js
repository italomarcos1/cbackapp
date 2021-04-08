import React from 'react';
import { View } from 'react-native';

import {
  Container,
  QRCode,
  Title,
  CBackPrice,
  CBackTimeLeft,
  CBackBoldTimeLeft,
} from './styles';

export default function QRCodeCredit({ creditInfo, style }) {
  const { price, timeLeft, received_at, spent } = creditInfo;

  return (
    <Container style={style}>
      <View>
        <Title>
          <CBackTimeLeft>Crédito&nbsp;</CBackTimeLeft>
          <CBackPrice>R$ {price}</CBackPrice>
        </Title>
        <CBackTimeLeft>
          <CBackBoldTimeLeft>Total da compra</CBackBoldTimeLeft>:&nbsp;R$ 123,00
        </CBackTimeLeft>
        <CBackTimeLeft>
          <CBackBoldTimeLeft>Dia da compra</CBackBoldTimeLeft>:&nbsp;11/03/2021
          - 11:44
        </CBackTimeLeft>
        <CBackBoldTimeLeft>
          Utilizar esse crédito entre os dias:
        </CBackBoldTimeLeft>
        <CBackTimeLeft>12/03/2021 a 12/04/2021</CBackTimeLeft>
        <CBackTimeLeft style={{ color: '#ffdc4b' }}>
          29 dias para expirar o crédito
        </CBackTimeLeft>
      </View>

      <QRCode />
    </Container>
  );
}
