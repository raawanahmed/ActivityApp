import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./src/components/HomePage";
export default function App() {
  return (
    <View style={{flex: 1}}>
      <HomePage></HomePage>
    </View>
  );
}
