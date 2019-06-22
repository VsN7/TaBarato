import { StyleSheet } from "react-native";

const styles2 = StyleSheet.create({
  backgroundContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
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
  icone:{
    
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    paddingTop: 20,
  },
  inputConteiner:{
    marginTop:30,
  },
  botaumSalvar:{
    marginTop:30,
  },
  inputText: {
    height: 50,
    width: 280,
    fontSize: 16,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderColor: 'rgba(255, 255, 255, 0.7)',
    borderWidth: 3,
    borderRadius: 25,
    marginHorizontal: 25,
    paddingLeft: 45,
  },
  inputIcon:{
    position:'absolute',
    top: 10,
    left: 37,
  },
  inputIcon2:{
    position:'absolute',
    top: 10,
    right: 37,
  },
  voltarIcon:{
    top: 10,
    left: 10,
    position:'absolute',
   
  },

  productButton: {
    height: 42,
    borderRadius: 5,
    backgroundColor: "#fff",
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
    color: "#FF6347",
    fontWeight: "bold"
  }
});

export default styles2;
