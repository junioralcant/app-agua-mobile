import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

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

  function navigationComfirmedOrder() {
    navigation.navigate('ConfirmedOrder');
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

        <View style={style.boxTextAddress}>
          <Text style={style.textListAddress}>Endereços cadastrados</Text>
        </View>

        <ScrollView style={style.boxOrder}>
          <View>
            <Text> </Text>

            <View style={style.boxAddress}>
              <View style={style.address}>
                <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
                <Text style={style.textAddress}>Bairro: Centro</Text>
                <Text style={style.textAddress}>Cidade: São Mateus</Text>
                <Text style={style.textAddress}>Nº Casa: 360</Text>
              </View>
              <View style={style.ectionAddress}>
                <TouchableOpacity>
                  <Text>
                    <Icon name="edit" size={25} color="#7289da" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>
                    <Icon name="trash" size={25} color="#7289da" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={style.boxAddress}>
              <View style={style.address}>
                <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
                <Text style={style.textAddress}>Bairro: Centro</Text>
                <Text style={style.textAddress}>Cidade: São Mateus</Text>
                <Text style={style.textAddress}>Nº Casa: 360</Text>
              </View>
              <View style={style.ectionAddress}>
                <TouchableOpacity>
                  <Text>
                    <Icon name="edit" size={25} color="#7289da" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>
                    <Icon name="trash" size={25} color="#7289da" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={style.boxAddress}>
              <View style={style.address}>
                <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
                <Text style={style.textAddress}>Bairro: Centro</Text>
                <Text style={style.textAddress}>Cidade: São Mateus</Text>
                <Text style={style.textAddress}>Nº Casa: 360</Text>
              </View>
              <View style={style.ectionAddress}>
                <TouchableOpacity>
                  <Text>
                    <Icon name="edit" size={25} color="#7289da" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>
                    <Icon name="trash" size={25} color="#7289da" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={style.boxAddress}>
              <View style={style.address}>
                <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
                <Text style={style.textAddress}>Bairro: Centro</Text>
                <Text style={style.textAddress}>Cidade: São Mateus</Text>
                <Text style={style.textAddress}>Nº Casa: 360</Text>
              </View>
              <View style={style.ectionAddress}>
                <TouchableOpacity>
                  <Text>
                    <Icon name="edit" size={25} color="#7289da" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>
                    <Icon name="trash" size={25} color="#7289da" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={style.boxAddress}>
              <View style={style.address}>
                <Text style={style.textAddress}>Rua: Toca da Raposa</Text>
                <Text style={style.textAddress}>Bairro: Centro</Text>
                <Text style={style.textAddress}>Cidade: São Mateus</Text>
                <Text style={style.textAddress}>Nº Casa: 360</Text>
              </View>
              <View style={style.ectionAddress}>
                <TouchableOpacity>
                  <Text>
                    <Icon name="edit" size={25} color="#7289da" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>
                    <Icon name="trash" size={25} color="#7289da" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
