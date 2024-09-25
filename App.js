import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>

    <View style={styles.inputContainer}>
      <TextInput style={styles.textInputView} placeholder='Your course goal'></TextInput>
      <Button title='Add Goal'></Button>
    </View>

    <View>
      <Text>List of Goals</Text>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInputView: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 16,
    padding: 8
  }
});