import { StyleSheet } from "react-native";

export const indexStyle = StyleSheet.create({
  //Encabezado
  containerTitulo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecebf5", // Fondo más claro para mayor contraste
    marginBottom: 10,
  },
  titulo: {
    color: "#00086a", // Título azul oscuro
    marginTop: 100,
    marginBottom: 50,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "900",
    textTransform: "uppercase",
  },
  subtitulos: {
    fontSize: 25,
    marginBottom: 10,
    color: "#00086a",
    fontWeight: "900",
    alignSelf: "center",
  },

  infoPrimaria: {
    fontSize: 16, // Texto un poco más grande
    fontWeight: "condensedBold",
    color: "#000", // Texto verde oscuro para mayor legibilidad
    marginTop: 10,
    marginBottom: 20,
    alignSelf: "center",
    textAlign: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0)", // Fondo más claro para mayor contraste
    marginBottom: 5,
  },
  buttonText: {
    color: "#004D40", // Texto blanco para contraste
    fontWeight: "900",
    fontSize: 22,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    padding: 15,
    borderRadius: 25,
    width: 400,
    shadowColor: "#ecebf5",
  },
  contenedorInfo:{
    alignContent:"center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    fontSize: 16,

  },
  textBold:{
    fontSize: 16,
    fontWeight: "800",
    color: "#000", 
    alignSelf: "center",
    textAlign: "center",
  },
  infoSecundaria: {
    fontSize: 16, // Texto un poco más grande
    fontWeight: "condensedBold",
    color: "#000", 
    alignSelf: "auto",
    textAlign: "left",
  },
  expandableContainer: {
    overflow: "hidden",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0)",    
    marginTop: 5,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    height:"100%"
  },


  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 100,
  },
  
  bubbleContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  bubble: {
    position: "absolute",
    bottom: -50,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Burbujas más claras y semitransparentes
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

});
