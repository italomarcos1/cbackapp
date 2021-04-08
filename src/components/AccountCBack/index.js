import React from 'react';
import { View } from 'react-native';

import { Container, CBackPrice, CBackTimeLeft } from './styles';

import QRCode from '~/assets/icons/qrcode-ico.svg';

export default function AccountCBack({ style }) {
  return (
    <Container style={style}>
      <View style={{ padding: 5, borderRadius: 6, backgroundColor: '#fff' }}>
        <QRCode />
      </View>
      <View style={{ marginLeft: 13 }}>
        <CBackTimeLeft style={{ color: '#000' }}>
          Crédito Total Utilizado
        </CBackTimeLeft>
        <CBackTimeLeft style={{ marginTop: 5, fontWeight: 'bold' }}>
          R$ 8,65
        </CBackTimeLeft>
      </View>
    </Container>
  );
}
