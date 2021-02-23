import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import { useDispatch } from 'react-redux';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import Toast from 'react-native-tiny-toast';

import { Container, CreditText, MadeByContainer, MadeByText } from './styles';

import Button from '~/components/Button';
import Input from '~/components/Input';

import CBack from '~/assets/icons/cback.svg';
import BannerHome from '~/assets/icons/banner-home.svg';
import CbackBottomLogo from '~/assets/icons/cback-bottom.svg';
import TgooBottomLogo from '~/assets/icons/tgoo-bottom.svg';

import { signInSuccess } from '~/store/modules/auth/actions';

import api from '~/services/api';

export default function Login() {
  const { push, goBack } = useHistory();
  const dispatch = useDispatch();

  const handleLogin = useCallback(() => {
    dispatch(signInSuccess(token, user));
  }, [dispatch]);

  return (
    <Container
      contentContainerStyle={{
        paddingTop: 23,
        paddingHorizontal: 45,
        // paddingBottom: 75,
        alignItems: 'center',
      }}
    >
      <CBack />
      <BannerHome style={{ marginTop: 29 }} />

      <Button
        text="Fazer"
        boldText="Login"
        backgroundColor="#2CBDD3"
        onPress={handleLogin}
      />

      <MadeByContainer>
        <MadeByText>
          <CbackBottomLogo width={50} height={10} />
          &nbsp;é um produto&nbsp;
        </MadeByText>
        <TgooBottomLogo width={36} height={14} />
      </MadeByContainer>
    </Container>
  );
}
