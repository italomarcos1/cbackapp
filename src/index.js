import './config/ReactotronConfig';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '~/store';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeRouter>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <Routes />
        </NativeRouter>
      </PersistGate>
    </Provider>
  );
}
