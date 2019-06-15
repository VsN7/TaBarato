import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import api from "../../../services/api";
import styles from "./estilo/styles";
import Home from "./home";

export default class CadastroProduto extends Component {
  state = {
    produto: "",
    valor: "",
    local: ""
  };

  handleSubmit = async () => {
    const response = await api.post("products", {
      produto: this.state.produto,
      valor: this.state.valor,
      local: this.state.local,
    });
    
    this.props.navigation.navigate("Home");
    

  };

  render(props) {
    console.log(this.props);

    return (
      <View style={styles.form}>
        <TextInput
          style={styles.inputText}
          placeholder="Produto"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.produto}
          onChangeText={text => this.setState({ produto: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Valor"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.valor}
          onChangeText={text => this.setState({ valor: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Local"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.local}
          onChangeText={text => this.setState({ local: text })}
        />

        <TouchableOpacity
          style={styles.productButton}
          onPress={this.handleSubmit}
        >
          <Text style={styles.productButtonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.productButton}
          onPress={() => {
            this.props.navigation.navigate("Camera");
          }}
        >
          <Text style={styles.productButtonText}>Foto</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
