import React, { Component } from "react";
import { View, Text, StyleSheet, Style, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { TextInputMask } from 'react-native-masked-text'
import { max } from "react-native-reanimated";

export default class cadastroUser extends Component{
    constructor(props)
    {
        super(props);
        this.state =
        {
            celular: '',
            CEP: '',
        }
    }

    render()
    {
        return(
            <View style={styles.container}>
                <View style={styles.triangleCorner}/>

                    <View style={styles.ctnCad}>
                        <Text style={styles.h1}>Cadastro</Text>

                        <View style={styles.NomeCtn}>
                            <TextInput
                             style={styles.inputNome}
                             placeholder="Nome completo"
                             placeholderTextColor="black"
                             />
                        </View>

                        <View style={styles.InfsInput}>
                            <TextInput
                             style={styles.Infs}
                             placeholder="Email"
                             placeholderTextColor="black"
                             />

                            <TextInput
                             style={styles.Infs}
                             placeholder="Senha"
                             placeholderTextColor="black"
                             keyboardType="visible-password"
                             secureTextEntry={true}
                             />
                        </View>

                        <View style={styles.ctnMeio}>
                            <TextInputMask
                            type={'cel-phone'}
                            style={styles.Infs}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99)'
                                    }}

                                    value={this.state.celular}
                                    onChangeText={text => {
                                      this.setState({
                                        celular: text
                                      })
                                    }}
                             placeholder="Celular"
                             placeholderTextColor="black"
                             />
                        </View>
                        
                        <View style={styles.ctnMeio}>
                            <View style={styles.linha}></View>
                            <Text style={styles.h2}>Endereço</Text>
                            <View style={styles.linha}></View>
                        </View>

                        <View style={styles.ctnMeio}>
                        <TextInputMask
                            type={'custom'}
                            style={styles.Infs}
                                options={{
                                    mask: '99999-999'
                                    }}

                                    value={this.state.CEP}
                                    onChangeText={text => {
                                      this.setState({
                                       CEP: text
                                      })
                                    }}
                             placeholder="CEP"
                             placeholderTextColor="black"
                             />
                        </View>

                        <View style={styles.ctnMeio}>
                            <TouchableOpacity style={styles.btnCEP}>
                                <Text style={styles.textBtn}>Buscar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.InfsInput}>
                        <TextInput
                             style={styles.Infs}
                             placeholder="Complemento"
                             placeholderTextColor="black"
                             />

                            <TextInput
                             style={styles.Infs}
                             placeholder="Rua"
                             placeholderTextColor="black"
                             />
                        </View>

                        <View style={styles.ctnMeio}>
                            <TouchableOpacity style={styles.btnCEP}>
                                <Text style={styles.textBtn}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
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

  ctnCad: {
    // backgroundColor: 'green',
    marginHorizontal: 30,
    textAlign: 'center'
  },

  h1: {
      fontSize: 30,
      fontFamily: 'Arial'
  },

  NomeCtn: {
    height: max,
    width: max,
    // backgroundColor: 'blue',
  },

  inputNome: {
    height: 50,
    width: max,
    backgroundColor: 'white',

    marginTop: 40,
    paddingLeft: 10,
    color: 'black',
    fontSize: 18,
    fontFamily: 'Arial',

    borderColor: '#008763',
    borderWidth: 3,
    borderRadius: 7,
  },

  InfsInput: {
    height: max,
    width: max,
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: "row",
  },
  
  Infs: {
    height: 50,
    width: 150,
    backgroundColor: 'white',

    paddingLeft: 10,
    color: 'black',
    fontSize: 18,
    fontFamily: 'Arial',

    borderColor: '#008763',
    borderWidth: 3,
    borderRadius: 7,
  },

  ctnMeio: {
    height: max,
    width: max,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: 20,
  },    

  linha: {
    borderWidth: 1,
    width: 40,
  },

  h2: {
    padding: 10,
    fontFamily: 'Arial',
    fontSize: 25,
  },

  btnCEP: {
    height: 50,
    width: 150,
    backgroundColor: '#008763',

    borderColor: '#008763',
    borderWidth: 3,
    borderRadius: 7,

    justifyContent: 'center',
    alignItems: 'center',
  },

  textBtn: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 20,
  },

})