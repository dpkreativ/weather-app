import { View, Text } from 'react-native';
import React from 'react';
import { Picker } from '@react-native-picker/picker';

export default function UnitsPicker({ tempUnit, setTempUnit }) {
  return (
    <View>
      <Picker selectedValue={tempUnit} onValueChange={(e) => setTempUnit(e)}>
        <Picker.Item label="C&deg;" value="metric" />
        <Picker.Item label="F&deg;" value="imperial" />
      </Picker>
    </View>
  );
}
