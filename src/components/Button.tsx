import React from "react"

import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';

// type ButtonProps = TouchableOpacityProps;

// herda propriedades de TouchableOpacityProps e cria sua propria propriedade
interface ButtonProps extends TouchableOpacityProps {
  title: string
}

/**
 * 
 * title: nova propriedade criada
 * {...rest} passa todas as propriedades restantes
 */
export function Button({title, ...rest} : ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
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

