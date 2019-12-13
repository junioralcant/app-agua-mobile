import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function SignIn({navigation}) {
  const [user, setUser] = useState('');

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior="padding"
      enabled={Platform.OS == 'ios'}>
      <Text style={style.logo}>LOGOTIPO</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={style.input}
        placeholder="Informe seu e-mail"
        placeholderTextColor="#999"
      />

      <TextInput
        style={style.input}
        placeholder="Informe sua senha"
        placeholderTextColor="#999"
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={handleSignIn} style={style.button}>
        <Text style={style.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={style.hr} />

      {/* <Text style={style.textCadastro}>Cadastre-se</Text> */}
      <TouchableOpacity style={style.buttonCadastro}>
        <Text style={style.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
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
    borderBottomWidth: 0.2,
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
