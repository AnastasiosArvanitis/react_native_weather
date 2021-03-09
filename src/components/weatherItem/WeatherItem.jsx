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
        marginBottom: 10,
    },
    text: {
        color: '#083563',
        fontSize: 20,
    }
});

export default WeatherItem;
