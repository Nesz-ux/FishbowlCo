import { StyleSheet } from "react-native";

export const peceraStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titulo: {
    color: "#00086a",
    fontSize: 30,
    textAlign: "center",
    height: 70,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  titlecontainer: {
    marginTop: 100,
    flexDirection: "row",
  },
  buttonContainer: {
    alignSelf: "center",
  },
  button: {
    alignItems:'center',
    justifyContent:'center',
    alignSelf: "center",
    borderRadius:25,
    elevation:3,
    backgroundColor:'#4246b8',
    paddingVertical:15,
    width:300,
    marginTop: 25,
    marginBottom:80
  },
  textButton: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FFF",
  },
  image: {
    marginTop:30,
    alignSelf:"center",
    width: 110,
    height: 110,
  },

  //Botones
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "42%",
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    margin:10
  },
  cardText: {
    color: "#00086a",
    fontWeight: "bold",
    textAlign: "center",
    marginTop:30
  },
});
