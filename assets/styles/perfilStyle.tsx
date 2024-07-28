import { StyleSheet } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export const perfilStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  titulo: {
    color: '#00086a',
    marginTop: 100,
    fontSize: 30,
    textAlign: "center",
    height: 70,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  subtitulo:{
    color: '#00086a',
    marginLeft:60,
    fontSize:25,
    marginBottom: 30
  },
  contenido:{
    alignContent: "flex-end",
  },
  datos:{
    flexDirection: "column"
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
    marginLeft:60
  },
  icon: {
    marginRight: 10,
    marginBottom:5
  },
  textlabel:{
    fontSize:15,
    marginTop:3,
    fontWeight:"600",
    color:'#00086a',
  },
  label:{
    fontSize:15,
    marginTop:3,
    fontWeight:"300",
    color:'#00086a',
  },
  btnEditar: {
    alignItems:'center',
    alignSelf:"center",
    justifyContent:'center',
    borderRadius:25,
    elevation:3,
    backgroundColor:'#4246b8',
    paddingVertical:15,
    width:300,
    marginTop: 15,  
  },
  btnCerrar: {
    alignItems:'center',
    justifyContent:'center',
    alignSelf: "center",
    borderRadius:25,
    elevation:3,
    backgroundColor:'#4246b8',
    paddingVertical:15,
    width:300,
    marginTop: 15,
    marginBottom:80
  },
  textBtn:{
    fontSize: 20,
    fontWeight:'500',
    color:'#FFF',
  },

  
});
