import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export const Fab = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.fab, style]} onPress={onPress}>
      <Text style={styles.fabText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  fabText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Fab;
