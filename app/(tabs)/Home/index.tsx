import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import { indexStyle } from "../../../assets/styles/indexStyle";

export default function Index() {
    // Estado y animación para el primer botón
    const [expanded1, setExpanded1] = useState(false);
    const animatedHeight1 = useRef(new Animated.Value(0)).current;

    // Estado y animación para el segundo botón
    const [expanded2, setExpanded2] = useState(false);
    const animatedHeight2 = useRef(new Animated.Value(0)).current;

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
        const finalHeight = expanded2 ? 0 : 150;

        Animated.timing(animatedHeight2, {
            toValue: finalHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();

        setExpanded2(!expanded2);
    };

    return (
        <ScrollView>
            <SafeAreaView>
                <View style={indexStyle.container}>
                    <Text style={indexStyle.titulo}>
                        Welcome Fishbowl
                    </Text>
                </View>

                <View style={indexStyle.container1}>
                    <Text style={indexStyle.texto}>
                        Explora el fascinante mundo de las peceras y descubre todo lo que necesitas saber para crear
                        un ambiente acuático perfecto.
                    </Text>

                    {/* Primer botón expandible */}
                    <View style={indexStyle.container}>
                        <TouchableOpacity onPress={toggleExpansion1} style={indexStyle.button}>
                            <Text style={indexStyle.buttonText}>
                                {expanded1 ? '↑' : 'Mantenimiento del agua'}
                            </Text>
                        </TouchableOpacity>

                        <Animated.View style={[indexStyle.expandableContainer, { height: animatedHeight1 }]}>
                            <Text style={indexStyle.infoText}>
                                - Realiza cambios parciales de agua semanales del 10-25% para eliminar desechos y
                                mantener los parámetros del agua óptimos.
                            </Text>

                            <Text style={indexStyle.infoText}>
                                - Usa un kit de prueba para monitorear niveles de amoníaco, nitritos, nitratos y pH
                                regularmente.
                            </Text>

                            <Text style={indexStyle.infoText}>
                                - Lava los medios filtrantes cada 2-4 semanas para mantener una buena circulación y
                                filtración.
                            </Text>
                        </Animated.View>
                    </View>

                    {/* Segundo botón expandible */}
                    <View style={indexStyle.container}>
                        <TouchableOpacity onPress={toggleExpansion2} style={indexStyle.button}>
                            <Text style={indexStyle.buttonText}>
                                {expanded2 ? '↑' : 'Control de temperatura'}
                            </Text>
                        </TouchableOpacity>

                        <Animated.View style={[indexStyle.expandableContainer, { height: animatedHeight2 }]}>
                            <Text style={indexStyle.infoText}>
                                - Mantén una temperatura estable entre 22-28°C dependiendo de las especies de
                                peces.
                            </Text>
                            <Text style={indexStyle.infoText}>
                                - Usa un termómetro de acuario y un calentador con termostato para controlar la
                                temperatura.
                            </Text>
                            <Text style={indexStyle.infoText}>
                                - Evita cambios bruscos de temperatura durante los cambios de agua.
                            </Text>
                        </Animated.View>
                    </View>
                    <View style={indexStyle.container}>
                        <TouchableOpacity onPress={toggleExpansion3} style={indexStyle.button}>
                            <Text style={indexStyle.buttonText}>
                                {expanded2 ? '↑' : 'Alimentacion de los peces'}
                            </Text>
                        </TouchableOpacity>

                        <Animated.View style={[indexStyle.expandableContainer, { height: animatedHeight2 }]}>
                            <Text style={indexStyle.infoText}>
                                - Mantén una temperatura estable entre 22-28°C dependiendo de las especies de
                                peces.
                            </Text>
                            <Text style={indexStyle.infoText}>
                                - Usa un termómetro de acuario y un calentador con termostato para controlar la
                                temperatura.
                            </Text>
                            <Text style={indexStyle.infoText}>
                                - Evita cambios bruscos de temperatura durante los cambios de agua.
                            </Text>
                        </Animated.View>
                    </View>
                    

                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
