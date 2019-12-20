import React, {useState, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import api from '../services/api';
import agua from '../assets/agua.jpg';
import Header from '../components/Header';

export default function ConfirmedOrder({navigation}) {
  const [product, setProduct] = useState([]);
  const [address, setAddress] = useState([]);

  const addressId = navigation.getParam('idAddress');
  const productId = navigation.getParam('idProduct');
  const amount = navigation.getParam('amount');
  const price = navigation.getParam('price');

  useEffect(() => {
    async function handlerOrder() {
      await api.post('/pedidos', {
        produto: productId,
        enderecoId: addressId,
        quantidade: amount,
      });
    }

    handlerOrder();
  }, [productId, addressId, amount]);

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`/produtos/${productId}`);
      setProduct(response.data);
    }
    loadProduct();
  }, [productId]);

  useEffect(() => {
    async function loadAddress() {
      const response = await api.get(`/enderecos/ ${addressId}`);
      setAddress(response.data);
    }

    loadAddress();
  }, [addressId]);

  function navigationHome() {
    navigation.navigate('Home');
  }

  function navigationOrder() {
    navigation.navigate('Order');
  }

  function navigationListAddress() {
    navigation.navigate('ListAddress');
  }

  return (
    <>
      {/* header */}
      <Header />
      {/* containder */}

      <View style={style.container}>
        {/* product */}
        <View style={style.product}>
          <View style={style.image}>
            <Image style={style.avatar} source={agua} />
          </View>

          <View style={style.productInfo}>
            <Text style={style.textProduct}>{product.nome} </Text>
            <View style={style.buttonsProduct}>
              <Text style={style.textButtonsProduct}>{amount}</Text>
            </View>
            <View style={style.price}>
              <Text style={style.text}>{price} R$</Text>
            </View>
          </View>
        </View>

        <View style={style.boxAddress}>
          <View style={style.boxSuccess}>
            <Text style={style.textSuccessTitle}>
              Pedido efetuado com sucesso!
            </Text>
          </View>

          <View style={style.boxSelectAddress}>
            <Text style={style.textSelectAddress}>Endereço selecionado</Text>
            <View style={style.hr} />
          </View>

          <Text> </Text>

          <View style={style.address}>
            <Text style={style.textAddress}>Rua: {address.rua}</Text>
            <Text style={style.textAddress}>Bairro: {address.bairro}</Text>
            <Text style={style.textAddress}>Cidade: {address.cidade}</Text>
            <Text style={style.textAddress}>Nº Casa: {address.numeroCasa}</Text>
          </View>
        </View>

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

  product: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
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
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
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

  hr: {
    alignSelf: 'stretch',
    borderBottomColor: '#FFF',
    borderBottomWidth: 0.9,
    marginTop: 10,
  },

  boxSelectAddress: {
    display: 'flex',
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

  boxSuccess: {
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 25,
    backgroundColor: '#63f5b0',

    borderBottomRightRadius: 80,
  },

  textSuccessTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#27272e',
  },

  textSuccess: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#27272e',
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
