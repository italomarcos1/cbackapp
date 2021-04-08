import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-native';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-tiny-toast';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { signInSuccess, signFailure } from '~/store/modules/auth/actions';
import backend from '~/services/api';
import getValidationErrors from '~/utils/getValidationError';

import { Container, Header } from './styles';

import Button from '~/components/Button';
import RoundButton from '~/components/RoundButton';
import MadeByContainer from '~/components/MadeByContainer';
import Input from '~/components/UnformInput';

import CBack from '~/assets/icons/cback.svg';
import BannerHome from '~/assets/icons/banner-home.svg';
import CbackBottomLogo from '~/assets/icons/cback-bottom.svg';
import TgooBottomLogo from '~/assets/icons/tgoo-bottom.svg';
import BackArrow from '~/assets/icons/back-icon.svg';

export default function Login() {
  const { push, goBack } = useHistory();
  const dispatch = useDispatch();

  const formRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(
    async data => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().required().min(6),
        });

        await schema.validate(data, { abortEarly: false });

        // const {email,password}=data;
        const response = await backend.post('auth/login', data);
        const { token, user } = response.data.data;

        const { name, last_name } = user;

        backend.defaults.headers.Authorization = `Bearer ${token}`;

        if (name === '' && last_name === '') {
          const {
            data: { data },
          } = await backend.put('clients', {
            name: 'Cliente',
            last_name: 'AMFrutas',
          });
          const updatedUser = { ...data, default_address: [] };

          dispatch(signInSuccess(token, updatedUser));

          return;
        }

        dispatch(signInSuccess(token, user));
        push('/companies');
      } catch (err) {
        setLoading(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          console.log(errors);
          formRef.current?.setErrors(errors);

          return;
        }
        Toast.show('Erro no login, confira seus dados.');
        dispatch(signFailure());
      }
    },
    [dispatch]
  );

  return (
    <>
      <Header>
        <RoundButton onPress={goBack}>
          <BackArrow width={46} height={46} />
        </RoundButton>
        <CBack width={171.6} height={34.8} style={{ marginLeft: 25 }} />
      </Header>
      <Container
        contentContainerStyle={{
          paddingTop: 23,
          paddingHorizontal: 45,
          alignItems: 'center',
        }}
      >
        <BannerHome style={{ marginTop: 29 }} />

        <Form
          ref={formRef}
          onSubmit={handleLogin}
          style={{
            width: '100%',
          }}
        >
          <Input
            name="email"
            type="email"
            label="Email"
            ref={emailRef}
            autoCompleteType="email"
            keyboardType="email-address"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            ref={passwordRef}
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => formRef.current.submitForm()}
          />
        </Form>

        <Button
          text="Fazer"
          boldText="Login"
          backgroundColor="#2CBDD3"
          onPress={() => formRef.current.submitForm()}
          loading={loading}
        />

        <MadeByContainer />
      </Container>
    </>
  );
}
