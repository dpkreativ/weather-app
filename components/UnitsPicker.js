import { View, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { Picker } from '@react-native-picker/picker';

export default function UnitsPicker({ tempUnit, setTempUnit }) {
  return (
    <View style={styles.unitSystem}>
      <Picker
        selectedValue={tempUnit}
        onValueChange={(e) => setTempUnit(e)}
        mode="dropdown"
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item label="C&deg;" value="metric" />
        <Picker.Item label="F&deg;" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitSystem: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 20,
      },
    }),
    left: 20,
    height: 50,
    width: 100,
  },
});
