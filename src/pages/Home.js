import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function Home() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Ola</Text>
    </View>
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
  },
});
