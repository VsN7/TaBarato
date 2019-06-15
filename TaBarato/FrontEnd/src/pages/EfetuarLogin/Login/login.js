import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import api from "../../../services/api";
import styles from "./estilo/styles";
import Home from "./home";

export default class CadastroProduto extends Component {
    state = {
      login: "",
      senha: ""
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
          onPress={() => {
            this.props.navigation.navigate("EfetuarLogin");
          }}
        >
          <Text style={styles.productButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
