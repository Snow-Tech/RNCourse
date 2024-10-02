import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import {  StyleSheet, View, FlatList } from 'react-native';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
     setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      {text: enteredGoalText, key: Math.random().toString}
    ]);
  }

  return (
    <View style={styles.appContainer}>
    
    <GoalInput onAddGoal={addGoalHandler} />

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

  goalsContainer: {
    flex: 4
  }
});