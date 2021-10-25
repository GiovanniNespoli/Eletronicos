import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { max } from 'react-native-reanimated';

export default class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email : '',
            senha : '',
        }
    }

    render()
    {
        return (
          <View style={styles.container}>
              <View style={styles.triangleCorner}/>
      
              <View style={styles.content}>
                  <Text style={styles.h1}>Login</Text>

                  <TextInput
                    style={styles.inputLogin}
                    placeholder="Email"
                    placeholderTextColor="black"
                    keyboardType="email-address"
                    onChangeText={email => this.setState({email})}
                  />

                  <TextInput
                    style={styles.inputLogin}
                    placeholder="Senha"
                    placeholderTextColor="black"
                    keyboardType="visible-password"
                    secureTextEntry={true}
                    onChangeText={senha => this.setState({senha})}
                  />

                  <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textBtn}>Login</Text>
                  </TouchableOpacity>

              </View>

              <TouchableOpacity style={styles.ctnCadastro}>

                <Text style={styles.textCadastro}>Não tem uma conta? cadastre-se</Text>

              </TouchableOpacity>
          </View>
        );

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  triangulo: {
    flex: 0.3,
    backgroundColor: 'black',
  },

  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 300,
    borderTopWidth: 300,
    borderRightColor: "transparent",
    borderTopColor: "#008763",
  },

  content: {
    flex : 0.6,
    // backgroundColor : 'red',

    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    position: 'relative',
    bottom: 45,
  },

  h1 : {
    fontFamily: 'Arial',
    fontSize: 30,
  },

  inputLogin : {
    height: 50,
    width: 360,
    backgroundColor: 'white',

    paddingLeft: 10,
    color: 'black',
    fontSize: 20,
    fontFamily: 'Arial',

    borderColor: '#008763',
    borderWidth: 3,
    borderRadius: 7,
  },

  btnLogin : {
    height: 50,
    width: 150,
    borderWidth: 3,
    borderRadius: 7,

    justifyContent: 'center',
    alignItems: 'center',
  },

  textBtn : {
    fontSize : 25,
    fontFamily : 'Arial'
  },

  ctnCadastro : {
    textAlign: 'center',
  },

  textCadastro : {
    fontSize: 13,
    fontFamily : 'Arial'
  },
});