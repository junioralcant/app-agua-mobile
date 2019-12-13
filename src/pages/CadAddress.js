import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';

// import { Container } from './styles';

export default function CadAddress({navigation}) {
  function navigationHome() {
    navigation.navigate('Home');
  }
  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}>
      <Text style={style.title}>Informe seu endereço</Text>
      <TextInput
        style={style.input}
        placeholder="Rua"
        placeholderTextColor="#999"
      />

      <TextInput
        style={style.input}
        placeholder="Bairro"
        placeholderTextColor="#999"
      />

      <TextInput
        style={style.input}
        keyboardType="numeric"
        placeholder="Número da casa"
        placeholderTextColor="#999"
      />

      <TextInput
        style={style.input}
        placeholder="Cidade"
        placeholderTextColor="#999"
      />

      <TextInput
        style={style.input}
        placeholder="Estado"
        placeholderTextColor="#999"
      />

      <TouchableOpacity onPress={navigationHome} style={style.button}>
        <Text style={style.buttonText}>Cadastrar</Text>
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
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    marginBottom: 25,
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
    marginTop: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});
