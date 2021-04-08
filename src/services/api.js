import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = 'https://sandbox.amfrutas.pt/backend';

axios.interceptors.request.use(async config => {
  config.headers.uuid = '8ba6b4b-4860-4e-b43a-3e644e4040a';

  return config;
});

export default axios;
