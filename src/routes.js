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
    EfetuarLogin: {
      screen: EfetuarLogin,
      navigationOptions: () => defaultStyle("")
    }
  }
)
export default createAppContainer(TabStackNavigator);