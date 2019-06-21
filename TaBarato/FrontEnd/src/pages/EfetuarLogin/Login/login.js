import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import api from "../../../services/api";
import styles from "./estilo/styles";
import Home from "./home";

export default class CadastroProduto extends Component {
    state = {
      login: "",
      senha: "",
      user: "",
      ssenha: ""
    };


    
    verifica = async () => {
      
      const login = this.state.login;
      const senha = this.state.senha;
      // alert(login)
      
      try{
      const response = await api.get(`/users/${login}`);
      this.setState({
        user: response.data.login,
        ssenha: response.data.senha
      })
      const user = this.state.user
      const ssenha = this.state.ssenha

      if(user == login && ssenha == senha){
        alert("Bem Vindo "+user)
        this.props.navigation.navigate("Home", {usuario:user});
      }else{
        alert("Senha incorreta!!!")
      }

    }catch(e){
      alert("Login incorreto!!")
    }

    };
    

  render(props) {
    console.log(this.props);

    return (
      <View style={styles.form}>
        <TextInput
          style={styles.inputText}
          placeholder="Login"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.login}
          onChangeText={text => this.setState({ login: text })}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.inputText}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.senha}
          onChangeText={text => this.setState({ senha: text })}
        />

        <TouchableOpacity
          style={styles.productButton}
          onPress={
            this.verifica
            
          }
        >
          <Text style={styles.productButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
