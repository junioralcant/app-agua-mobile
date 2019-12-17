import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import agua from '../assets/agua.jpg';
import api from '../services/api';

export default function Home({navigation}) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get('/produtos');
      setProduct(response.data.docs);
    }
    loadProduct();
  }, []);

  function navigationHome() {
    navigation.navigate('Home');
  }

  function navigationFinalizeOrder(productId) {
    AsyncStorage.setItem('productId', productId);

    navigation.navigate('FinalizeOrder', {id: productId});
  }

  function navigationOrder() {
    navigation.navigate('Order');
  }

  function navigationListAddress() {
    navigation.navigate('ListAddress');
  }

  function logout() {
    AsyncStorage.removeItem('@AppAgua:token');
    navigation.navigate('SignIn');
  }

  return (
    <>
      {/* header */}
      <View style={style.header}>
        <TouchableOpacity onPress={logout}>
          <Text style={style.textHeadder}>Sair</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={style.textHeadder}>Junior Marques</Text>
        </TouchableOpacity>
      </View>
      {/* containder */}

      <View style={style.container}>
        {/* product */}
        {product.map(product => {
          return (
            <TouchableOpacity
              key={product._id}
              onPress={() => navigationFinalizeOrder(product._id)}
              style={style.product}>
              <View style={style.image}>
                <Image style={style.avatar} source={agua} />
              </View>

              <View style={style.productInfo}>
                <Text style={style.textProduct}>{product.nome}</Text>
                <Text style={style.text}>{product.preco},00 R$</Text>
              </View>
            </TouchableOpacity>
          );
        })}

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
              <Icon name="home" size={25} color="#979798" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigationListAddress}
            style={style.buttonFooter}>
            <Text>
              <Icon name="address" size={25} color="#979798" />
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

  product: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
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
