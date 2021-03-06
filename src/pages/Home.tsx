// sempre importar o React, senao da erro
import React, { useState, useEffect } from "react";
// importa componentes do react native
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList
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
 * FlatList: para lidar com listas
 * ScrollView: para incluir barra de rolagem
 */


/**
 * criando nosso proprio tipo de dados usando interface
 */
interface SkillData {
  id: string;
  name: string;
}

// estrutura basica JSX
export default function Home() {
  // declaracao e inicializacao dos estados
  const [newSkill, setNewSkill] = useState('');
  // devemos tipar o estado usando <tipo> ou <tipo[]> se for array
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');

  // Evento que adiciona novas Skills ao estado mySkills
  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills((oldState) => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldState) => oldState.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    console.log(currentHour);
    if(currentHour < 12) {
      setGreetings('Good morning!')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings('Good afternoon');
    } else {
      setGreetings('Good night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Enio</Text>

      <Text style={styles.greetings}>
        Bom dia
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        testID="input-skill"
      />

      <Button
        onPress={handleAddNewSkill}
        activeOpacity={0.7}
        title="Add"
      />

      <Text style={[styles.title, {marginVertical: 50 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
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
    },
    greetings: {
      color: '#fff'
    }
});
