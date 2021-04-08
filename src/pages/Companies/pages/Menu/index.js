import React from 'react';
import { FlatList, View } from 'react-native';
import { useHistory, useLocation } from 'react-router-native';

import { OptionsContainer, OptionsButton, OptionsText } from './styles';

import Menu from '~/components/Menu';
import Header from '~/components/MenuHeader';
import CustomInput from '~/components/SearchInput';
import Product from '~/components/MenuProduct';
import RoundButton from '~/components/RoundButton';
import Button from '~/components/Button';
import QRCodeCredit from '~/components/QRCodeCredit';

import burger from '~/assets/burger.jpeg';
import fries from '~/assets/fries.jpeg';
import brownie from '~/assets/brownie.jpg';

export default function CompanyMenu() {
  const { pathname } = useLocation();
  const { push } = useHistory();

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
      <Header favorite>
        <OptionsContainer>
          <OptionsButton
            active={pathname === '/companies/cback'}
            onPress={() => push('/companies/cback')}
          >
            <OptionsText active={pathname === '/companies/cback'}>
              CBack
            </OptionsText>
          </OptionsButton>
          <OptionsButton
            active={pathname === '/companies/menu'}
            onPress={() => push('/companies/menu')}
          >
            <OptionsText active={pathname === '/companies/menu'}>
              Cardápio
            </OptionsText>
          </OptionsButton>
        </OptionsContainer>
      </Header>
      <View style={{ flex: 1, backgroundColor: '#4267b2' }}>
        <FlatList
          ListHeaderComponent={
            <View style={{ paddingTop: 20 }}>
              <CustomInput />
            </View>
          }
          data={products}
          keyExtractor={({ id }) => id}
          renderItem={({ item: product }) => (
            <Product
              product={product}
              onPress={() => handleSubmit(product.id)}
            />
          )}
          style={{
            marginTop: 7,
            width: '100%',
            paddingHorizontal: 29,
          }}
          ListFooterComponent={<View style={{ height: 10 }} />}
        />
      </View>

      <Menu />
    </>
  );
}
