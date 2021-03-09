import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

const Home = ({navigation}) => {
    return (
        <View style={styles.homeLayout}>
            <View style={styles.linksArea}>
                <TouchableOpacity onPress={ () => {
                    navigation.navigate('Geo');
                }}>
                    <Text style={styles.linksText}>
                        Geolocalisation
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.orArea}>
                <Text style={styles.linksText}>
                    or
                </Text>
            </View>
            <View style={styles.linksArea}>
                <TouchableOpacity onPress={ () => {
                    navigation.navigate('Today');
                }}>
                    <Text style={styles.linksText}>
                        Chose a city
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeLayout: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 80,
    },
    linksArea: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 3
    },
    linksText: {
        fontSize: 30,
        color: '#083563',
        fontWeight: 'bold',
    },
    or: {
        fontSize: 25,
        color: '#083563',
        fontWeight: 'bold',
    },
    orArea: {
        marginBottom: 20,
    },
});

export default Home;
