import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import agua from '../assets/agua.jpg';

export default function Home({navigation}) {
  function navigationHome() {
    navigation.navigate('Home');
  }

  function navigationFinalizeOrder() {
    navigation.navigate('FinalizeOrder');
  }

  function navigationFinalizeOrder() {
    navigation.navigate('FinalizeOrder');
  }

  function navigationOrder() {
    navigation.navigate('Order');
  }

  function navigationListAddress() {
    navigation.navigate('ListAddress');
  }

  function navigationSignIn() {
    navigation.navigate('SignIn');
  }
  return (
    <>
      {/* header */}
      <View style={style.header}>
        <TouchableOpacity onPress={navigationSignIn}>
          <Text style={style.textHeadder}>Sair</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={style.textHeadder}>Junior Marques</Text>
        </TouchableOpacity>
      </View>
      {/* containder */}

      <View style={style.container}>
        {/* product */}
        <TouchableOpacity
          onPress={navigationFinalizeOrder}
          style={style.product}>
          <View style={style.image}>
            <Image style={style.avatar} source={agua} />
          </View>

          <View style={style.productInfo}>
            <Text style={style.textProduct}>Água Lençoís Maranhese </Text>
            <Text style={style.text}>7.00 R$</Text>
          </View>
        </TouchableOpacity>

        {/* footer */}
        <View style={style.footer}>
          <TouchableOpacity
            onPress={navigationOrder}
            style={style.buttonFooter}>
            <Text style={style.text}>Pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigationHome} style={style.buttonFooter}>
            <Text style={style.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigationListAddress}
            style={style.buttonFooter}>
            <Text style={style.text}>Endereço</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
    justifyContent: 'space-between',
    backgroundColor: '#27272e',
  },
  textHeadder: {
    color: '#FFF',
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#353940',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },

  product: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    alignSelf: 'stretch',
    height: 150,
    backgroundColor: '#27272e',
    borderRadius: 20,
  },

  image: {
    backgroundColor: '#7289da',
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    flex: 1,
    height: 120,
    width: 120,
  },

  productInfo: {
    // backgroundColor: '#7289da',
    width: 190,
    height: 120,
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  textProduct: {
    color: '#FFF',
    textTransform: 'uppercase',
  },

  footer: {
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonFooter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27272e',
    width: 70,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 5,
  },

  text: {
    color: '#FFF',
  },
});
