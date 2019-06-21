import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import api from "../../../services/api";
import styles from "./estilo/styles";
import Home from "./home";

import Icon from "react-native-vector-icons/FontAwesome";

const home = new Home();
export default class CadastroProduto extends Component {
  state = {
    produto: "",
    valor: "",
    local: ""
  }; 


  recuperaUser = () =>{
    const user = this.props.navigation.getParam("usuario","user");
    return user;
  }

  handleSubmit = async () => {
    const response = await api.post("products", {
      produto: this.state.produto,
      valor: this.state.valor,
      local: this.state.local,
      user: this.recuperaUser()
    });
    home.render();
    this.props.navigation.navigate("Home");
    
    
    

  };


  render(props) {
    console.log(this.props);

    return (
      <View style={styles.form2}>
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
          onPress={ ()=>{
              this.handleSubmit();
          }
        }
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
      
       <View style={styles.divBotoes} >
          <TouchableOpacity style={styles.productContainer2} onPress={ ()=>{

          this.props.navigation.navigate("Home", {usuario:this.recuperaUser()})

          }}>
          <Text style={styles.textDelete}><Icon name="home" size={28} color="white" /></Text>
          <Text style={styles.textDelete}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productContainer2} onPress={ ()=>{

           this.props.navigation.navigate("CadastroProdutos", {usuario:this.recuperaUser()})

          }}>
          <Text style={styles.textDelete}><Icon name="paper-plane" size={28} color="white" /></Text>
          <Text style={styles.textDelete}>Novo Post</Text>
          </TouchableOpacity>
          </View>
        </View>
    );
  }
}
