import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';

export default function SignUp({navigation}) {
  function navigationSignIn() {
    navigation.navigate('SignIn');
  }

  function navigationSignUp() {
    navigation.navigate('CadAddress');
  }
  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}>
      <Text style={style.title}>Informe seus dados</Text>
      <TextInput
        style={style.input}
        placeholder="Nome"
        placeholderTextColor="#999"
      />

      <TextInput
        style={style.input}
        placeholder="Telefone"
        placeholderTextColor="#999"
        keyboardType="numeric"
      />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={style.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
      />

      <TextInput
        style={style.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry={true}
      />
      <View style={style.footer}>
        <TouchableOpacity onPress={navigationSignIn} style={style.button}>
          <Text style={style.buttonText}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigationSignUp} style={style.button}>
          <Text style={style.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
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
