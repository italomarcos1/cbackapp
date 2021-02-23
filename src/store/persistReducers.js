import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'amfrutas',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'cart'],
    },
    reducers
  );

  return persistedReducer;
};
