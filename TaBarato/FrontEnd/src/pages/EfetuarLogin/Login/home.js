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
import background from '../../../background/6.jpg';


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

  recuperaUser = () =>{
    const user = this.props.navigation.getParam("usuario","user");
    return user;
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
    if(this.recuperaUser()==item.user){
    return (
     
      <View style={styles.productContainer}>
       
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
            
        <Text style={styles.textDelete}><Icon name="trash" size={28} color="red" /></Text></TouchableOpacity>
         
        <Text style={styles.productTitle}>
                  <Text style={styles.textDelete}><Icon name="user" size={18} color="black" />  </Text> {item.user}
                </Text>
        <Image 
          style = {styles.imgStyle}        
        source = {{uri: 'data:imagem/jpg;base64,' + item.imagem}}/>
        
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
      
    );
  }else{
      return ( <View style={styles.productContainer}>
                <Text style={styles.productTitle}>
                  <Text style={styles.textDelete}><Icon name="user" size={18} color="black" />  </Text> {item.user}
                </Text>
                <Image 
                  style = {styles.imgStyle}        
                  source = {
                    {uri: 'data:imagem/jpg;base64,' + item.imagem}
                  }/>
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
          <TouchableOpacity style={styles.productContainer2} onPress={ ()=>{

          
          this.setState({docs: [] })
          this.loadProdutos()  

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
      
      </ImageBackground>
    );
  }
  
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },

  imgStyle:{
    width: 280,
    height: 200,
    resizeMode: "cover",
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 5,
  },
  divBotoes: {
    marginTop: 10,
    flexDirection: "row"
  },
  list: {
    padding: 20
  },
  productContainer: {
    padding: 10,
    height: 380,
    width: 310,
    fontSize: 16,
    backgroundColor: "rgba(255, 255, 255,0.8)",
    borderColor: 'rgba(255, 255, 255, 0.7)',
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 25,
    
  },

  productContainer2: {
    
    
    width: 120,
    marginLeft: 28,
    marginRight: 35,
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    borderColor: "white",
    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: { width: 30, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 2
  },

  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },

  buttonExcluir:{
    backgroundColor: "rgba(255, 255, 255,0)",
    marginLeft: "94%"
  },
  textDelete:{
    color: "#fff",
    textAlign: 'center'
  },
  add:{
    color: "#0000CD",
    textAlign: 'center'
  },
  productDescription: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 1
  },
  productButtonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold"
  }
});
