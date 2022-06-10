import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function WeatherInfo({ weather }) {
  const {
    main: { temp },
  } = weather;

  return (
    <View style={styles.weatherView}>
      <Text>{temp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherView: {
    alignItems: 'center',
  },
});
