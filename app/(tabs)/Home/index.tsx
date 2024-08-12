import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { indexStyle } from "../../../assets/styles/indexStyle";

export default function index() {
    const [expanded, setExpanded] = useState(false);
    const animatedHeight = useRef(new Animated.Value(0)).current;

    const toggleExpansion = () => {
        const finalHeight = expanded ? 0 : 150;

        Animated.timing(animatedHeight, {
            toValue: finalHeight,
            duration: 300,
            useNativeDriver: false,
        }).start();

        setExpanded(!expanded);
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

                    <View style={indexStyle.container}>
                        <TouchableOpacity onPress={toggleExpansion} style={indexStyle.button}>
                            <Text style={indexStyle.buttonText}>
                                {expanded ? 'Contraer' : 'Expandir'}
                            </Text>
                        </TouchableOpacity>

                        <Animated.View style={[indexStyle.expandableContainer, { height: animatedHeight }]}>
                            <Text style={indexStyle.infoText}>
                                Aquí puedes mostrar la información que desees al expandir el botón.
                            </Text>
                        </Animated.View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
