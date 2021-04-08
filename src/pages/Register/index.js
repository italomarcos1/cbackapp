import React, { useCallback, useState } from 'react';
import { Keyboard, View } from 'react-native';
import { useHistory } from 'react-router-native';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-tiny-toast';
import * as Yup from 'yup';

import { signInSuccess, signFailure } from '~/store/modules/auth/actions';
import backend from '~/services/api';
import getValidationErrors from '~/utils/getValidationError';

import { Container, Header } from './styles';

import Button from '~/components/Button';
import MadeByContainer from '~/components/MadeByContainerHeader';

import Input from '~/components/Input';
import InputMask from '~/components/InputMask';
import PhoneInput from '~/components/PhoneInput';
import CorporationSearch from '~/components/CorporationSearch';

import { calculateAge } from '~/utils/calculateAge';

export default function Register() {
  const { push, goBack } = useHistory();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [nbhd, setNbhd] = useState('');
  const [town, setTown] = useState('');
  const [state, setState] = useState('');

  const handleCalculateAge = useCallback(() => {
    console.tron.log(birthDate);
    const currentAge = calculateAge(birthDate);
    console.tron.log(currentAge);
    console.tron.log(!!currentAge);

    setAge(!!currentAge ? currentAge : '');
  }, [birthDate]);

  const handleLogin = useCallback(
    async data => {
      try {
        setLoading(true);

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          gender: Yup.string().required(),
          role: Yup.string().required(),
          birthDate: Yup.string().required().matches(''),
          fantasyName: Yup.string().required(),
          cnpj: Yup.string().required(),
          wpp: Yup.string().required(),
          cep: Yup.string().required(),
          number: Yup.string().required(),
          address: Yup.string().required(),
          nbhd: Yup.string().required(),
          town: Yup.string().required(),
          state: Yup.string().required(),
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
        <MadeByContainer />
      </Header>
      <Container
        contentContainerStyle={{
          paddingTop: 23,
          alignItems: 'center',
          width: '100%',
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
            width: '100%',
          }}
        >
          <Input
            value={fullName}
            setText={setFullName}
            label="Nome Completo"
            style={{ marginTop: 0 }}
          />
          <Input value={gender} setText={setGender} label="Gênero" />
          <Input value={role} setText={setRole} label="Função" />
          <View
            style={{
              width: '100%',
              height: 60,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}
          >
            <Input
              label="Data Nasc."
              value={birthDate}
              setText={setBirthDate}
              onBlur={handleCalculateAge}
              mask="[00]/[00]/[0000]"
              maxLength={10}
              style={{ width: '47.5%', marginTop: 0 }}
            />
            <Input
              value={age}
              setText={setAge}
              label="Idade"
              // editable={false}
              style={{ width: '47.5%', marginTop: 0 }}
            />
          </View>
          <Input
            value={fantasyName}
            setText={setFantasyName}
            label="Nome Fantasia"
          />
          <InputMask
            value={cnpj}
            setText={setCnpj}
            label="CNPJ"
            mask="[00].[000].[000]/0001-[00]"
            maxLength={18}
          />
          <PhoneInput
            value={whatsapp}
            setText={setWhatsapp}
            label="WhatsApp da Empresa"
            keyboardType="phone-pad"
            onSubmitEditing={() => {}}
          />
          <CorporationSearch />
          <Button
            text="Pegar"
            boldText="Geolocalização"
            backgroundColor="#42b242"
            onPress={() => {}}
            loading={loading}
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
            }}
          />
          <View
            style={{
              width: '100%',
              height: 60,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}
          >
            <InputMask
              name="cep"
              value={cep}
              setText={setCep}
              label="CEP"
              mask="[0000]-[000]"
              style={{ width: '47.5%', marginTop: 0 }}
              maxLength={8}
            />

            <Input
              name="number"
              value={number}
              setText={setNumber}
              label="Número"
              maxLength={10}
              style={{ width: '47.5%', marginTop: 0 }}
            />
          </View>
          <Input
            name="address"
            value={address}
            setText={setAddress}
            label="Endereço"
          />
          <Input
            name="neighbourhood"
            value={nbhd}
            setText={setNbhd}
            label="Bairro"
          />
          <Input name="town" value={town} setText={setTown} label="Cidade" />
          <Input name="state" value={state} setText={setState} label="Estado" />
        </View>
        <Button
          boldText="PRÓXIMO"
          backgroundColor="#42b242"
          onPress={() => push('/terms')}
          loading={loading}
          style={{
            width: '100%',
            height: 98,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 0,
            marginTop: 60,
          }}
          fontStyle={{
            fontSize: 24,
            lineHeight: 32,
          }}
        />
      </Container>
    </>
  );
}
