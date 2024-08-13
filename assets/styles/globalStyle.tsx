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
  },
  TITULO1: {
    fontFamily: 'ConcertOne-Regular',
    fontSize: 40,
    marginTop:50,
    color:"#00086a",
    textAlign:"center"
  },
  textlabel2:{
    fontSize:30,
    marginTop:20,
    marginBottom:20,
    textTransform: "uppercase",
    fontWeight:"600",
    color:'#00086a'
  },
  container2: {
    flex: 1,
    backgroundColor: "#7fffd4",
    borderWidth: 2,           // Ancho del borde
    borderColor: "#00086a",   // Color del borde
    borderRadius: 10,         // Radio de las esquinas del borde (opcional)
    padding: 10,              // Espaciado interno (opcional)
  },
  margen:{
    marginTop:20,
    marginBottom:20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandedContainer: {
    overflow: 'hidden',
    marginTop: 10,
  },
  additionalInfo: {
    fontSize: 16,
    color: '#000',
  },
  
});
