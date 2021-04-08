import React from 'react';
import { View } from 'react-native';

import { Container, CBackPrice, CBackTimeLeft } from './styles';

import QRCode from '~/assets/icons/qrcode-ico.svg';

export default function CBack({ style }) {
  return (
    <Container style={style}>
      <View style={{ padding: 5, borderRadius: 6, backgroundColor: '#fff' }}>
        <QRCode />
      </View>
      <View style={{ marginLeft: 13 }}>
        <CBackTimeLeft style={{ lineHeight: 18, color: '#000' }}>
          Crédito&nbsp;
          <CBackPrice>R$ 16,42</CBackPrice>
        </CBackTimeLeft>
        <CBackTimeLeft style={{ marginTop: 5 }}>
          Faltam 29 dias para expirar
        </CBackTimeLeft>
      </View>
    </Container>
  );
}
