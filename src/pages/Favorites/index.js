import React from 'react';
import { StatusBar, FlatList, View } from 'react-native';

import CreditContainer from '~/components/CreditContainer';
import Menu from '~/components/Menu';
import Product from '~/components/Product';

import { products } from '~/utils/data';

export default function Favorites() {
  return (
    <View style={{ flex: 1, backgroundColor: '#E0E6EA' }}>
      <StatusBar backgroundColor="#E0E6EA" barStyle="dark-content" />
      <FlatList
        ListHeaderComponent={<CreditContainer />}
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
