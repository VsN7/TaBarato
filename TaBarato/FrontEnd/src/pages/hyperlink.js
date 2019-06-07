import React from "react";
import { WebView } from "react-native";

const Hyperlink = ({ navigation }) => {
  return <WebView source={{ uri: navigation.state.params.hyperlink.url }} />;
};

Hyperlink.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.hyperlink.title
});

export default Hyperlink;
