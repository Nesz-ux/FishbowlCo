import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
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
    fontWeight:"900",
    textTransform:"uppercase"
},
  logo:{
    alignSelf:"center"
  },
  inputContainer: {
    flexDirection: "row",
    alignContent:"flex-end",
    borderWidth: 1,
    borderColor:"#00086a",
    borderRadius:25,
    padding:10,
    width: 300,
    marginBottom: 20
  },
  input: {
    marginTop:4,
  },
  icon: {
    marginRight:10,
  },
  btnSesion: {
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    elevation:3,
    backgroundColor:'#4246b8',
    paddingVertical:15,
    width:300,
    marginTop: 15,  
  },
  btnRegistro: {
    alignItems:'center',
    justifyContent:'center',
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


