import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

function MyButton({buttonTitle, buttonColor, buttonType}) {
  return (
    <TouchableOpacity>
      <Text> This is Button</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textAlign: "center",
  padding: 12,
  borderColor: "white",
  borderRadius: 10,
  borderWidth: 2,
  margin: 5,
  backgroundColor: "#4E9258",
});
export default MyButton;
