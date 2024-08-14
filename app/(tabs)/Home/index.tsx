import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { indexStyle } from "../../../assets/styles/indexStyle";

export default function Index() {
    // Estado para controlar la expansión general
    const [showButtons, setShowButtons] = useState(false);
    const [showButtons2, setShowButtons2] = useState(false);
    
    // Estados y animaciones para los botones expandibles individuales
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

    const [expanded6, setExpanded6] = useState(false);
    const animatedHeight6 = useRef(new Animated.Value(0)).current;

    const [expanded7, setExpanded7] = useState(false);
    const animatedHeight7 = useRef(new Animated.Value(0)).current;

    const bubbles = useRef([...Array(10)].map(() => new Animated.Value(0))).current;
    const screenHeight = Dimensions.get('window').height;

    useEffect(() => {
        bubbles.forEach((bubble) => {
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
        const finalHeight = expanded1 ? 0 : 300;
        Animated.timing(animatedHeight1, {
            toValue: finalHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded1(!expanded1);
    };

    const toggleExpansion2 = () => {
        const finalHeight = expanded2 ? 0 : 250;
        Animated.timing(animatedHeight2, {
            toValue: finalHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded2(!expanded2);
    };

    const toggleExpansion3 = () => {
        const finalHeight = expanded3 ? 0 : 300;
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

    const toggleExpansion6 = () => {
        const finalHeight = expanded6 ? 0 : 300;
        Animated.timing(animatedHeight6, {
            toValue: finalHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded6(!expanded6);
    };

    const toggleExpansion7 = () => {
        const finalHeight = expanded7 ? 0 : 250;
        Animated.timing(animatedHeight7, {
            toValue: finalHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded7(!expanded7);
    };

    const handleToggleButtons = () => {
        setShowButtons(!showButtons);
    };
    const handleToggleButtons2 = () => {
        setShowButtons2(!showButtons2);
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

            <ScrollView>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={indexStyle.container}>
                        <Text style={indexStyle.titulo}>Welcome Fishbowl</Text>
                    </View>
                    
                    <View style={indexStyle.container1}>
                        <ScrollView>
                            <View>                           
                                <TouchableOpacity onPress={handleToggleButtons}>
                                    <Text style={indexStyle.text2}>
                                        Guia para principiantes
                                    </Text>
                                </TouchableOpacity>
                                <Text style={indexStyle.infoText3}>
                                    Explora el fascinante mundo de las peceras y descubre todo lo que necesitas saber para crear un ambiente acuático perfecto.
                                </Text>
                            </View>

                            {showButtons && (
                                <>
                                    <View style={indexStyle.container}>
                                        <TouchableOpacity onPress={toggleExpansion1} style={indexStyle.button}>
                                            <Text style={indexStyle.buttonText}>{expanded1 ? 'Mantenimiento del agua' : 'Mantenimiento del agua'}</Text>
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
                                            <Text style={indexStyle.buttonText}>{expanded2 ? 'Control de temperatura' : 'Control de temperatura'}</Text>
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
                                            <Text style={indexStyle.buttonText}>{expanded3 ? 'Alimentación de los peces' : 'Alimentación de los peces'}</Text>
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
                                            <Text style={indexStyle.buttonText}>{expanded4 ? 'Decoración y plantas' : 'Decoración y plantas'}</Text>
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
                                            <Text style={indexStyle.buttonText}>{expanded5 ? 'Cuarentena de peces nuevos' : 'Cuarentena de peces nuevos'}</Text>
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
                                </>
                            )}

                            <View>                           
                                <TouchableOpacity onPress={handleToggleButtons2}>
                                    <Text style={indexStyle.text2}>
                                        La pecera perfecta
                                    </Text>
                                    <Text style={indexStyle.infoText3}>
                                        Al seleccionar un acuario, hay varios factores importantes a tener en cuenta para asegurar el bienestar de tus peces y plantas.
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {showButtons2 && (
                                <>
                                    <View style={indexStyle.container}>
                                        <TouchableOpacity onPress={toggleExpansion6} style={indexStyle.button}>
                                            <Text style={indexStyle.buttonText}>{expanded6 ? 'Tamaño y forma del acuario' : 'Tamaño y forma del acuario'}</Text>
                                        </TouchableOpacity>
                                        <Animated.View style={[indexStyle.expandableContainer, { height: animatedHeight6 }]}>
                                            <ScrollView style={{ flex: 1 }}>
                                                <Text style={indexStyle.infoText}>
                                                    - Elige un acuario que se ajuste al espacio disponible y a la cantidad de peces que planeas tener.
                                                </Text>
                                                <Text style={indexStyle.infoText}>
                                                    - Los acuarios rectangulares son más fáciles de mantener y ofrecen más espacio para nadar.
                                                </Text>
                                                <Text style={indexStyle.infoText}>
                                                    - Considera acuarios más grandes si planeas mantener peces grandes o en grandes cantidades.
                                                </Text>
                                            </ScrollView>
                                        </Animated.View>
                                    </View>

                                    <View style={indexStyle.container}>
                                        <TouchableOpacity onPress={toggleExpansion7} style={indexStyle.button}>
                                            <Text style={indexStyle.buttonText}>{expanded7 ? 'Material del acuario' : 'Material del acuario'}</Text>
                                        </TouchableOpacity>
                                        <Animated.View style={[indexStyle.expandableContainer, { height: animatedHeight7 }]}>
                                            <ScrollView style={{ flex: 1 }}>
                                                <Text style={indexStyle.infoText}>
                                                    - Los acuarios de vidrio son más resistentes a los arañazos y ofrecen una visión más clara.
                                                </Text>
                                                <Text style={indexStyle.infoText}>
                                                    - Los acuarios de acrílico son más ligeros y menos propensos a romperse, pero pueden rayarse más fácilmente.
                                                </Text>
                                                <Text style={indexStyle.infoText}>
                                                    - Considera tus necesidades y presupuesto al elegir el material adecuado.
                                                </Text>
                                            </ScrollView>
                                        </Animated.View>
                                    </View>
                                </>
                            )}

                        </ScrollView>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
}
