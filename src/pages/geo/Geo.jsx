import React, {useEffect, useState} from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
/* @hide */
import Constants from 'expo-constants';
/* @end */
import * as Location from 'expo-location';
import axios from "axios";

const Geo = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weatherData, setWeatherData] = useState({
        location: {
            name: '',
            region: '',
            country: '',
            localtime: ''
        },
        current: {
            last_updated: '',
            temp_c: 0,
            wind_kph: 0,
            feelslike_c: 0,
            condition: {
                text: '',
                icon: '',
                code: 0
            }
        }
    });

    let lat = '';
    let lon = '';
    let text = 'Waiting...';
    const url = 'http://api.weatherapi.com/v1/current.json';
    const aqi = '&aqi=yes';
    const apiKey = '?key=38e76da25ee145cdbf8101233210703';

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            lat = location.coords.latitude;
            lon = location.coords.longitude;
            console.log(`lat: ${lat}, lon: ${lon}`)
            getWeatherWithCoords(lat, lon);
        })();
    }, []);

    const getWeatherWithCoords = (latit, long) => {
        if (lat && lon) {
            axios
                .get(url + apiKey + '&q=' + latit + ',' + long + aqi).then(res => {
                setWeatherData(res.data);
                console.log("location found");
            })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    if (errorMsg) {
        text = errorMsg;
    }

    return (
        <View style={styles.geoLayout}>
            {
                (errorMsg) ? (<Text>{text}</Text>)
                    : (<Text>{weatherData.location.name}</Text>)
            }

        </View>
    );
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
