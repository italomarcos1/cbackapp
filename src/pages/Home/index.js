import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import { useDispatch } from 'react-redux';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import Toast from 'react-native-tiny-toast';

import { Container, CreditText, MadeByContainer, MadeByText } from './styles';
import Button from '~/components/Button';

import CBack from '~/assets/icons/cback.svg';
import BannerHome from '~/assets/icons/banner-home.svg';
import CbackBottomLogo from '~/assets/icons/cback-bottom.svg';
import TgooBottomLogo from '~/assets/icons/tgoo-bottom.svg';

import { signInSuccess } from '~/store/modules/auth/actions';

import api from '~/services/api';

export default function Login() {
  const { push, goBack } = useHistory();
  const dispatch = useDispatch();

  const handleFacebookLogin = useCallback(() => {
    LoginManager.logOut();

    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then(() => {
        AccessToken.getCurrentAccessToken().then(data => {
          const { accessToken, userID } = data;

          api
            .post('auth/facebook', {
              token: accessToken,
              userID,
            })
            .then(response => {
              const { token, user } = response.data.data;

              api.defaults.headers.Authorization = `Bearer ${token}`;
              dispatch(signInSuccess(token, user));

              setTimeout(function () {
                goBack();
              }, 100);
            })
            .catch(() => {
              Toast.show('Erro ao logar com Facebook. Logue com seu e-mail.');
            });
        });
      })
      .catch(() => {
        Toast.show(
          'Não foi possível fazer login com Facebook, por favor entre com seu email'
        );
      });
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
      <CreditText>
        Receba&nbsp;
        <CreditText
          style={{
            fontWeight: 'bold',
            color: '#F03F39',
          }}
        >
          5%
        </CreditText>
        &nbsp;de crédito para {'\n'} as próximas compras
      </CreditText>
      <Button
        text="Entrar com"
        boldText="E-mail"
        backgroundColor="#2CBDD3"
        onPress={() => {}}
      />
      <Button
        text="Entrar com"
        boldText="Facebook"
        backgroundColor="#4267B2"
        onPress={handleFacebookLogin}
      />
      <Button text="Entrar com" boldText="Google" backgroundColor="#F03F39" />
      <Button text="Entrar com" boldText="Apple" backgroundColor="#181818" />
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
