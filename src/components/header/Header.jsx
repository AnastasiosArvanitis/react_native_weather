import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
    return (
        <View style={styles.box}>
            <Text style={styles.title}>
                Weather App
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 120,
        backgroundColor: '#083563',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    title: {
        color: '#eeeded',
        fontSize: 40,

    }
});

export default Header;
