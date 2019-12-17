import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

export default function FinalizeOrder({navigation}) {
  function navigationHome() {
    navigation.navigate('Home');
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
        {/* order */}

        <View style={style.boxTextOrder}>
          <Text style={style.textListOrder}>Pedidos</Text>
        </View>

        <ScrollView style={style.boxOrderScroll}>
          <View>
            <Text> </Text>

            <View style={style.boxOrder}>
              <View>
                <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
                <Text style={style.textAddress}>Bairro: Centro</Text>
                <Text style={style.textAddress}>Cidade: São Mateus</Text>
                <Text style={style.textAddress}>Nº Casa: 360</Text>
              </View>
              <View style={style.infoOrder}>
                <Text style={style.textInfoOrder}> Galão de Água</Text>
                <Text style={style.textInfoOrder}>4</Text>
                <Text style={style.textInfoOrder}>28 R$</Text>
                <Text style={style.textInfoOrder}>14/06/2020</Text>
              </View>
            </View>

            <View style={style.boxOrder}>
              <View>
                <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
                <Text style={style.textAddress}>Bairro: Centro</Text>
                <Text style={style.textAddress}>Cidade: São Mateus</Text>
                <Text style={style.textAddress}>Nº Casa: 360</Text>
              </View>
              <View style={style.infoOrder}>
                <Text style={style.textInfoOrder}> Galão de Água</Text>
                <Text style={style.textInfoOrder}>4</Text>
                <Text style={style.textInfoOrder}>28 R$</Text>
                <Text style={style.textInfoOrder}>14/06/2020</Text>
              </View>
            </View>

            <View style={style.boxOrder}>
              <View>
                <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
                <Text style={style.textAddress}>Bairro: Centro</Text>
                <Text style={style.textAddress}>Cidade: São Mateus</Text>
                <Text style={style.textAddress}>Nº Casa: 360</Text>
              </View>
              <View style={style.infoOrder}>
                <Text style={style.textInfoOrder}> Galão de Água</Text>
                <Text style={style.textInfoOrder}>4</Text>
                <Text style={style.textInfoOrder}>28 R$</Text>
                <Text style={style.textInfoOrder}>14/06/2020</Text>
              </View>
            </View>

            <View style={style.boxOrder}>
              <View>
                <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
                <Text style={style.textAddress}>Bairro: Centro</Text>
                <Text style={style.textAddress}>Cidade: São Mateus</Text>
                <Text style={style.textAddress}>Nº Casa: 360</Text>
              </View>
              <View style={style.infoOrder}>
                <Text style={style.textInfoOrder}> Galão de Água</Text>
                <Text style={style.textInfoOrder}>4</Text>
                <Text style={style.textInfoOrder}>28 R$</Text>
                <Text style={style.textInfoOrder}>14/06/2020</Text>
              </View>
            </View>

            <View style={style.boxOrder}>
              <View>
                <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
                <Text style={style.textAddress}>Bairro: Centro</Text>
                <Text style={style.textAddress}>Cidade: São Mateus</Text>
                <Text style={style.textAddress}>Nº Casa: 360</Text>
              </View>
              <View style={style.infoOrder}>
                <Text style={style.textInfoOrder}> Galão de Água</Text>
                <Text style={style.textInfoOrder}>4</Text>
                <Text style={style.textInfoOrder}>28 R$</Text>
                <Text style={style.textInfoOrder}>14/06/2020</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* footer */}
        <View style={style.footer}>
          <TouchableOpacity
            onPress={navigationOrder}
            style={style.buttonFooter}>
            <MaterialCommunityIcons
              name="truck-delivery"
              size={25}
              color="#979798"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigationHome} style={style.buttonFooter}>
            <Text>
              <Entypo name="home" size={25} color="#979798" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigationListAddress}
            style={style.buttonFooter}>
            <Text>
              <Entypo name="address" size={25} color="#979798" />
            </Text>
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

  boxTextOrder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: -170,
  },

  boxOrderScroll: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 10,
  },

  boxOrder: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFF',
  },

  textListOrder: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  infoOrder: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#7289da',
    padding: 5,
    borderRadius: 4,
    marginLeft: 10,
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
  textInfoOrder: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '900',
  },
  text: {
    color: '#FFF',
  },
});
