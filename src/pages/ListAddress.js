import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import api from '../services/api';

export default function FinalizeOrder({navigation}) {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    async function loadAddress() {
      const response = await api.get('/enderecos');
      setAddress(response.data);
    }

    loadAddress();
  }, []);
  function navigationHome() {
    navigation.navigate('Home');
  }

  function navigationOrder() {
    navigation.navigate('Order');
  }

  function navigationListAddress() {
    navigation.navigate('ListAddress');
  }

  function navigationCadAddress() {
    navigation.navigate('CadAddress', {from: 'ListAddress'});
  }

  function destroyAddress(id) {
    async function destroy() {
      await api.delete(`/enderecos/${id}`);
      const response = await api.get('/enderecos');
      setAddress(response.data);
    }
    Alert.alert(
      'Exclusão',
      'Deseja excluir o endereço selecionado?',
      [
        {
          text: 'Cancelar',
          onPress: () => navigationListAddress(),
          style: 'cancel',
        },
        {text: 'Excluir', onPress: () => destroy()},
      ],
      {cancelable: false},
    );
  }
  return (
    <>
      {/* header */}
      <View style={style.header}>
        <TouchableOpacity>
          <Text style={style.textHeadder} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={style.textHeadder}>Junior</Text>
        </TouchableOpacity>
      </View>
      {/* containder */}

      <View style={style.container}>
        {/* order */}

        <View style={style.boxTextAddress}>
          <Text style={style.textListAddress}>Endereços</Text>
          <TouchableOpacity onPress={navigationCadAddress}>
            <Text style={style.addAddress}> + </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={style.boxOrder}>
          <View>
            <Text> </Text>

            {address.map(addres => {
              return (
                <View key={addres._id} style={style.boxAddress}>
                  <View style={style.address}>
                    <Text style={style.textAddress}>Rua: {addres.rua}</Text>
                    <Text style={style.textAddress}>
                      Bairro: {addres.bairro}
                    </Text>
                    <Text style={style.textAddress}>
                      Cidade: {addres.cidade}
                    </Text>
                    <Text style={style.textAddress}>
                      Nº Casa: {addres.numeroCasa}
                    </Text>
                  </View>
                  <View style={style.ectionAddress}>
                    <TouchableOpacity
                      onPress={() => destroyAddress(addres._id)}>
                      <Text>
                        <Icon name="trash" size={25} color="#7289da" />
                      </Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity>
                      <Text>
                         <Icon name="edit" size={25} color="#7289da" />

                      </Text>
                    </TouchableOpacity> */}
                  </View>
                </View>
              );
            })}
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

  boxTextAddress: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: -170,
  },

  boxOrder: {
    display: 'flex',
    alignSelf: 'stretch',
    marginTop: 10,
    marginBottom: 10,
  },

  boxAddress: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFF',
  },

  textListAddress: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  addAddress: {
    marginLeft: 20,
    paddingHorizontal: 10,
    color: '#FFF',
    fontSize: 30,
    backgroundColor: '#7289da',
    borderRadius: 4,
  },

  ectionAddress: {
    display: 'flex',
    justifyContent: 'space-between',
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
