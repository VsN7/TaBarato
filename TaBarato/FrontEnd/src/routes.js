import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Inicio from "./pages/inicio";
import CadastroUsuario from "./pages/CadastroUsuario";
import EfetuarLogin from  "./pages/EfetuarLogin/Login/routes"
import Camera from "./camera/camera"
import Login from "./pages/EfetuarLogin/Login/login"


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
    Inicio: { screen: Inicio,
      navigationOptions: () => defaultStyle("TaBarato") },
    
    CadastroUsuario: {
      screen: CadastroUsuario,
      navigationOptions: () => defaultStyle("Cadastro de Usuario")
    },
    Login: {
      screen: Login,
      navigationOptions: () => defaultStyle("Efetuar Autenticação")
    },
    EfetuarLogin: {
      screen: EfetuarLogin,
      navigationOptions: () => defaultStyle("")
    },
    Camera: {
      screen: Camera,
      navigationOptions: () => defaultStyle("Tire sua foto")
    }
  }
)
export default createAppContainer(TabStackNavigator);
