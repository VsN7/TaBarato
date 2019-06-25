import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ImageBackground
} from "react-native";
import Moment from 'moment';
import api from "../../../services/api"; 
import Icon from "react-native-vector-icons/FontAwesome";//FontAwesome
import background from '../../../background/home81.jpg';
import semFoto from "../../../background/semfoto.jpg";

import styles from "./estilo/styleHome";

const path = "/products";
export default class Home extends Component {
  
  constructor(props){
    super(props);
  }


  state = {
    productInfo: {},
    docs: [],
    page: 1
  };

  componentDidMount() {
    this.loadProdutos();
  }

  
  
   loadProdutos = async (page = 1) => {
    try {
      
      const response = await api.get(`/products?page=${page}`);
      
      const { docs, ...productInfo } = response.data;
      this.setState({
        docs: [...this.state.docs, ...docs],
        productInfo,
        page
      });
    } catch (error) {
      console.log(error);
    }
  };

  loadMore = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;
    
    this.loadProdutos(pageNumber);
  };
  

  renderItem = ({ item }) => {
    Moment.locale('en');
    if(this.props.navigation.getParam("usuario","user") ==item.user){
    return (
      
      
      <View style={styles.productContainer}>
      
       <View >
       <TouchableOpacity style={styles.buttonExcluir} onPress={
          
          excluirI = async (id) => {
            id = item._id;
            Alert.alert(
              'Deseja excluir o item: '+ item.produto,
              '',
              [
                {
                  text: 'Cancelar',
                  onPress: () => {  },
                  style: 'cancel',
                },
                {
                  text: 'OK', 
                  onPress: async () => {
                    await api.delete(`/products/${id}`)
                    this.setState({docs: [] })
                    this.loadProdutos()
                  }
                },
              ],
              {cancelable: false},
            );
          }

          }>
            
        <Text style={styles.textDelete}>
          <Icon name="times-circle" size={28} color="red" />
        </Text>
        </TouchableOpacity>
        </View>  


              <View style={styles.inputText}>
               <Text style={styles.textReturn}>
                  <Text style={styles.textDelete}><Icon name="user" size={28} color="black" />  </Text> {item.user}
                </Text>
              </View>

              <View style={styles.viewFoto} >
                <ImageBackground  style = {styles.imgStyle}
                 source={semFoto} style={ { width : 264, height : 244} }>
                    <Image style = {styles.imgStyle}
                               
                   source = {{uri: 'data:imagem/jpg;base64,' + item.imagem}}/>
                </ImageBackground>
              </View>

              <View style={styles.inputText2}>
                <Text style={styles.productTitle}>
                  <Text style={styles.textDelete}><Icon name="shopping-cart" size={18} color="black" />  </Text>{item.produto}
                </Text>
                <Text style={styles.productTitle}>
                  <Text style={styles.textDelete}><Icon name="dollar" size={18} color="black" />  </Text>{item.valor}
                </Text>
                <Text style={styles.productTitle}>
                  <Text style={styles.textDelete}><Icon name="map-marker" size={18} color="black" />  </Text> {item.local}
                </Text>
                <Text style={styles.productTitle}>
                <Text style={styles.textDelete}><Icon name="calendar" size={18} color="black" />  </Text>
                 {Moment(item.data).format('D'+' / '+ 'MMM'+' / '+ 'YYYY')}
                 </Text>
              </View>
      </View>
      
    );
  }else{
      return ( 
      
          <View style={styles.productContainer3}>

                <View style={styles.inputText}>
                <Text style={styles.productTitle}>
                  <Text style={styles.textDelete}><Icon name="user" size={18} color="black" />  </Text> {item.user}
                </Text>
                </View>
                <View style={styles.viewFoto} >
                <ImageBackground  style = {styles.imgStyle}
                 source={semFoto} style={ { width : 264, height : 244} }>
                    <Image style = {styles.imgStyle}
                               
                   source = {{uri: 'data:imagem/jpg;base64,' + item.imagem}}/>
                </ImageBackground>
              </View>

              <View style={styles.inputText2}>
                <Text style={styles.productTitle}>
                  <Text style={styles.textDelete}><Icon name="shopping-cart" size={18} color="black" />  </Text>{item.produto}
                </Text>
                <Text style={styles.productTitle}>
                  <Text style={styles.textDelete}><Icon name="dollar" size={18} color="black" />  </Text>{item.valor}
                </Text>
                <Text style={styles.productTitle}>
                  <Text style={styles.textDelete}><Icon name="map-marker" size={18} color="black" />  </Text> {item.local}
                </Text>
                <Text style={styles.productTitle}>
                <Text style={styles.textDelete}><Icon name="calendar" size={18} color="black" />  </Text>
                 {Moment(item.data).format('D'+' / '+ 'MMM'+' / '+ 'YYYY')}
                 </Text>
              </View>
            </View>
      )}
  };

 

  render() {
    return (
      <ImageBackground source={background} style={ { width : '100%' , height : '100%' } }>
        
       <View style={styles.container}>
       
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}
          extraData = {this.state}
          keyExtractor={item => item._id}
          
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
          
        />
        
        <View style={styles.divBotoes} >
          <TouchableOpacity style={styles.botoesInferiores} onPress={ async ()=>{
          
              this.setState({docs: [] })
              this.loadProdutos()
          }

          }>
          <Text style={styles.textDelete}><Icon name="refresh" size={28} color="white" /></Text>
          <Text style={styles.textDelete}>Atualizar Página</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botoesInferiores} onPress={ ()=>{
           
           this.props.navigation.navigate("CadastroProdutos", {usuario:this.props.navigation.getParam("usuario","user")})

          }}>
          <Text style={styles.textDelete}><Icon name="paper-plane" size={28} color="white" /></Text>
          <Text style={styles.textDelete}>Novo Post</Text>
          </TouchableOpacity>
          
        </View>
      </View>
      
      </ImageBackground>
    );
  }
  
}



