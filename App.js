import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [tempUnit, setTempUnit] = useState('metric');

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMessage('Access to location is needed to run the app');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const weatherUrl = `${BASE_WEATHER_URL}?lat=${latitude}&lon=${longitude}&units=${tempUnit}&appid=${WEATHER_API_KEY}`;

      const response = await fetch(weatherUrl);
      const result = await response.json();

      response.ok ? setCurrentWeather(result) : setErrorMessage(result.message);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  return (
    <View style={styles.container}>
      <Text>{currentWeather ? currentWeather.main.temp : errorMessage}</Text>
      <Text>Hello Divi</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
