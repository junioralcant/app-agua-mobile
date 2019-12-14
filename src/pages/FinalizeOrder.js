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

export default function FinalizeOrder({navigation}) {
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
          <Text style={style.textHeadder}>Junior</Text>
        </TouchableOpacity>
      </View>
      {/* containder */}

      <View style={style.container}>
        {/* product */}
        <View style={style.product}>
          <View style={style.image}>
            <Image style={style.avatar} source={agua} />
          </View>

          <View style={style.productInfo}>
            <Text style={style.textProduct}>Água Lençoís Maranhese </Text>
            <View style={style.buttonsProduct}>
              <TouchableOpacity>
                <Text style={style.textButtonsProduct}> - </Text>
              </TouchableOpacity>
              <Text style={style.textButtonsProduct}>0</Text>
              <TouchableOpacity>
                <Text style={style.textButtonsProduct}> + </Text>
              </TouchableOpacity>
            </View>
            <View style={style.price}>
              <Text style={style.text}>7.00 R$</Text>
            </View>
          </View>
        </View>

        <ScrollView style={style.boxAddress}>
          <View>
            <TouchableOpacity style={style.boxSelectAddress}>
              <Text style={style.textSelectAddress}>Selecione um Endereço</Text>
              <TouchableOpacity>
                <Text style={style.addAddress}>+</Text>
              </TouchableOpacity>
            </TouchableOpacity>

            <Text> </Text>

            <TouchableOpacity style={style.address}>
              <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
              <Text style={style.textAddress}>Bairro: Centro</Text>
              <Text style={style.textAddress}>Cidade: São Mateus</Text>
              <Text style={style.textAddress}>Nº Casa: 360</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.address}>
              <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
              <Text style={style.textAddress}>Bairro: Centro</Text>
              <Text style={style.textAddress}>Cidade: São Mateus</Text>
              <Text style={style.textAddress}>Nº Casa: 360</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.address}>
              <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
              <Text style={style.textAddress}>Bairro: Centro</Text>
              <Text style={style.textAddress}>Cidade: São Mateus</Text>
              <Text style={style.textAddress}>Nº Casa: 360</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.address}>
              <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
              <Text style={style.textAddress}>Bairro: Centro</Text>
              <Text style={style.textAddress}>Cidade: São Mateus</Text>
              <Text style={style.textAddress}>Nº Casa: 360</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

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
    // marginBottom: -170,
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

  buttonsProduct: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 4,
  },

  textButtonsProduct: {
    color: '#27272e',
    fontSize: 25,
    fontWeight: 'bold',
  },

  price: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#7289da',
    width: 62,
    height: 25,
  },

  productInfo: {
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

  boxSelectAddress: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: -170,
  },

  boxAddress: {
    display: 'flex',
    alignSelf: 'stretch',
    marginTop: 10,
    marginBottom: 10,
  },

  address: {
    padding: 5,
    display: 'flex',
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFF',
  },

  addAddress: {
    marginLeft: 20,
    paddingHorizontal: 10,
    color: '#FFF',
    fontSize: 30,
    backgroundColor: '#7289da',
    borderRadius: 4,
  },

  textSelectAddress: {
    color: '#FFF',
    fontSize: 18,
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

  textAddress: {
    color: '#27272e',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFF',
  },
});
