import { StyleSheet, TextInput, View, Button} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState(''); 

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>

        <TextInput 
        style={styles.textInputView} 
        placeholder='Your course goal' 
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        />
  
        <Button title='Add Goal'
        onPress={addGoalHandler}>
        </Button>
      </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
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
    }
  });