import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#7FFFD4",
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
    color: "#7FFFD4",
    fontWeight: "bold"
  }
});

export default styles;
