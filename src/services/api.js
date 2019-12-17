import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://10.0.0.114:3001',
});

api.interceptors.request.use(async config => {
  try {
    const token = await AsyncStorage.getItem('@AppAgua:token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    alert(error);
  }
});

export default api;
