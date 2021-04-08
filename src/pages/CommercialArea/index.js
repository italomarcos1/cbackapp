import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Keyboard } from 'react-native';

import { useHistory } from 'react-router-native';
import Toast from 'react-native-tiny-toast';

import backend from '~/services/api';

import { Container, Header, CreditText, DigitsContainer } from './styles';

import Button from '~/components/Button';
import Digit from '~/components/Digit';
import RoundButton from '~/components/RoundButton';
import MadeByContainer from '~/components/MadeByContainer';
import RegisterButton from '~/components/RegisterButton';

import CBack from '~/assets/icons/cback.svg';
import BackArrow from '~/assets/icons/back-icon.svg';

export default function CommercialArea() {
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

  const digitProps = useMemo(() => {
    return {
      type: 'password',
      style: {
        color: '#42b242',
        lineHeight: 35,
        fontSize: 22,
        // backgroundColor: '#f90',
      },
      returnKeyType: 'next',
      keyboardType: 'phone-pad',
    };
  }, []);

  const handleSubmit = useCallback(() => {
    console.tron.log(
      `${firstDigitRef.current.value}-${secondDigitRef.current.value}-${thirdDigitRef.current.value}-${fourthDigitRef.current.value}`
    );
  }, [firstDigitRef, secondDigitRef, thirdDigitRef, fourthDigitRef]);

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
              color: '#42b242',
            }}
          >
            Comercial
          </CreditText>
        </CreditText>
        <DigitsContainer>
          <Digit
            {...digitProps}
            ref={firstDigitRef}
            nextFieldAction={() => secondDigitRef.current.focus()}
          />
          <Digit
            {...digitProps}
            ref={secondDigitRef}
            nextFieldAction={() => thirdDigitRef.current.focus()}
          />
          <Digit
            {...digitProps}
            ref={thirdDigitRef}
            nextFieldAction={() => fourthDigitRef.current.focus()}
          />
          <Digit
            {...digitProps}
            ref={fourthDigitRef}
            returnKeyType="send"
            nextFieldAction={() => Keyboard.dismiss()}
          />
        </DigitsContainer>

        <Button
          text="Autenticar"
          boldText="Comercial"
          backgroundColor="#42b242"
          onPress={handleSubmit}
          loading={loading}
          style={{ marginTop: 32 }}
        />
        <RegisterButton />
      </Container>
      <MadeByContainer style={{ marginTop: 0 }} />
    </>
  );
}
