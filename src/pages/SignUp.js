import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';

import {
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';

import api from '../services/api';

export default function SignUp({navigation}) {
  const [name, setName] = useState();
  const [cellPhone, setCellPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  function navigationSignIn() {
    navigation.navigate('SignIn');
  }

  async function handlerSubmit() {
    if (!name || !cellPhone || !email || !password) {
      setError('Preencha todos os campos');
    } else {
      await api.post('/users', {
        nome: name,
        telefone: cellPhone,
        email,
        password,
      });
      Alert.alert('Cadastro', 'Cadastro efetuado com sucesso!');
      navigation.navigate('SignIn');
    }
  }

  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}>
      <Animatable.Text style={style.title}>Informe seus dados</Animatable.Text>
      {error !== 0 && <Text style={style.error}>{error}</Text>}
      <Animatable.View
        style={style.boxInput}
        animation="fadeIn"
        useNativeDriver>
        <TextInput
          style={style.input}
          placeholder="Nome"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={style.input}
          placeholder="Telefone"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={cellPhone}
          onChangeText={setCellPhone}
        />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={style.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={style.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </Animatable.View>

      <Animatable.View style={style.footer} animation="fadeIn">
        <TouchableOpacity onPress={navigationSignIn} style={style.button}>
          <Text style={style.buttonText}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlerSubmit} style={style.button}>
          <Text style={style.buttonText}>Cadastra</Text>
        </TouchableOpacity>
      </Animatable.View>
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
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    marginBottom: 25,
  },

  boxInput: {
    width: '100%',
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
    height: 30,
    width: 100,
    backgroundColor: '#7289da',
    borderRadius: 30,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    textAlign: 'center',
    color: '#ce2029',
    fontSize: 18,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },

  footer: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
});
