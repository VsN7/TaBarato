
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class App extends Component{
  
direcionarCadastrar(){
  alert("teste")
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Todos por um</Text>
        <View style={styles.containerView}>
        <Text style={styles.viewButtonLogin}>Login</Text>
        <TouchableOpacity onPress={this.direcionarCadastrar} ><Text style={styles.viewButtonCadastrar}>Cadastrar</Text></TouchableOpacity>
        <Text style={styles.viewButtonAjudar}>Ajudar</Text>
        <Text style={styles.rodape}>Por que juntos somos mais fortes</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000',
    fontWeight : 'bold',
    fontSize: 30,
    fontFamily: 'cursive',
    bottom: 40
  },
  instructions: {
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 5,
  },
  containerView: {

  },
  viewButton: {
    textAlign: 'center',
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 70,
    paddingTop:20,
    paddingBottom: 20,
    borderRadius: 10,
    borderColor: '#000',
    color: '#000',
    fontSize: 20
  },
  viewButtonLogin: {
    textAlign: 'center',
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 70,
    paddingTop:20,
    paddingBottom: 20,
    borderRadius: 10,
    borderColor: '#000',
    color: '#000',
    fontSize: 20
  },
  viewButtonCadastrar: {
    textAlign: 'center',
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 70,
    paddingTop:20,
    paddingBottom: 20,
    borderRadius: 10,
    borderColor: '#000',
    color: '#000',
    fontSize: 20
  },
  viewButtonAjudar: {
    textAlign: 'center',
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 70,
    paddingTop:20,
    paddingBottom: 20,
    borderRadius: 10,
    borderColor: '#000',
    color: '#000',
    fontSize: 20
  },
  rodape: {
    top: 50,
    textAlign: 'center',
    color: '#000',
    fontSize: 17
  }
});
