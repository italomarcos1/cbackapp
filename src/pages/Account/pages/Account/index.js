import React, { useCallback, useRef } from 'react';
import {
  ScrollView,
  View,
  Alert,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useHistory, useLocation } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { Header, HeaderText } from './styles';

import Input from '~/components/UnformInput';

import { updateProfileSuccess } from '~/store/modules/user/actions';
import InputMask from '~/components/InputMask';
import Button from '~/components/Button';

import ArrowLeft from '~/assets/icons/arrow-left.svg';
import { calculateAge } from '~/utils/calculateAge';
import getValidationErrors from '~/utils/getValidationError';

export default function AccountDetails() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const { goBack } = useHistory();

  const formRef = useRef();

  const handleCalculateAge = useCallback(() => {
    if (!formRef) return;

    const birthDate = formRef.current.getFieldValue('birthDate');
    const currentAge = calculateAge(birthDate);

    if (!currentAge) return;
    formRef.current.setFieldValue('age', String(currentAge));
  }, []);

  const handleUpdateProfile = useCallback(async data => {
    try {
      console.log(data);

      const schema = Yup.object().shape({
        fullName: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string().min(15),
        gender: Yup.string().required(),
        birthDate: Yup.string().required(),
        age: Yup.string().required(),
        password: Yup.string().min(6).required(),
        confirmPassword: Yup.string().min(6).required(),
      });

      await schema.validate(data, { abortEarly: false });

      const password = formRef.current.getFieldValue('password');
      const confirmPassword = formRef.current.getFieldValue('confirmPassword');

      if (password !== confirmPassword)
        throw new Error("Passwords doesn't match.");
      console.log('mae');

      dispatch(updateProfileSuccess(data));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
      console.log(err);
      Alert.alert('Erro na atualização', 'Preencha corretamente os dados.');
    }
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Header>
        <TouchableOpacity onPress={goBack}>
          <ArrowLeft width={30} height={30} />
        </TouchableOpacity>
        <HeaderText>
          Minha&nbsp;
          <HeaderText style={{ fontWeight: 'bold' }}>Conta</HeaderText>
        </HeaderText>
      </Header>

      <ScrollView contentContainerStyle={{ backgroundColor: '#fff' }}>
        <Form
          ref={formRef}
          onSubmit={handleUpdateProfile}
          initialData={!!profile ? profile : {}}
          style={{
            padding: 20,
            paddingTop: 0,
          }}
        >
          <Input name="fullName" label="Nome Completo" />
          <Input
            name="email"
            type="email"
            label="Email"
            autoCompleteType="email"
            keyboardType="email-address"
          />
          <InputMask
            name="phone"
            label="Celular"
            mask="([00]) [00000]-[0000]"
            maxLength={15}
          />
          <Input name="gender" label="Gênero" />
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <InputMask
              name="birthDate"
              label="Data Nasc."
              mask="[00]/[00]/[0000]"
              onBlur={handleCalculateAge}
              style={{ width: '47.5%', marginTop: 0 }}
            />
            <Input
              name="age"
              label="Idade"
              style={{ width: '47.5%', marginTop: 0 }}
              editable={false}
              maxLength={3}
            />
          </View>
          <Input
            name="password"
            type="password"
            label="Senha"
            secureTextEntry
          />
          <Input
            name="confirmPassword"
            type="password"
            label="Repetir senha"
            secureTextEntry
          />

          <Button
            text="Salvar"
            boldText="Alteração"
            backgroundColor="#42B242"
            onPress={() => formRef.current.submitForm()}
            style={{ alignSelf: 'center' }}
          />
        </Form>
      </ScrollView>
    </>
  );
}
