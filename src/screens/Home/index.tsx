import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import Participant from '../../components/Participant';
import { styles } from './styles';

export function Home() {
    const [participantes, setParticipantes] = useState<string[]>([]);
    const [participanteName, setParticipanteName] = useState<string>("");

    function handleParticipanteAdd(){
        
        if(participantes.includes(participanteName)){
            return Alert.alert("Participante existe", "Inserir outro participante");
        }
        setParticipantes(oldstate => [...oldstate, participanteName]);
        setParticipanteName("");
    };

    function handleRemoveParticipant(name: string){
        Alert.alert("Remover", `Tem certeza que quer remover o(a) ${name}`,[
            {
                text: 'Sim',
                onPress: () => setParticipantes(oldstate => oldstate.filter(p => p !== name))
            },
            {
                text: 'Não',
                style: "cancel",
            }
        ]);
        console.log(name)

    };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome do evento</Text>
      <View style={styles.form}>
      <TextInput 
        placeholder='Nome do participante' 
        style={styles.input}
        onChangeText={setParticipanteName}
        value={participanteName}
        />
      <TouchableOpacity
        style={styles.button} 
        onPress={handleParticipanteAdd}
        disabled={participanteName.length < 3}
        >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>
      <FlatList 
        data={participantes}
        keyExtractor={item => item}
        renderItem={({ item }) => (
            <Participant key={item} name={item} onRemove={() => handleRemoveParticipant(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>Ninguém está no evento ainda!</Text>
        )}
      />
    </View>
  );
}
