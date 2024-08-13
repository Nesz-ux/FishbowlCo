import { StyleSheet } from "react-native";

export const indexStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E0F7FA", // Fondo más claro para mayor contraste
    },
    container1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
        marginLeft: 15,
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
    },
    buttonText: {
        color: '#FFF', // Texto blanco para contraste
        fontWeight: 'bold',
        fontSize: 16,
    },
    expandableContainer: {
        overflow: 'hidden',
        width: '100%',
        backgroundColor: '#B3E5FC', // Fondo suave en los contenedores expandibles
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    infoText: {
        fontSize: 14, // Texto un poco más grande
        color: '#004D40', // Texto verde oscuro para mayor legibilidad
    },
    titulo: {
        color: '#01579B', // Título azul oscuro
        marginTop: 100,
        fontSize: 28,
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
    containerB: {
        flex: 1,
        backgroundColor: '#0288D1', // Fondo azul vibrante
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
    contentContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#004D40',
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
        color: '#004D40',
    },
});
