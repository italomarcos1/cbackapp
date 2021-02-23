import React from 'react';
import { StatusBar, FlatList, View } from 'react-native';
import { useHistory } from 'react-router-native';

import { Container } from './styles';

import CustomInput from '~/components/Input';
import CreditContainer from '~/components/CreditContainer';
import Menu from '~/components/Menu';
import Product from '~/components/Product';

import burger from '~/assets/burger.jpeg';
import fries from '~/assets/fries.jpeg';
import brownie from '~/assets/brownie.jpg';

export default function Companies() {
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
    <View style={{ flex: 1, backgroundColor: '#4267b2' }}>
      <StatusBar backgroundColor="#4267B2" barStyle="light-content" />
      <FlatList
        ListHeaderComponent={
          <View style={{ paddingTop: 10 }}>
            <CustomInput />
            <CreditContainer />
          </View>
        }
        data={products}
        keyExtractor={({ id }) => id}
        renderItem={({ item: product }) => <Product product={product} />}
        style={{
          marginTop: 7,
          width: '100%',
          paddingHorizontal: 29,
        }}
        ListFooterComponent={<View style={{ height: 10 }} />}
      />
      <Menu />
    </View>
  );
}
