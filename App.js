import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import TestNavigationContainer from "./TestNavigationContainer";

export default function App() {
  return <TestNavigationContainer></TestNavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
