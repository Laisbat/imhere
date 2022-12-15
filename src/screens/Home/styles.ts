import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6e5cb',
      marginTop: 50,
      padding: 30,
    },
    text: {
      fontSize: 24,
      color: '#d76483',
    },
    input: {
        flex: 1,
        marginRight: 10,
        padding: 16,
        height:56,
        width: 'auto',
        borderRadius: 5,
        backgroundColor: '#ffc2bb',
        color: '#d76483',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 36,
    },
    button: {
        padding: 16,
        height:56,
        width: 56,
        backgroundColor: '#d76483',
        borderRadius: 50,
    },
    buttonText: {
        fontSize: 16,
        color: '#fdefde',
        textAlign: 'center',
    },
    listEmptyText: {
        fontSize: 16,
        color: '#000',
        alignSelf: 'center',
    }
  });
  