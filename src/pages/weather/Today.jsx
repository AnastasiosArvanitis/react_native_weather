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

    const iconUrl = 'http:' + weatherData.current.condition.icon;

    return (
      <View style={styles.today}>
          <View style={styles.textInputView}>
              <Text style={styles.text}>Please chose a city...</Text>
              <TextInput
                  style={styles.searchInput}
                  onChangeText={text => setInputValue(text)}
                  value={inputValue}
              />
              <Button
                  title={"Search"}
                  onPress={getWeatherOnSearch(inputValue)}  />
          </View>

          <Image
              style={styles.imageW}
              source={{
                  uri: iconUrl,
              }}
          />

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
      backgroundColor: '#87bdf4',
      padding: 30,
    },

    text: {
        color: '#083563',
        fontSize: 20,
    },
    textInputView: {
        marginBottom: 20,
    },
    searchInput: {
        borderColor: '#083563',
        borderRadius: 3,
        borderWidth: 2,
        height: 40,
        paddingLeft: 8,
        marginBottom: 5,
    },
    imageW: {
        width: 100,
        height: 100,
    }
})

export default Today;
