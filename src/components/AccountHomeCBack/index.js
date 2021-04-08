import React from 'react';
import { View } from 'react-native';

import { Container, CBackPrice, CBackTimeLeft } from './styles';

import QRCodeBlack from '~/assets/icons/qrcode-ico_black.svg';

export default function AccountCBack({ style }) {
  return (
    <Container style={style}>
      <View style={{ padding: 5, borderRadius: 6, backgroundColor: '#fff' }}>
        <QRCodeBlack />
      </View>
      <View style={{ marginLeft: 13 }}>
        <CBackPrice>R$ 8,65</CBackPrice>
        <CBackTimeLeft style={{ marginTop: 5 }}>
          Crédito Total Utilizado
        </CBackTimeLeft>
      </View>
    </Container>
  );
}
