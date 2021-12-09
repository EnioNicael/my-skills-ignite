import React from "react"

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button() {
  return (
    <TouchableOpacity
      style={styles.button}
      TouchableOpacity={.7}
      // onPress={handleAddNewSkill}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  )
}

// Criando um estilo com StyleSheet
const styles = StyleSheet.create({
  button: {
      backgroundColor: '#a370f7',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20
  },
  buttonText: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold'
  }
});
