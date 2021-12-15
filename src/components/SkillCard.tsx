import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';

/**
 * herada os tipos das propriedades de TouchableOpacityProps e adiciona
 * o tipo de uma nova propriedade "skill" para SkillCardProps
 */
interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

/**
 * skill: propriedade recebida do componente
 * {...rest}: todas as propriedades restantes
 */
export function SkillCard({ skill, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      {...rest}
    >
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
