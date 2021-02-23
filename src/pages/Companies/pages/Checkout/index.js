import React, { useMemo } from 'react';
import { StatusBar, View, FlatList, ScrollView } from 'react-native';

import {
  Container,
  HeaderTitle,
  PickYourTable,
  PickYourTableSelect,
  Price,
  TableNumberContainer,
  TableNumberPickerButton,
  TableNumberText,
} from './styles';

import Header from '~/components/CBackHeader';
import CreditContainer from '~/components/CreditContainer';
import CheckoutProduct from '~/components/CheckoutProduct';
import AccountInput from '~/components/AccountInput';
import { OrderButton, OrderButtonText } from '~/components/OrderButton';

import ArrowDown from '~/assets/icons/arrow-down_red.svg';

import burger from '~/assets/burger.jpeg';
import fries from '~/assets/fries.jpeg';
import brownie from '~/assets/brownie.jpg';

export default function Checkout() {
  const products = [
    {
      id: '1',
      title: 'Hamburgueria do Barão',
      address: 'Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil',
      rating: 3,
      picture: burger,
      oldPrice: '18,00',
      price: '16.70',
    },
    {
      id: '2',
      title:
        'Batata Frita Batata Frita Batata Frita Batata Frita Batata Frita Batata Frita Batata Frita',
      address:
        'Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil',
      rating: 4,
      picture: fries,
      oldPrice: '18,00',
      price: '16.70',
    },
    {
      id: '3',
      title: 'Brownies de Chocolate',
      address: 'Beco Diagonal',
      rating: 5,
      picture: brownie,
      oldPrice: '18,00',
      price: '16.70',
    },
    {
      id: '4',
      title:
        'Batata Frita Batata Frita Batata Frita Batata Frita Batata Frita Batata Frita Batata Frita',
      address:
        'Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil',
      rating: 4,
      picture: fries,
      oldPrice: '18,00',
      price: '16.70',
    },
  ];

  const tableOptions = useMemo(() => ['01', '02', '03', '04'], []);

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
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
      <FlatList
        ListHeaderComponent={<CreditContainer />}
        style={{ flex: 1, padding: 20, paddingTop: 0, backgroundColor: '#fff' }}
        data={products}
        keyExtractor={({ id }) => id}
        renderItem={({ item: product }) => (
          <CheckoutProduct product={product} />
        )}
        ListFooterComponent={
          <>
            <PickYourTable>
              <TableNumberText>Selecione sua mesa:</TableNumberText>
              <PickYourTableSelect onPress={() => {}}>
                <TableNumberContainer>
                  <TableNumberText style={{ fontSize: 25 }}>02</TableNumberText>
                  <ScrollView
                    contentContainerStyle={{
                      position: 'absolute',
                      // height: 103.15,
                      top: 40,
                      width: 83,
                      borderStyle: 'solid',
                      borderWidth: 2,
                      borderColor: '#f03f39',
                      // borderTopWidth: 0,
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      borderBottomWidth: 8,
                      backgroundColor: '#fff',
                      zIndex: 999,
                    }}
                  >
                    {tableOptions.map(item => (
                      <TableNumberText
                        style={{
                          backgroundColor: '#f90',
                          textAlign: 'center',
                          fontSize: 25,
                        }}
                      >
                        {item}
                      </TableNumberText>
                    ))}
                  </ScrollView>
                </TableNumberContainer>
                <TableNumberPickerButton>
                  <ArrowDown width={13} height={13} />
                </TableNumberPickerButton>
              </PickYourTableSelect>
            </PickYourTable>
            <PickYourTable
              style={{
                borderBottomWidth: 0,
                height: 66,
                zIndex: -1,
              }}
            >
              <HeaderTitle style={{ fontSize: 18 }}>
                Total do Pedido
              </HeaderTitle>
              <Price style={{ color: '#0047b1' }}>R$ 33,40</Price>
            </PickYourTable>
            <View style={{ height: 33 }} />
          </>
        }
      />
      <OrderButton onPress={() => {}}>
        <OrderButtonText>Fazer o Pedido</OrderButtonText>
      </OrderButton>
    </>
  );
}
