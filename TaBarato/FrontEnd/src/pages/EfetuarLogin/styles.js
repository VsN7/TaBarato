import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#FF6347",
    flex: 1,
    padding: 20,
    paddingTop: 70
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
    backgroundColor: "#7fffd4",
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
  },
  leitorDigital: {
    height: 160,
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 70,
    marginLeft:90,
    paddingLeft: 15
  }
});

export default styles;
