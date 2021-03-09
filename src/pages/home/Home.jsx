import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

const Home = ({navigation}) => {
    return (
        <View style={styles.homeLayout}>
            <TouchableOpacity onPress={ () => {
                navigation.navigate('Geo');
            }}>
                <View style={styles.linksArea}>
                    <Text style={styles.linksText}>
                        Geolocation
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={styles.orArea}>
                <Text style={styles.linksText}>
                    or
                </Text>
            </View>
            <TouchableOpacity onPress={ () => {
                navigation.navigate('Today');
            }}>
                <View style={styles.linksArea}>
                    <Text style={styles.linksText}>
                        Chose a city
                    </Text>
                </View>
            </TouchableOpacity>
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
        borderRadius: 7,
        width: 250,
        alignItems: 'center',
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
