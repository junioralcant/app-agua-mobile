import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import api from '../services/api';

export default function Header({navigation}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUser() {
      const id = await AsyncStorage.getItem('userId');
      const response = await api.get(`/users/${id}`);
      setUser(response.data);
    }

    loadUser();
  }, []);

  return (
    <View style={style.header}>
      <TouchableOpacity>
        <Text style={style.textHeadder}>{user.nome}</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    height: 60,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#27272e',
  },

  textHeadder: {
    color: '#FFF',
    fontSize: 15,
  },
});
