import { Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import Participant from '../../components/Participant';
import { styles } from './styles';

export function Home() {
    const participantes = ['Laís', 'Maria', 'Carla'];

    function handleParticipanteAdd(){
        if(participantes.includes("Laís")){
            return Alert.alert("Participante existe", "Inserir outro participante");
        }
    };

    function handleRemoveParticipant(name: string){
        Alert.alert("Remover", `Tem certeza que quer remover o(a) ${name}`,[
            {
                text: 'Sim',
                onPress: () => Alert.alert("Removido!")
            },
            {
                text: 'Não',
                style: "cancel",
            }
        ]);
        console.log(name)

    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome do evento</Text>
      <View style={styles.form}>
      <TextInput placeholder='Nome do participante' style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleParticipanteAdd}>
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
