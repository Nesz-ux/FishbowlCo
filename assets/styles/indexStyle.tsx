import { StyleSheet } from "react-native";
export const indexStyle= StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:"#CAEBF2",
      
    },
    container1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight:15,
        marginLeft:15,
        
        
      },
      button: {
        backgroundColor: '#CAEBF2',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    expandableContainer: {
        overflow: 'hidden',
        width: '100%',
        backgroundColor: '#CAEBF2',
        marginTop: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    infoText: {
        fontSize: 10,
        color: '#333',

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
      texto: {
        marginTop:50,
        textAlign:"justify",
        fontSize:15,
        marginBottom:40,
      }
    })