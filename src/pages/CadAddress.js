import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';

import {
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';

// import { Container } from './styles';
import api from '../services/api';

export default function CadAddress({navigation}) {
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [numberHouse, setNumberHouse] = useState('');
  const [error, setError] = useState('');

  const from = navigation.getParam('from');

  async function handlerSubmit() {
    if (!street || !neighborhood || !city || !state || !numberHouse) {
      setError('Preencha todos os campos');
    } else {
      await api.post('/enderecos', {
        endereco: {
          rua: street,
          bairro: neighborhood,
          cidade: city,
          estado: state,
          numeroCasa: numberHouse,
        },
      });

      if (from === 'FinalizeOrder') {
        navigation.navigate('FinalizeOrder');
      } else if (from === 'ListAddress') {
        navigation.navigate('ListAddress');
      }
    }
  }

  function navigationFrom() {
    if (from === 'FinalizeOrder') {
      navigation.navigate('FinalizeOrder');
    } else if (from === 'ListAddress') {
      navigation.navigate('ListAddress');
    }
  }

  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}>
      <Animatable.View
        style={{width: '100%', alignItems: 'center'}}
        animation="fadeIn"
        useNativeDriver>
        <Text style={style.title}>Cadastro de endereço</Text>
        {error !== 0 && <Text style={style.error}>{error}</Text>}
        <TextInput
          style={style.input}
          placeholder="Rua"
          placeholderTextColor="#999"
          value={street}
          onChangeText={setStreet}
        />

        <TextInput
          style={style.input}
          placeholder="Bairro"
          placeholderTextColor="#999"
          value={neighborhood}
          onChangeText={setNeighborhood}
        />

        <TextInput
          style={style.input}
          placeholder="Número da casa"
          placeholderTextColor="#999"
          value={numberHouse}
          onChangeText={setNumberHouse}
        />

        <TextInput
          style={style.input}
          placeholder="Cidade"
          placeholderTextColor="#999"
          value={city}
          onChangeText={setCity}
        />

        <TextInput
          style={style.input}
          placeholder="Estado"
          placeholderTextColor="#999"
          value={state}
          onChangeText={setState}
        />

        <View style={style.footer}>
          <TouchableOpacity onPress={navigationFrom} style={style.button}>
            <Text style={style.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlerSubmit} style={style.button}>
            <Text style={style.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 15,
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
    marginTop: -10,
  },
});
