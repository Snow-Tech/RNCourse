import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />

        <TextInput
          style={styles.textInputView}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button 
            title="Add Goal" 
            onPress={addGoalHandler}
            color="#ADEBAD"
             />
          </View>
          <View style={styles.button}>
            <Button 
            title="Cancel" 
            onPress={props.dismissModal}
            color="#142966"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#85A3FF",
  },

  textInputView: {
    borderWidth: 1,
    borderColor: "#EBFOFFF",
    backgroundColor: "#EBFOFFF",
    width: "100%",
    padding: 8,
    color: "#0A1433",
    borderRadius: 6
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  button: {
    width: "30%",
    marginHorizontal: 8,
  },

  image: {
    width: 100,
    height: 100,
    margin: 16,
  },
});
