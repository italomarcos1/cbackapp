import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-native';
import Toast from 'react-native-tiny-toast';

import backend from '~/services/api';

import { Container, Header, CreditText } from './styles';

import Button from '~/components/Button';
import RoundButton from '~/components/RoundButton';
import MadeByContainer from '~/components/MadeByContainer';
import RegisterButton from '~/components/RegisterButton';
import Input from '~/components/PhoneInput';

import CBack from '~/assets/icons/cback.svg';
import BackArrow from '~/assets/icons/back-icon.svg';

export default function Corporation() {
  const { push, goBack } = useHistory();

  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(async data => {
    try {
      // const {email,password}=data;
      const response = await backend.post('auth/login', data);

      push('/companies');
    } catch (err) {
      setLoading(false);

      Toast.show('Erro no login, confira seus dados.');
    }
  }, []);

  return (
    <>
      <Header>
        <RoundButton onPress={goBack}>
          <BackArrow width={46} height={46} />
        </RoundButton>
        <CBack width={171.6} height={34.8} style={{ marginLeft: 25 }} />
      </Header>
      <Container onLayout={({ nativeEvent: { layout } }) => {}}>
        <CreditText>
          Área Exclusiva{'\n'}da&nbsp;
          <CreditText
            style={{
              fontWeight: 'bold',
              color: '#4267b2',
            }}
          >
            Empresa
          </CreditText>
        </CreditText>
        <Input
          label="Celular"
          keyboardType="phone-pad"
          onSubmitEditing={() => {}}
          returnKeyType="send"
          style={{ marginTop: 37.5 }}
        />

        <Button
          text="Enviar"
          boldText="Código"
          backgroundColor="#42b242"
          onPress={() => push('/activation')}
          loading={loading}
          style={{ marginTop: 32 }}
        />
        <RegisterButton />
      </Container>
      <MadeByContainer style={{ marginTop: 0 }} />
    </>
  );
}
