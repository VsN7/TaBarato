import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
  TouchableHighlight
} from "react-native";
import Moment from 'moment';
import api from "../../../services/api"; 

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
    this.loadLinks();
  }


  recuperaUser = () =>{
    const user = this.props.navigation.getParam("usuario","user");
    return user;
  }

  
   loadLinks = async (page = 1) => {
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
    
    this.loadLinks(pageNumber);
  };

  renderItem = ({ item }) => {
    Moment.locale('en');
    return (
      <View style={styles.productContainer}>
       <TouchableOpacity style={styles.buttonExcluir} onPress={ ()=>{

        this.props.navigation.navigate("CadastroProdutos", {usuario:this.recuperaUser()})
        this.loadLinks
       }}
        ><Text style={styles.textDelete}>C</Text></TouchableOpacity>
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
                    this.loadLinks()
                  }
                },
              ],
              {cancelable: false},
            );
          }

          }>
            
          <Text style={styles.textDelete}>X</Text></TouchableOpacity> 
        <Text style={styles.productTitle}>Postado por {item.user}</Text>
        <Text style={styles.productTitle}>{item.produto}</Text>
        <Text style={styles.productDescription}>R$ {item.valor}</Text>
        <Text style={styles.productButtonText}>{item.local}</Text>
        <Text style={styles.productDescription}>Data da publicação: {Moment(item.data).format('D'+' / '+ 'MMM'+' / '+ 'YYYY')}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate("CadastroLinks");
          }}
          underlayColor="white"
        >
          <Text>Cadastrar Links</Text>
        </TouchableHighlight> */}
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}
          extraData = {this.state}
          keyExtractor={item => item._id}
          
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347'
  },
  list: {
    padding: 20
  },
  productContainer: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
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
    backgroundColor: "red",
    marginLeft: "94%"
  },
  textDelete:{
    color: "#fff",
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
