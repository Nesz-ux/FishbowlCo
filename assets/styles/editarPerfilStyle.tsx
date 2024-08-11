import { StyleSheet } from "react-native";

export const editarPerfilStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  titulo: {
    color: "#00086a",
    marginTop: 40,
    fontSize: 25,
    textAlign: "center",
    height: 70,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  datosContenedor: {
    flexDirection: "column",
  },
  inputContainer: {
    flexDirection: "row",
    alignContent: "flex-end",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#00086a",
    padding: 10,
    width: 300,
    marginBottom: 30,
    marginLeft: 60,
  },
  input: {
    marginTop: 4,
  },
  icon: {
    marginRight: 10,
  },
  label:{
    fontSize:15,
    marginTop:3,
    fontWeight:"300",
    color:'#00086a',
  },
  btnActualizar: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf:"center",
    borderRadius: 25,
    elevation: 3,
    backgroundColor: "#4246b8",
    paddingVertical: 15,
    width: 300,
    marginTop: 15,
    marginBottom: 80,
  },
  textBtn: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FFF",
  },
  backContainer: {
    flexDirection: "row",
    marginTop: 70,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
});
