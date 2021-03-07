import React, {useEffect, useState} from 'react';
import {StyleSheet,
        View,
        Text,
        Button,
        Alert,
        Image,
        TouchableOpacity,
        TextInput
}
from "react-native";
import axios from "axios";
import WeatherItem from "../../components/weatherItem/WeatherItem";


const Today = () => {

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

    const [inputValue, setInputValue] = useState('');

    const url = 'http://api.weatherapi.com/v1/current.json';
    const aqi = '&aqi=yes';
    const apiKey = '?key=38e76da25ee145cdbf8101233210703';

    const getWeatherOnLoad = () => {
        axios
            .get(url + 'Patras' + apiKey).
        then(res => {
            console.log(`Response: ${res}`);
            setWeatherData(res.data);
            console.log(`Weather: ${weatherData}`);
        })
            .catch(error => {
                console.log(error);
            });
    }

    const getWeatherOnSearch = (cityName) => {
        if (cityName) {
            axios
                .get(url + apiKey + '&q=' + cityName + aqi).
            then(res => {
                setWeatherData(res.data);
                console.log("button pressed");
            })
                .catch(error => {
                    console.log(error);
                });
            console.log(`City name ${cityName}`)
        }

    }

    /*useEffect(()=> {
        getWeatherOnLoad();
        return () => {
            setWeatherData({});
        }
    },[]);*/

    return (
      <View style={styles.today}>
          <View style={styles.textInputView}>
              <TextInput
                style={styles.searchInput}
                onChangeText={text => setInputValue(text)}
                value={inputValue}
              />
              <Button
                  title={"Search"}
                  onPress={getWeatherOnSearch(inputValue)}  />
          </View>

          <WeatherItem title='Name' value={weatherData.location.name} />
          <WeatherItem title='Condition' value={weatherData.current.condition.text}/>
          <WeatherItem title='Region' value={weatherData.location.region}/>
          <WeatherItem title='Country' value={weatherData.location.country}/>
          <WeatherItem title='Localtime' value={weatherData.location.localtime}/>
          <WeatherItem title='Temperature' value={weatherData.current.temp_c}/>
          <WeatherItem title='Feels like' value={weatherData.current.feelslike_c}/>
          <WeatherItem title='Wind' value={weatherData.current.wind_kph}/>

      </View>
    );
}

const styles = StyleSheet.create({
    today: {
      height: '100%',
      width: '100%',
      backgroundColor: '#e8abf8',
      padding: 30,
    },

    text: {
        color: '#350f8e',
        fontSize: 20,
    },
    textInputView: {
        marginBottom: 40,
    },
    searchInput: {
        borderColor: '#0d1c5c',
        borderRadius: 3,
        borderWidth: 2,
        height: 40,
        paddingLeft: 8,
    }
})

export default Today;
