import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

function MyButton({ buttonTitle, buttonColor, buttonType }) {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          console.log("Hello!");
        }}
      >
        <Text style={styles.textStyle}> {buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    textAlign: "center",
    padding: 10,
    borderColor: "#D2B48C",
    borderRadius: 10,
    borderWidth: 3,
    margin: 5,
    backgroundColor: "#D2B48C",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  viewStyle: {
    alignItems: "center"
  },
});
export default MyButton;
