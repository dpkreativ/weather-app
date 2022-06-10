import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function WeatherInfo({ weather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = weather;

  const { icon, description, main } = details;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.weatherView}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text>{temp}</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherView: {
    alignItems: 'center',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: 'capitalize',
  },
});
