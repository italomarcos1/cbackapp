import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, Keyboard } from 'react-native';

import { useHistory } from 'react-router-native';
import Toast from 'react-native-tiny-toast';

import backend from '~/services/api';

import { Container, Header, CreditText, DigitsContainer } from './styles';

import Button from '~/components/Button';
import Digit from '~/components/Digit';
import RoundButton from '~/components/RoundButton';
import MadeByContainer from '~/components/MadeByContainer';
import RegisterButton from '~/components/RegisterButton';

import Input from '~/components/PhoneInput';

import CBack from '~/assets/icons/cback.svg';
import BackArrow from '~/assets/icons/back-icon.svg';

export default function CellphoneActivation() {
  const { push, goBack } = useHistory();

  const [loading, setLoading] = useState(false);

  const firstDigitRef = useRef();
  const secondDigitRef = useRef();
  const thirdDigitRef = useRef();
  const fourthDigitRef = useRef();

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
      <Container>
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
        <DigitsContainer>
          <Digit
            ref={firstDigitRef}
            nextFieldAction={() => secondDigitRef.current.focus()}
          />
          <Digit
            ref={secondDigitRef}
            nextFieldAction={() => thirdDigitRef.current.focus()}
          />
          <Digit
            ref={thirdDigitRef}
            nextFieldAction={() => fourthDigitRef.current.focus()}
          />
          <Digit
            ref={fourthDigitRef}
            nextFieldAction={() => Keyboard.dismiss()}
          />
        </DigitsContainer>

        <Button
          text="Ativar"
          boldText="Celular"
          backgroundColor="#4267b2"
          onPress={() => push('/commercial')}
          loading={loading}
          style={{ marginTop: 32 }}
        />
        <RegisterButton />
      </Container>
      <MadeByContainer style={{ marginTop: 0 }} />
    </>
  );
}
