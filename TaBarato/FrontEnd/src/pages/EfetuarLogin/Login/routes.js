import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./home";
import CadastroProdutos from "./CadastroProdutos";



const defaultStyle = title => {
  return {
    title,
    headerStyle: {
      backgroundColor: "#FFF",
    },
    headerTintColor: '#FF6347',
  };
};

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => defaultStyle("Home")
  }
});

const CadastroProdutosStack = createStackNavigator({
  CadastroProdutos: {
    screen: CadastroProdutos,
    navigationOptions: () => defaultStyle("Cadastro de Produtos")
  }
});

const TabStackNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    CadastroProdutos: {
      screen: CadastroProdutosStack,
      navigationOptions: () => ({
        title: "Cadastrar Produto"
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `home${focused ? "" : "-outline"}`;
          // iconName = `ios-home`;
        } else if (routeName === "CadastroProdutos") {
          iconName = `link${focused ? "-off" : ""}`;
        }
        return <Icon name={iconName} size={18} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#FF6347",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabStackNavigator);
