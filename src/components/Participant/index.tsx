import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Participant ={
    name: string;
    onRemove: (name: string) => void;
}

export default function Participant({name, onRemove}: Participant) {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
        </View>
    );
};