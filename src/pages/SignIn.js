import React, {useState, useEffect} from 'react';
import {NavigationActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import * as Animatable from 'react-native-animatable';

import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import api from '../services/api';

const AnimatedTouchableOpacity = Animatable.createAnimatableComponent(
  TouchableOpacity,
);
const AnimatedTextInput = Animatable.createAnimatableComponent(TextInput);

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function navigationSignUp() {
    navigation.navigate('SignUp');
  }

  function handleEmailChange(email) {
    setEmail(email);
  }

  function handlePasswordChange(password) {
    setPassword(password);
  }

  useEffect(() => {
    AsyncStorage.getItem('userId').then(userId => {
      if (userId) {
        navigation.navigate('Home', {userId});
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSignInPress() {
    if (email.length === 0 || password.length === 0) {
      setError('Preencha usuário e senha para continuar!');
    } else {
      try {
        const response = await api.post('/sessions', {
          email,
          password,
        });

        await AsyncStorage.setItem('@AppAgua:token', response.data.token);
        await AsyncStorage.setItem('userId', response.data.user._id);
        const resetAction = NavigationActions.navigate({
          routeName: 'Home',
        });

        navigation.dispatch(resetAction);
      } catch (_err) {
        setError('Houve um problema com o login, verifique suas credenciais!');
      }
    }
  }

  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}>
      <Animatable.Text animation="flipInX" useNativeDriver style={style.logo}>
        LOGOTIPO
      </Animatable.Text>
      {error !== 0 && <Text style={style.error}>{error}</Text>}
      <AnimatedTextInput
        animation="slideInLeft"
        useNativeDriver
        autoCapitalize="none"
        autoCorrect={false}
        style={style.input}
        placeholder="Informe seu e-mail"
        onChangeText={handleEmailChange}
        value={email}
        placeholderTextColor="#999"
      />

      <AnimatedTextInput
        animation="slideInRight"
        useNativeDriver
        style={style.input}
        placeholder="Informe sua senha"
        placeholderTextColor="#999"
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
        value={password}
      />

      <AnimatedTouchableOpacity
        animation="flipInY"
        useNativeDriver
        onPress={() => handleSignInPress()}
        style={style.button}>
        <Text style={style.buttonText}>Entrar</Text>
      </AnimatedTouchableOpacity>

      <Animatable.View animation="slideInUp" useNativeDriver style={style.hr} />

      <AnimatedTouchableOpacity
        animation="slideInUp"
        useNativeDriver
        onPress={navigationSignUp}
        style={style.buttonCadastro}>
        <Text style={style.buttonText}>Cadastre-se</Text>
      </AnimatedTouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353940',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    color: '#FFF',
  },

  logo: {
    color: '#FFF',
    fontSize: 30,
  },

  error: {
    textAlign: 'center',
    color: '#ce2029',
    fontSize: 18,
    marginHorizontal: 20,
  },

  input: {
    height: 55,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderColor: '#7289da',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
    color: '#FFF',
  },

  button: {
    height: 55,
    width: 200,
    backgroundColor: '#7289da',
    borderRadius: 4,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },

  hr: {
    alignSelf: 'stretch',
    borderBottomColor: '#FFF',
    borderBottomWidth: 0.6,
    marginTop: 25,
  },

  textCadastro: {
    color: '#FFF',
    fontSize: 17,
    marginTop: 25,
  },

  buttonCadastro: {
    marginTop: 25,
  },
});
