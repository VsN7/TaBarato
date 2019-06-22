import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground, 
  TouchableOpacity,
  
} from "react-native";
import styles from "./styles";
import background from '../background/6.jpg';
import logo from  '../background/logo3.png';
export default class Home extends Component {
  render() {
    return (
      <ImageBackground source={background} style={ { width : '100%' , height : '100%' } }>
      <View style={styles.container}> 
        
          <View style={styles.viewLogo}>
            <Image style={{  width: 250, height: 230, resizeMode: 'center',}} source={logo} ></Image>
            
          </View>

        <TouchableOpacity
          style={styles.botaum}
          onPress={() => {
            this.props.navigation.navigate("CadastroUsuario");
          }}>
          <Text style={styles.textBotaum}>CADASTRAR</Text>
        </TouchableOpacity> 
        
        
        <TouchableOpacity
        style={styles.botaum}
        onPress={() => {
          this.props.navigation.navigate("Login");
        }}
      >
        <Text style={styles.textBotaum} >LOGIN</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground> 
    );
  }
}

