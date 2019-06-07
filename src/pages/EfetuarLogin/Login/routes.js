import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./home";
import CadastroLinks from "./CadastroProdutos";



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

const CadastroLinksStack = createStackNavigator({
  CadastroLinks: {
    screen: CadastroLinks,
    navigationOptions: () => defaultStyle("Cadastro de Produtos")
  }
});

const TabStackNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    CadastroLinks: {
      screen: CadastroLinksStack,
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
        } else if (routeName === "CadastroLinks") {
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
