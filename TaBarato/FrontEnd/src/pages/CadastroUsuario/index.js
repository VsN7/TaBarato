import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import api from "../../services/api";
import styles from "./styles";

export default class CadastroUsuario extends Component {
  state = {
    nome: "",
    telefone: ""
  };

  handleSubmit = async () => {
    const response = await api.post("products", {
      nome: this.state.nome,
      telefone: this.state.telefone
    });

    this.props.navigation.navigate("Home");
  };

  render(props) {
    console.log(this.props);

    return (
      <View style={styles.form}>
        <TextInput
          style={styles.inputText}
          placeholder="Nome"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.nome}
          onChangeText={text => this.setState({ nome: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Apelido"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.telefone}
          onChangeText={text => this.setState({ telefone: text })}
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
