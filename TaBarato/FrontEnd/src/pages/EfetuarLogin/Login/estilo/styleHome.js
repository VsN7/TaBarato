import { StyleSheet } from "react-native";
const styleHome = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      
    },
    viewFoto: {
      
      marginTop: 10,
      marginBottom: 10,
      borderColor: 'rgba(25,25,112,0.8)',
      width: 270,
      height: 250,
      borderWidth: 3,
     
    },

    voltarIcon:{
      top: 10,
      left: 10,
      position:'absolute',
     
    },
    imgStyle:{
      width: 264,
      height: 244,
      resizeMode: "cover",
       
    },
    textReturn:{
      fontSize: 24,
      color: 'black',
    },
    inputText: {
      height: 35,
      width: 270,
      paddingLeft: 10,
      fontSize: 16,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderColor: 'rgba(25,25,112,0.8)',
      borderWidth: 3,
      borderRadius: 25,
      justifyContent: "center",
      
      
    },
    inputText2: {
      height: 120,
      width: 270,
      paddingLeft: 10,
      fontSize: 16,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderColor: 'rgba(25,25,112,0.8)',
      borderWidth: 3,
      borderRadius: 25,
      justifyContent: "center",
      justifyContent: "center",
      
    },
    divBotoes: {
      marginTop: 10,
      flexDirection: "row"
    },
    list: {
      padding: 20
    },
    productContainer: {
      
      
      height: 480,
      width: 310,
      fontSize: 16,
      alignItems: 'center',
   
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderColor: 'rgba(25,25,112,0.8)',
      borderWidth: 3,
      borderRadius: 10,
      marginBottom: 10,
      
    },
    productContainer3: {
      
      
      height: 480,
      width: 310,
      fontSize: 16,
      justifyContent: "center",
      alignItems: 'center',
   
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      borderColor: 'rgba(25,25,112,0.8)',
      borderWidth: 3,
      borderRadius: 10,
      marginBottom: 10,
      
    },
  
    botoesInferiores: {
      
      
      width: 120,
      marginLeft: 32,
      marginRight: 32,
      borderRadius: 20,
      padding: 5,
      marginBottom: 3,
      backgroundColor: 'rgba(25,25,112,0.2)',
      
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
      width: 100,
      left: 138,
      
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
  export default styleHome;
