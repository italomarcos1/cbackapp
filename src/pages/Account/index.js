import React, { useCallback, useState } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { useHistory, useLocation } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import {
  HeaderTitle,
  StarsContainer,
  Container,
  MenuOptionsButton,
  MenuOptionsText,
  RatingContainer,
  RatingTitle,
  RatingText,
} from './styles';

import Header from '~/components/CBackHeader';
import Input from '~/components/AccountInput';
import { OrderButton, OrderButtonText } from '~/components/OrderButton';

import StarFull from '~/assets/icons/star-full.svg';
import StarEmpty from '~/assets/icons/star-empty.svg';

import { updateProfileSuccess } from '~/store/modules/user/actions';
import InputMask from '~/components/InputMask';

export default function Account() {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  console.tron.log(profile);
  const [fullName, setFullName] = useState(!!profile ? profile.fullName : '');
  const [email, setEmail] = useState(!!profile ? profile.email : '');
  const [phone, setPhone] = useState(!!profile ? profile.phone : '');
  const [gender, setGender] = useState(!!profile ? profile.gender : '');
  const [birthDate, setBirthDate] = useState(
    !!profile ? profile.birthDate : ''
  );
  const [age, setAge] = useState(!!profile ? profile.age : '');
  const [password, setPassword] = useState(!!profile ? profile.password : '');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdateProfile = useCallback(async () => {
    try {
      const data = {
        fullName,
        email,
        phone,
        gender,
        birthDate,
        age,
        password,
        confirmPassword,
      };

      console.log(data);

      const schema = Yup.object().shape({
        fullName: Yup.string().required(),
        phone: Yup.string().min(15),
        gender: Yup.string().required(),
        birthDate: Yup.string().required(),
        age: Yup.string().required(),
        password: Yup.string().min(6).required(),
        confirmPassword: Yup.string().min(6).required(),
      });

      console.log('fox');
      await schema.validate(data, { abortEarly: false });
      if (password !== confirmPassword)
        throw new Error("Passwords doesn't match.");
      console.log('mae');

      dispatch(updateProfileSuccess(data));
    } catch (err) {
      console.log(err);
      Alert.alert('Erro na atualização', 'Preencha corretamente os dados.');
    }
  }, [
    fullName,
    email,
    phone,
    gender,
    birthDate,
    age,
    password,
    confirmPassword,
  ]);

  return (
    <>
      <Header hasFavorite={false}>
        <View>
          <HeaderTitle>
            {!!profile ? profile.fullName : 'Cliente CBack'}
          </HeaderTitle>
          <StarsContainer>
            <StarFull width={19} height={18} />
            <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
            <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
            <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
            <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
          </StarsContainer>
        </View>
      </Header>

      <Container>
        <ScrollView horizontal>
          <MenuOptionsButton
            onPress={() => push('/account')}
            active={pathname === '/account'}
            style={{ height: 42, marginLeft: 0 }}
          >
            <MenuOptionsText active={pathname === '/account'}>
              Minha Conta
            </MenuOptionsText>
          </MenuOptionsButton>
          <MenuOptionsButton
            onPress={() => push('/orders')}
            active={pathname === '/orders'}
          >
            <MenuOptionsText active={pathname === '/orders'}>
              Meus Pedidos
            </MenuOptionsText>
          </MenuOptionsButton>
        </ScrollView>
      </Container>
      <ScrollView>
        <View
          style={{
            padding: 20,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <RatingContainer>
              <RatingTitle>Já é um cliente</RatingTitle>
              <StarsContainer style={{ marginTop: 14 }}>
                <StarFull width={19} height={18} />
                <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
              </StarsContainer>
              <StarsContainer>
                <StarFull width={19} height={18} />
                <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
                <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
              </StarsContainer>
              <StarsContainer>
                <StarFull width={19} height={18} />
                <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
                <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
                <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
              </StarsContainer>
              <StarsContainer>
                <StarFull width={19} height={18} />
                <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
                <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
                <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
                <StarFull width={19} height={18} style={{ marginLeft: 8 }} />
              </StarsContainer>
            </RatingContainer>
            <RatingContainer style={{ marginLeft: 10 }}>
              <StarsContainer>
                <StarFull width={19} height={18} />
                <StarEmpty width={19} height={18} style={{ marginLeft: 8 }} />
                <StarEmpty width={19} height={18} style={{ marginLeft: 8 }} />
                <StarEmpty width={19} height={18} style={{ marginLeft: 8 }} />
                <StarEmpty width={19} height={18} style={{ marginLeft: 8 }} />
              </StarsContainer>
              <View style={{ marginTop: 8 }}>
                <RatingText
                  width={19}
                  height={18}
                  style={{ textDecorationLine: 'underline', marginLeft: 8 }}
                >
                  Preencha abaixo
                </RatingText>
                <RatingText width={19} height={18} style={{ marginLeft: 8 }}>
                  R$ 500,00
                </RatingText>
                <RatingText width={19} height={18} style={{ marginLeft: 8 }}>
                  R$ 1.000,00
                </RatingText>
                <RatingText width={19} height={18} style={{ marginLeft: 8 }}>
                  R$ 2.000,00
                </RatingText>
              </View>
            </RatingContainer>
          </View>

          <Input
            label="Nome Completo"
            value={fullName}
            setText={setFullName}
            style={{ marginTop: 60 }}
          />
          <Input
            label="Email"
            value={email}
            setText={setEmail}
            autoCompleteType="email"
            keyboardType="email-address"
          />
          <InputMask
            label="Celular"
            mask="([00]) [00000]-[0000]"
            value={phone}
            setText={setPhone}
            maxLength={15}
          />
          <Input label="Gênero" value={gender} setText={setGender} />
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <InputMask
              label="Data Nasc."
              mask="[00]/[00]/[0000]"
              value={birthDate}
              setText={setBirthDate}
              style={{ width: '47.5%', marginTop: 0 }}
            />
            <Input
              label="Idade"
              style={{ width: '47.5%', marginTop: 0 }}
              keyboardType="number-pad"
              maxLength={3}
              value={age}
              setText={setAge}
            />
          </View>
          <Input
            label="Senha"
            secureTextEntry
            value={password}
            setText={setPassword}
          />
          <Input
            label="Repetir senha"
            secureTextEntry
            value={confirmPassword}
            setText={setConfirmPassword}
          />
        </View>

        <OrderButton onPress={handleUpdateProfile} style={{ marginTop: 125 }}>
          <OrderButtonText>Salvar Alterações</OrderButtonText>
        </OrderButton>
      </ScrollView>
    </>
  );
}
