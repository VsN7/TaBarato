import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput, Image, ImageBackground } from "react-native";

import api from "../../../services/api";
import styles from "./estilo/estilo2";
import Home from "./home";

import Icon from "react-native-vector-icons/FontAwesome";//FontAwesome
import background from '../../../background/6.jpg';

const home = new Home();
export default class CadastroProduto extends Component {
  state = {
    produto: "",
    valor: "",
    local: "",
    imagem: ""
  }; 
 

  voltar = () => {
    this.props.navigation.navigate("Home");
    };
  
  

  handleSubmit = async () => {
    try{
        const response = await api.post("products", {
          produto: this.state.produto,
          valor: this.state.valor,
          local: this.state.local,
          imagem: this.state.imagem,
          user: this.props.navigation.getParam("usuario","user")
        });
        home.render();
        this.props.navigation.navigate("Home");
    }
    catch(e){
            try{
            const response = await api.post("products", {
              produto: this.state.produto,
              valor: this.state.valor,
              local: this.state.local,
              user: this.recuperaUser(),
              imagem: "coloque aqui a imagem padrão de (sem imagem)",
            });
            home.render();
            this.props.navigation.navigate("Home");
          }catch(e){
            alert("Preencha os campos corretamente!!")
          }
        }
    
    

  };


  render(props) {
    console.log(this.props);
    var arquivo = this.props.navigation.getParam('Uri', 'Imagem');
  
    this.state.imagem = arquivo.base64;

    return (
      <ImageBackground source={background} style={ { width : '100%' , height : '100%' } }>

      <View style={styles.voltarIcon}>
        <TouchableOpacity  onPress={this.voltar}>
          <Text><Icon name="chevron-circle-left"   size={35} color={'rgba(255, 255, 255, 0.7)'} ></Icon></Text>   
        </TouchableOpacity>
      </View>

      <View style={styles.form}>

        <View>
              <TouchableOpacity style={styles.btnFoto} onPress={() => { this.props.navigation.navigate("Camera"); }} > 
                 <Image source={{uri:arquivo.uri}}  /> 
                 <Text style={styles.textBotaum}><Icon name="camera" size={70} color="white" /></Text>
                 <Text style={styles.textPost}>FOTOGRAFAR</Text>
              </TouchableOpacity>             
        </View> 

        <View style={styles.inputConteiner}>
        <Icon name="shopping-cart"   size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
        <TextInput
          style={styles.inputText}
          placeholder="Produto"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.produto}
          onChangeText={text => this.setState({ produto: text })}
        />
        </View>

        <View style={styles.inputConteiner}>
        <Icon name="dollar"   size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
        <TextInput
          style={styles.inputText}
          placeholder="Valor"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.valor}
          onChangeText={text => this.setState({ valor: text })}
        />
        </View>

        <View style={styles.inputConteiner}>
        <Icon name="map-marker"   size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
        <TextInput
          style={styles.inputText}
          placeholder="Local"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.local}
          onChangeText={text => this.setState({ local: text })}
        />
        </View>

        <View style={styles.botaumSalvar} >
         <TouchableOpacity style={styles.botaumPostar}  onPress={ ()=>{
           this.handleSubmit();}}>
          <Text style={styles.textBotaum}><Icon name="paper-plane" size={50} color="white" /></Text>
          <Text style={styles.textPost}>POSTAR</Text>
         </TouchableOpacity>
        </View>
      
     
        </View>

        </ImageBackground> 
    );
  }
}
