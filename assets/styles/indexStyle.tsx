import { StyleSheet } from "react-native";

export const indexStyle = StyleSheet.create({
    
    containerB: {
        flex: 1,
        backgroundColor: '#0288D1', // Fondo azul vibrante
    },
    contentContainer: {
        padding: 20,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E0F7FA", // Fondo más claro para mayor contraste
        marginBottom:10,
    },
    container1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
        marginLeft: 15,
        marginBottom:200,

    },
    container2: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E0F7FA", // Fondo más claro para mayor contraste
        marginBottom:20,
        marginTop:10,
    },
    
    button: {
        backgroundColor: '#0288D1', // Color azul vibrante
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // Sombra para Android
        marginBottom: 10, // Espacio entre el botón y el contenido expandible
        marginTop:40,
    },
    buttonText: {
        color: '#FFF', // Texto blanco para contraste
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom:10,
        marginTop:10,
    },
    expandableContainer: {
        overflow: 'hidden',
        width: '100%',
        backgroundColor: '#E0F7FA', // Fondo suave en los contenedores expandibles
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom:20,
    },
    infoText: {
        fontSize: 15, // Texto un poco más grande
        color: '#004D40', // Texto verde oscuro para mayor legibilidad
        marginTop:10,
        marginBottom:5
    },
    infoText2: {
        fontSize: 15, // Texto un poco más grande
        fontWeight: "condensedBold",
        color: '#004D40', // Texto verde oscuro para mayor legibilidad
        marginTop:10,
        marginBottom:20
    },
    infoText3: {
        fontSize: 15, // Texto un poco más grande
        fontWeight: "condensedBold",
        color: '#004D40', // Texto verde oscuro para mayor legibilidad
        marginTop:10,
        marginBottom:20
    },
    titulo: {
        color: '#01579B', // Título azul oscuro
        marginTop: 50,
        marginBottom: 50,
        fontSize: 35,
        textAlign: "center",
        fontWeight: "900",
        textTransform: "uppercase",
        
    },
    texto: {
        marginTop: 50,
        textAlign: "justify",
        fontSize: 16,
        marginBottom: 40,
        color: '#004D40', // Color verde oscuro
    },
    
    bubbleContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
    bubble: {
        position: 'absolute',
        bottom: -50,
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Burbujas más claras y semitransparentes
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#004D40',
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
        color: '#004D40',
    },
    text2: {
        fontSize: 20,
        marginBottom: 20,
        color: '#004D40',
        fontWeight:"bold",
        fontFamily:""
    },
});
