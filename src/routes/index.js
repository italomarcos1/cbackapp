import React from 'react';
import { Switch } from 'react-router-native';
import { useSelector } from 'react-redux';

import Route from './route';

import Home from '~/pages/Home';
import Companies from '~/pages/Companies';
import CBack from '~/pages/CBack';

import CompaniesCBack from '~/pages/Companies/pages/CBack';
import CompaniesMenu from '~/pages/Companies/pages/Menu';
import Delivery from '~/pages/Companies/pages/Delivery';
import Checkout from '~/pages/Companies/pages/Checkout';

import Account from '~/pages/Account';
import MyOrders from '~/pages/MyOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Companies} isPrivate />
      <Route path="/companies/cback" component={CompaniesCBack} isPrivate />
      <Route path="/companies/menu" component={CompaniesMenu} isPrivate />
      <Route path="/companies/delivery" component={Delivery} isPrivate />
      <Route path="/companies/checkout" component={Checkout} isPrivate />
      <Route path="/cback" component={CBack} isPrivate />
      <Route path="/account" component={Account} isPrivate />
      <Route path="/orders" component={MyOrders} isPrivate />
    </Switch>
  );
}
