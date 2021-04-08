import React, { useCallback, useMemo, useState } from 'react';
import { StatusBar, FlatList, ScrollView, View } from 'react-native';
import { useHistory } from 'react-router-native';

import CreditContainer from '~/components/CreditContainer';
import Menu from '~/components/Menu';
import Button from '~/components/Button';
import Product from '~/components/CBackShareProduct';
import Header from '~/components/CBackHeader';
import QRCodeCredit from '~/components/QRCodeCredit';

import { products } from '~/utils/data';

export default function CBack() {
  const [credits, setCredits] = useState([]);

  const { push } = useHistory();

  const creditInfo = useMemo(() => {
    return {
      price: '12,30',
      timeLeft: '12h12m',
      received_at: '12/01/2021 10:44',
      spent: '123,00',
    };
  }, []);

  const handleAddCredit = useCallback(() => {
    setCredits(prevState => [
      ...prevState,
      { id: credits.length, ...creditInfo },
    ]);
  }, [credits]);

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header />

      <FlatList
        keyExtractor={({ id }) => String(id)}
        data={credits}
        ListHeaderComponent={
          <>
            <Product product={products[0]} />
            <Button
              text="Adicionar"
              boldText="Crédito"
              backgroundColor="#F03F39"
              onPress={handleAddCredit}
              style={{ alignSelf: 'center' }}
            />
          </>
        }
        ListFooterComponent={
          <>
            <Button
              text="Ver"
              boldText="Créditos Utilizados"
              backgroundColor="#181818"
              onPress={() => push('/account/credits')}
              style={{ alignSelf: 'center' }}
            />
            <View style={{ height: 20 }} />
          </>
        }
        style={{
          width: '100%',
          paddingHorizontal: 29,
          paddingBottom: 20,
          backgroundColor: '#E0E6EA',
        }}
        renderItem={({ item: c }) => (
          <QRCodeCredit
            key={c.id}
            creditInfo={c}
            onPress={() => handleSubmit('something')}
            style={{ marginTop: 20 }}
          />
        )}
      />
      <Menu />
    </>
  );
}
