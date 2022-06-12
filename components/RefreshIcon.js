import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils';

export default function RefreshIcon({ triggerRefresh }) {
  return (
    <View style={styles.refreshIcon}>
      <Ionicons
        onPress={triggerRefresh}
        name="refresh"
        size={24}
        color={colors.PRIMARY_COLOR}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  refreshIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    paddingTop: 20,
  },
});
