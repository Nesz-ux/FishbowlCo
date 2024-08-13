import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Animated, Dimensions, StyleSheet } from 'react-native';
import { indexStyle } from "../../../assets/styles/indexStyle";

export default function Index() {
    // Estados y animaciones para los botones expandibles
    const [expanded1, setExpanded1] = useState(false);
    const animatedHeight1 = useRef(new Animated.Value(0)).current;

    const [expanded2, setExpanded2] = useState(false);
    const animatedHeight2 = useRef(new Animated.Value(0)).current;

    const [expanded3, setExpanded3] = useState(false);
    const animatedHeight3 = useRef(new Animated.Value(0)).current;

    const [expanded4, setExpanded4] = useState(false);
    const animatedHeight4 = useRef(new Animated.Value(0)).current;

    const [expanded5, setExpanded5] = useState(false);
    const animatedHeight5 = useRef(new Animated.Value(0)).current;

    const bubbles = useRef([...Array(10)].map(() => new Animated.Value(0))).current;
    const screenHeight = Dimensions.get('window').height;

    useEffect(() => {
        bubbles.forEach((bubble, index) => {
            const delay = Math.random() * 3000;
            Animated.loop(
                Animated.sequence([
                    Animated.timing(bubble, {
                        toValue: -screenHeight,
                        duration: 4000 + Math.random() * 3000,
                        useNativeDriver: true,
                        delay,
                    }),
                    Animated.timing(bubble, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        });
    }, [bubbles, screenHeight]);

    const toggleExpansion1 = () => {
        const finalHeight = expanded1 ? 0 : 150;
        Animated.timing(animatedHeight1, {
            toValue: finalHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded1(!expanded1);
    };

    const toggleExpansion2 = () => {
        const finalHeight = expanded2 ? 0 : 150;
        Animated.timing(animatedHeight2, {
            toValue: finalHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded2(!expanded2);
    };

    const toggleExpansion3 = () => {
        const finalHeight = expanded3 ? 0 : 150;
        Animated.timing(animatedHeight3, {
            toValue: finalHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded3(!expanded3);
    };

    const toggleExpansion4 = () => {
        const finalHeight = expanded4 ? 0 : 150;
        Animated.timing(animatedHeight4, {
            toValue: finalHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded4(!expanded4);
    };

    const toggleExpansion5 = () => {
        const finalHeight = expanded5 ? 0 : 150;
        Animated.timing(animatedHeight5, {
            toValue: finalHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded5(!expanded5);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={indexStyle.bubbleContainer}>
                {bubbles.map((bubble, index) => (
                    <Animated.View
                        key={index}
                        style={[
                            indexStyle.bubble,
                            {
                                transform: [{ translateY: bubble }],
                                left: Math.random() * Dimensions.get('window').width,
                                width: 20 + Math.random() * 30,
                                height: 20 + Math.random() * 30,
                            },
                        ]}
                    />
                ))}
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={indexStyle.container}>
                        <Text style={indexStyle.titulo}>Welcome Fishbowl</Text>
                    </View>

                    <View style={indexStyle.container1}>
                        <Text style={indexStyle.texto}>
                            Explora el fascinante mundo de las peceras y descubre todo lo que necesitas saber para crear un ambiente acuático perfecto.
                        </Text>

                        <View style={indexStyle.container}>
                            <TouchableOpacity onPress={toggleExpansion1} style={indexStyle.button}>
                                <Text style={indexStyle.buttonText}>{expanded1 ? '↑' : 'Mantenimiento del agua'}</Text>
                            </TouchableOpacity>
                            <Animated.View style={[indexStyle.expandableContainer, { height: animatedHeight1 }]}>
                                <ScrollView style={{ flex: 1 }}>
                                    <Text style={indexStyle.infoText}>
                                        - Realiza cambios parciales de agua semanales del 10-25% para eliminar desechos y mantener los parámetros del agua óptimos.
                                    </Text>
                                    <Text style={indexStyle.infoText}>
                                        - Usa un kit de prueba para monitorear niveles de amoníaco, nitritos, nitratos y pH regularmente.
                                    </Text>
                                    <Text style={indexStyle.infoText}>
                                        - Lava los medios filtrantes cada 2-4 semanas para mantener una buena circulación y filtración.
                                    </Text>
                                </ScrollView>
                            </Animated.View>
                        </View>

                        <View style={indexStyle.container}>
                            <TouchableOpacity onPress={toggleExpansion2} style={indexStyle.button}>
                                <Text style={indexStyle.buttonText}>{expanded2 ? '↑' : 'Control de temperatura'}</Text>
                            </TouchableOpacity>
                            <Animated.View style={[indexStyle.expandableContainer, { height: animatedHeight2 }]}>
                                <ScrollView style={{ flex: 1 }}>
                                    <Text style={indexStyle.infoText}>
                                        - Mantén una temperatura estable entre 22-28°C dependiendo de las especies de peces.
                                    </Text>
                                    <Text style={indexStyle.infoText}>
                                        - Usa un termómetro de acuario y un calentador con termostato para controlar la temperatura.
                                    </Text>
                                    <Text style={indexStyle.infoText}>
                                        - Evita cambios bruscos de temperatura durante los cambios de agua.
                                    </Text>
                                </ScrollView>
                            </Animated.View>
                        </View>

                        <View style={indexStyle.container}>
                            <TouchableOpacity onPress={toggleExpansion3} style={indexStyle.button}>
                                <Text style={indexStyle.buttonText}>{expanded3 ? '↑' : 'Alimentación de los peces'}</Text>
                            </TouchableOpacity>
                            <Animated.View style={[indexStyle.expandableContainer, { height: animatedHeight3 }]}>
                                <ScrollView style={{ flex: 1 }}>
                                    <Text style={indexStyle.infoText}>
                                        - Alimenta a tus peces una o dos veces al día con pequeñas cantidades de comida que puedan consumir en 2-3 minutos.
                                    </Text>
                                    <Text style={indexStyle.infoText}>
                                        - Varía la dieta de tus peces con alimentos secos, congelados y vivos para proporcionarles todos los nutrientes necesarios.
                                    </Text>
                                    <Text style={indexStyle.infoText}>
                                        - Evita sobrealimentar a los peces, ya que el exceso de comida puede contaminar el agua.
                                    </Text>
                                </ScrollView>
                            </Animated.View>
                        </View>

                        <View style={indexStyle.container}>
                            <TouchableOpacity onPress={toggleExpansion4} style={indexStyle.button}>
                                <Text style={indexStyle.buttonText}>{expanded4 ? '↑' : 'Decoración y plantas'}</Text>
                            </TouchableOpacity>
                            <Animated.View style={[indexStyle.expandableContainer, { height: animatedHeight4 }]}>
                                <ScrollView style={{ flex: 1 }}>
                                    <Text style={indexStyle.infoText}>
                                        - Incluye decoraciones y plantas para crear un ambiente natural y reducir el estrés de los peces.
                                    </Text>
                                    <Text style={indexStyle.infoText}>
                                        - Lava bien las decoraciones nuevas antes de añadirlas al acuario.
                                    </Text>
                                    <Text style={indexStyle.infoText}>
                                        - Poda y remueve plantas muertas o enfermas regularmente.
                                    </Text>
                                </ScrollView>
                            </Animated.View>
                        </View>

                        <View style={indexStyle.container}>
                            <TouchableOpacity onPress={toggleExpansion5} style={indexStyle.button}>
                                <Text style={indexStyle.buttonText}>{expanded5 ? '↑' : 'Cuarentena de peces nuevos'}</Text>
                            </TouchableOpacity>
                            <Animated.View style={[indexStyle.expandableContainer, { height: animatedHeight5 }]}>
                                <ScrollView style={{ flex: 1 }}>
                                    <Text style={indexStyle.infoText}>
                                        - Mantén peces nuevos en cuarentena durante 2-4 semanas antes de añadirlos al acuario principal.
                                    </Text>
                                    <Text style={indexStyle.infoText}>
                                        - Monitorea signos de enfermedad y trata con medicamentos si es necesario.
                                    </Text>
                                    <Text style={indexStyle.infoText}>
                                        - Usa un acuario de cuarentena separado con su propio equipo para evitar contagios.
                                    </Text>
                                </ScrollView>
                            </Animated.View>
                        </View>

                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
}


