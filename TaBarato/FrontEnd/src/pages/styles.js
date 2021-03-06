import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
 

  viewLogo:{
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    justifyContent: 'center',
    
    
    borderRadius: 150,
    padding: 17,
    height: 280,
    width: 280,
    shadowColor: "#000",
    shadowOffset: { width: 30, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 2

  },
  botaum: {
    backgroundColor: "#4B0082",
    marginTop: 30,
    justifyContent: 'center',
    borderRadius: 25,
    height: 50,
    width: 280,
   
  },

  textBotaum: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    
    fontSize: 20

  },
  textoLogo: {

    textAlign: 'center',
    color: '#FFA500',
    fontWeight: "bold",
    fontSize: 30,
    fontWeight: '500',
    marginTop: 10,
    
    

  },
  Logo: {
    textAlign: 'center',
    justifyContent: 'center',
  flex: 1,
  width: 230,
  height: 230,
  resizeMode: 'contain',
  
  },
  
});


export default styles;
