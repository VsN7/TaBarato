import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput, ImageBackground } from "react-native";

import api from "../../../services/api";
import styles from "./estilo/estilo2";
import Icon from "react-native-vector-icons/FontAwesome";//FontAwesome
import background from '../../../background/6.jpg';

export default class CadastroProduto extends Component {
    state = {
      mostraSenha: true,
      press: false,
      login: "",
      senha: "",
      user: "",
      ssenha: ""
    };

    mostraSenha = () => {
      if (this.state.press == false){
        this.setState({ mostraSenha : false, press: true})
      }else{
        this.setState({ mostraSenha : true, press: false})
      }
    };
  
   voltar = () => {
    this.props.navigation.navigate("Inicio")
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
      <ImageBackground source={background} style={ { width : '100%' , height : '100%' } }> 
        
        <View style={styles.voltarIcon}>
        <TouchableOpacity  onPress={this.voltar}>
          <Text><Icon name="chevron-circle-left"   size={35} color={'rgba(255, 255, 255, 0.7)'} ></Icon></Text>   
        </TouchableOpacity>
        </View>

      <View style={styles.form}>
        <View style={styles.incone}>
           <Text><Icon  name="id-card"   size={150} color="'rgb(75,30,130)'"/></Text>
        </View>
        <View style={styles.inputConteiner}>
        <Icon name="user"   size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
        <TextInput
          style={styles.inputText}
          placeholder="Login"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.login}
          onChangeText={text => this.setState({ login: text })}
        />
        </View>
         <View style={styles.inputConteiner}>
          <Icon name="lock"   size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
          <TextInput
          secureTextEntry={this.state.mostraSenha}
          style={styles.inputText}
          placeholder="Senha"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.senha}
          onChangeText={text => this.setState({ senha: text })}
        />
         <TouchableOpacity style={styles.inputIcon2}  onPress={this.mostraSenha.bind(this)}>
          <Text><Icon name="eye"   size={28} color={'rgba(255, 255, 255, 0.7)'} />
           </Text>  
         </TouchableOpacity>

        </View>

        <View style={styles.botaumSalvar} >
          <TouchableOpacity style={styles.botaum} onPress={this.verifica}>
          <Text style={styles.textBotaum}>ACESSAR</Text>
          </TouchableOpacity>
        </View>

      </View>
      </ImageBackground>
    );
  }
}
