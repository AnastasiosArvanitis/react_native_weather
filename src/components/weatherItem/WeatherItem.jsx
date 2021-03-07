import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WeatherItem = ({title, value}) => {
    return (
        <>
            <View style={styles.item}>
                <Text style={styles.text}>{title}: {value}</Text>
            </View>
        </>
        );
}

const styles= StyleSheet.create({
    item: {
        marginBottom: 20,
    },
    text: {
        color: '#350f8e',
        fontSize: 20,
    }
});

export default WeatherItem;
