import React from 'react';
import { Route, Switch } from 'react-router-native';
import { useSelector } from 'react-redux';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Terms from '~/pages/Terms';
import Welcome from '~/pages/Welcome';
import Companies from '~/pages/Companies';
import Favorites from '~/pages/Favorites';

import CompaniesCBack from '~/pages/Companies/pages/CBack';
import CompaniesMenu from '~/pages/Companies/pages/Menu';
import Delivery from '~/pages/Companies/pages/Delivery';
import Checkout from '~/pages/Companies/pages/Checkout';

import Account from '~/pages/Account';
import AccountDetails from '~/pages/Account/pages/Account';
import AccountCredits from '~/pages/Account/pages/Credits';
import CBack from '~/pages/CBack';
import CBackProduct from '~/pages/CBack/pages/Product';

import Corporation from '~/pages/Corporation';
import Activation from '~/pages/CellphoneActivation';
import CommercialArea from '~/pages/CommercialArea';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/companies" component={Companies} />
      <Route path="/companies/cback" component={CompaniesCBack} />
      <Route path="/companies/menu" component={CompaniesMenu} />
      <Route path="/companies/delivery" component={Delivery} />
      <Route path="/companies/checkout" component={Checkout} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/cback" exact component={CBack} />
      <Route path="/cback/product" component={CBackProduct} />
      <Route path="/account" exact component={Account} />
      <Route path="/account/details" component={AccountDetails} />
      <Route path="/account/credits" component={AccountCredits} />
      <Route path="/corporation" component={Corporation} />
      <Route path="/activation" component={Activation} />
      <Route path="/commercial" component={CommercialArea} />
      <Route path="/terms" component={Terms} />
    </Switch>
  );
}
