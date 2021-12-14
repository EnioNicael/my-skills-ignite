import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

/**
 * 
 * @param {skill} prop recebida do componente pai 
 */
export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

// Criando um estilo com StyleSheet
const styles = StyleSheet.create({
  buttonSkill: {
    alignItems: 'center',
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 20,
    marginVertical: 10
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
});
