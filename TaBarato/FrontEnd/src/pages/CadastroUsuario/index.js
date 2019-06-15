import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import api from "../../services/api";
import styles from "./styles";

export default class CadastroUsuario extends Component {
  state = {
    nome_usuario: "",
  };

  handleSubmit = async () => {
    const response = await api.post("users", {
      nome_usuario: this.state.nome_usuario
    });
  alert("sucesso")
    this.props.navigation.navigate("Home");
  };

  render(props) {
    console.log(this.props);

    return (
      <View style={styles.form}>
        <TextInput
          style={styles.inputText}
          placeholder="Nome de usuario"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.nome_usuario}
          onChangeText={text => this.setState({ nome_usuario: text })}
        />
        <TouchableOpacity
          style={styles.productButton}
          onPress={this.handleSubmit}
        >
          <Text style={styles.productButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
