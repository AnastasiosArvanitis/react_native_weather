import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const Geo = () => {
    return (
        <View style={styles.geoLayout}>
            <Text>GEO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    geoLayout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
});

export default Geo;
