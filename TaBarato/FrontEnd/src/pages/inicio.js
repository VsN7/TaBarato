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

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>

        {<TouchableOpacity
          style={styles.navegavores}
          onPress={() => {
            this.props.navigation.navigate("CadastroUsuario");
          }}
        >
          <Text style={styles.textNavegadores}>CADASTRAR</Text>
        </TouchableOpacity> 
        }
        
        <TouchableOpacity
        style={styles.navegavores}
        onPress={() => {
          this.props.navigation.navigate("Login");
        }}
      >
        <Text style={styles.textNavegadores} >LOGIN</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FF6347'
  },

  navegavores: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 70,
    paddingTop:20,
    paddingBottom: 20,
    borderRadius: 10,
    borderColor: '#000'
  },

  textNavegadores: {

    textAlign: 'center',
    color: '#FF6347',
    fontSize: 20

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
