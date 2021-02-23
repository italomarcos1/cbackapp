import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-native';
import { useSelector } from 'react-redux';

import Home from '~/pages/Home';
import Login from '~/pages/Login';

export default function CustomRoute({
  isPrivate = false,
  component: Component,
  ...rest
}) {
  const signed = useSelector(state => state.auth.signed);
  const { path } = rest;

  console.log(path);

  if (!signed) return <Route path="/" component={Home} />;

  return <Route {...rest} render={props => <Component {...props} />} />;
}
