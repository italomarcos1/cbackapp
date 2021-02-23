import React from 'react';
import { View } from 'react-native';

import {
  Container,
  QRCode,
  CBackPrice,
  CBackTimeLeft,
  CBackBoldTimeLeft,
} from './styles';

export default function QRCodeCredit({ creditInfo }) {
  const { price, timeLeft, received_at, spent } = creditInfo;

  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          height: 26,
        }}
      >
        <CBackPrice>R$ {price}</CBackPrice>
        <CBackTimeLeft>
          <CBackBoldTimeLeft>{timeLeft}</CBackBoldTimeLeft> para poder utilizar
        </CBackTimeLeft>
      </View>
      <View>
        <CBackTimeLeft>Crédito recebido dia {received_at}</CBackTimeLeft>
        <CBackTimeLeft>Valor total da compra R$ {spent}</CBackTimeLeft>
      </View>
      <QRCode />
    </Container>
  );
}
