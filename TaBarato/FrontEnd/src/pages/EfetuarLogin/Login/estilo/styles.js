import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#FF6347",
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    paddingTop: 70
  },
  form2: {
    backgroundColor: "#FF6347",
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
    paddingTop: 50
  },

  divBotoes: {
    marginTop: 10,
    flexDirection: "row"
  },

  textDelete:{
    color: "#fff",
    textAlign: 'center'
  },
  imagem: {
    flex: 1,
    padding: 100,
    width: 310,
     height: 200,
    margin:10,
    backgroundColor: "black"

  },

  productContainer2: {
    
    
    width: 120,
    marginLeft: 7,
    marginRight: 40,
    borderRadius: 20,
    padding: 10,
    marginTop: 28,
    
    borderColor: "white",
    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: { width: 30, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 2
  },

  inputText: {
    height: 42,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 30,
    paddingLeft: 15
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

export default styles;
