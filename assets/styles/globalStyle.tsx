import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: '#00086a',
    marginTop: 100,
    fontSize: 25,
    textAlign: "center",
    height: 70,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  inputContainer: {
    flexDirection: "row",
    alignContent: "flex-end",
    borderWidth: 1,
    borderColor: "#00086a",
    borderRadius: 25,
    padding: 10,
    width: 300,
    marginBottom: 20
  },
  icon: {
    marginRight: 10,
  },
  textlabel:{
    fontSize:15,
    marginTop:8,
    textTransform: "uppercase",
    fontWeight:"600",
    color:'#00086a'
  }
});
