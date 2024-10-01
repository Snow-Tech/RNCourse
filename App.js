import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import { 
  StyleSheet, 
  View, 
  Button, 
  TextInput,
  FlatList  
} from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
     setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
     setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString}
    ]);
  }

  return (
    <View style={styles.appContainer}>

    <View style={styles.inputContainer}>

      <TextInput 
      style={styles.textInputView} 
      placeholder='Your course goal' 
      onChangeText={goalInputHandler}>
      </TextInput>

      <Button title='Add Goal'
      onPress={addGoalHandler}>
      </Button>
    </View>
  
    <FlatList 
    data={courseGoals} 
    renderItem={(itemData) => {
        return <GoalItem text={itemData.item.text} />;
    }} 
    style={styles.goalsContainer} />

    </View> 
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 16
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccccc',
    paddingBottom: 16,
    marginBottom: 24
  },

  textInputView: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 16,
    padding: 8
  },

  goalsContainer: {
    flex: 4
  }
});