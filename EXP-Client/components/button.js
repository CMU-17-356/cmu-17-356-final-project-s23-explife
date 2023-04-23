import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function RoundedButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#D9D9D9'
  },
  buttonText: {
    color: 'black',
    fontWeight: 'normal',
    textTransform: 'capitalize',
    fontSize: 12,
    textAlign: 'center'
  }
})