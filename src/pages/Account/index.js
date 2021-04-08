import React, { useCallback } from 'react';
import { StatusBar, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-native';

// import { Container } from './styles';

import Menu from '~/components/Menu';
import AccountHomeCBack from '~/components/AccountHomeCBack';
import Button from '~/components/Button';

import { signOut } from '~/store/modules/auth/actions';

export default function Account() {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleSignOut = useCallback(() => {
    dispatch(signOut());
    push('/home');
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#e0e6ea" />
      <View
        style={{ flex: 1, backgroundColor: '#E0E6EA', paddingHorizontal: 50 }}
      >
        <AccountHomeCBack />
        <View style={{ marginTop: 87 }}>
          <Button
            text="Minha"
            boldText="Conta"
            backgroundColor="#181818"
            onPress={() => push('/account/details')}
            style={{ width: '100%', marginTop: 0 }}
          />
          <Button
            text="Créditos"
            boldText="Utilizados"
            backgroundColor="#181818"
            onPress={() => push('/account/credits')}
            style={{ width: '100%', marginTop: 53 }}
          />
          <Button
            text="Sair do"
            boldText="CBack"
            backgroundColor="#f53030"
            onPress={handleSignOut}
            style={{ width: '100%', marginTop: 53 }}
          />
        </View>
      </View>
      <Menu />
    </>
  );
}
