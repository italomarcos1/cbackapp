import React from 'react';
import { StatusBar, View } from 'react-native';
import { useHistory } from 'react-router-native';

import { Container, Button, ButtonText, Title, HeaderTitle } from './styles';

import HouseIcon from '~/assets/icons/casa-icon.svg';
import CompanyIcon from '~/assets/icons/empresa-icon.svg';

import Header from '~/components/CBackHeader';

export default function Delivery() {
  const { push } = useHistory();

  return (
    <>
      <Header favorite>
        <View style={{ width: 198, height: 45, alignItems: 'center' }}>
          <HeaderTitle>Hamburgueria do Barão</HeaderTitle>
          <HeaderTitle
            style={{
              textTransform: 'uppercase',
              color: '#4267B2',
            }}
          >
            PEDIDOS
          </HeaderTitle>
        </View>
      </Header>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <Container>
        <Title>Escolha Abaixo</Title>
        <Button onPress={() => push('/companies/checkout')}>
          <CompanyIcon />
          <View>
            <ButtonText>Você vai receber Aqui !</ButtonText>
            <ButtonText style={{ fontSize: 12 }}>
              Hamburgueria do Barão
            </ButtonText>
          </View>
        </Button>
        <Button
          onPress={() => push('/companies/checkout')}
          style={{ marginTop: 40, backgroundColor: '#638AD9' }}
        >
          <HouseIcon />
          <View>
            <ButtonText>Você vai receber</ButtonText>
            <ButtonText>em Casa !</ButtonText>
          </View>
        </Button>
      </Container>
    </>
  );
}
