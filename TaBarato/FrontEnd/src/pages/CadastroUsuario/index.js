import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import api from "../../services/api";
import styles from "./styles";

export default class CadastroUsuario extends Component {
  state = {
    login: "",
    senha: "",
    user: ""
  };

  verifica = async () => {
    try{
    const login = this.state.login;
    const response = await api.get(`/users/${login}`);
    this.setState({
      user: response.data.login
    })
    const user = this.state.user
    if(login===user){
      alert("Cadastro ja existente")
    }else{
      alert("Cadastro não existente")
      // this.handleSubmit();
    }}catch(e){
      this.handleSubmit()
    }
    
  };

  handleSubmit = async () => {
    const response = await api.post("users", {
      login: this.state.login,
      senha: this.state.senha
    });
  alert("Cadastro realizado com sucesso!!")
    this.props.navigation.navigate("Inicio");
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
            this.verifica}
        >
          <Text style={styles.productButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
