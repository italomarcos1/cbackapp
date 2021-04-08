import React from 'react';
import { Redirect } from 'react-router-native';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import CBack from '~/assets/icons/cback.svg';

export default function Welcome() {
  const signed = useSelector(state => state.auth.signed);

  if (!signed) return <Redirect to="/home" />;
  return <Redirect to="/companies" />;
}
