import React from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import { useHistory, useLocation } from 'react-router-native';

import {
  HeaderTitle,
  StarsContainer,
  Container,
  MenuOptionsButton,
  MenuOptionsText,
  RatingContainer,
  RatingTitle,
  RatingText,
} from './styles';

import Header from '~/components/CBackHeader';
import Input from '~/components/AccountInput';
import CreditContainer from '~/components/CreditContainer';
import Product from '~/components/OrderProduct';

import { OrderButton, OrderButtonText } from '~/components/OrderButton';

import burger from '~/assets/burger.jpeg';
import fries from '~/assets/fries.jpeg';
import brownie from '~/assets/brownie.jpg';

import StarFull from '~/assets/icons/star-full.svg';
import StarEmpty from '~/assets/icons/star-empty.svg';

export default function MyOrders() {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const products = [
    {
      id: '1',
      title: 'Hamburgueria do Barão',
      address: 'Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil',
      rating: 3,
      picture: burger,
    },
    {
      id: '2',
      title:
        'Batata Frita Batata Frita Batata Frita Batata Frita Batata Frita Batata Frita Batata Frita',
      address:
        'Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil',
      rating: 4,
      picture: fries,
    },
    {
      id: '3',
      title: 'Brownies de Chocolate',
      address: 'Beco Diagonal',
      rating: 5,
      picture: brownie,
    },
  ];

  return (
    <>
      <Header hasFavorite={false}>
        <View>
          <HeaderTitle>Paulo Andrade</HeaderTitle>
          <StarsContainer>
            <StarFull width={19} height={18} />
            <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
            <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
            <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
            <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
          </StarsContainer>
        </View>
      </Header>
      <Container>
        <ScrollView horizontal>
          <MenuOptionsButton
            onPress={() => push('/account')}
            active={pathname === '/account'}
            style={{ height: 42, marginLeft: 0 }}
          >
            <MenuOptionsText active={pathname === '/account'}>
              Minha Conta
            </MenuOptionsText>
          </MenuOptionsButton>
          <MenuOptionsButton
            onPress={() => push('/orders')}
            active={pathname === '/orders'}
          >
            <MenuOptionsText active={pathname === '/orders'}>
              Meus Pedidos
            </MenuOptionsText>
          </MenuOptionsButton>
        </ScrollView>
      </Container>
      <FlatList
        ListHeaderComponent={<CreditContainer />}
        data={products}
        style={{ padding: 20, paddingTop: 0 }}
        keyExtractor={({ id }) => id}
        renderItem={({ item: product }) => <Product product={product} />}
      />
    </>
  );
}
