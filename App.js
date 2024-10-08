import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import StartGameVC from "./controllers/StartGameVC";

export default function App() {
  return (
    <LinearGradient colors={["#ddb52f", "#3b021f"]} style={styles.rootView}>
      <StartGameVC />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});
