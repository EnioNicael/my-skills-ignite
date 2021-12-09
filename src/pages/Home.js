// sempre importar o React, senao da erro
import React, { useState } from "react";
// importa componentes do react native
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
} from 'react-native';
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

/**
 * View: container generico como uma <div>
 * Text: para inserit textos
 * StyleSheet: usado estilizar o app
 * TextInput: entrada de texto
 * Platform: podemos customizar de acordo com a plataforma
 * TouchableOpacity: elemento clicavel (usado como botao)
 */


// estrutura basica JSX
export default function Home() {
  // declaracao e inicializacao dos estados
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  // Evento que adiciona novas Skills ao estado mySkills
  function handleAddNewSkill() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Enio</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Text style={[styles.title, {marginVertical: 50 }]}>
        My Skills
      </Text>

      <Button />

      {
        mySkills.map(skill => (
          <SkillCard />
        ))
      }
    </View>
  )
}

// Criando um estilo com StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input:  {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15: 10,
        marginTop: 30,
        borderRadius: 7
    }
});
