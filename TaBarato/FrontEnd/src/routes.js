import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Inicio from "./pages/inicio";
import CadastroUsuario from "./pages/CadastroUsuario";
import Camera from "./camera/camera"
import Login from "./pages/EfetuarLogin/Login/login"
import CadastroProdutos from "./pages/EfetuarLogin/Login/CadastroProdutos"
import Home from "./pages/EfetuarLogin/Login/home"
import RotasHomeProduto from "./pages/EfetuarLogin/Login/routes"


const defaultStyle = title => {
  return {
    title,
    headerStyle: {
      backgroundColor: "#FF6347",
    },
    headerTintColor: '#FFF',
  };
};
const TabStackNavigator = createStackNavigator(
  {
    Inicio: { 
      screen: Inicio,
      navigationOptions: () => defaultStyle("TaBarato") 
    },Home: {
      screen: Home,
      navigationOptions: () => defaultStyle("Home")
    },
    CadastroProdutos: {
      screen: CadastroProdutos, 
      navigationOptions: () => defaultStyle("Cadastro de Produtos")
    },
    CadastroUsuario: {
      screen: CadastroUsuario,
      navigationOptions: () => defaultStyle("Cadastro de Usuario")
    },
    Login: {
      screen: Login,
      navigationOptions: () => defaultStyle("Efetuar Autenticação")
    },
    Camera: {
      screen: Camera,
      navigationOptions: () => defaultStyle("Tire sua foto")
    }
  }
)
const i = 0;
export default createAppContainer(TabStackNavigator);