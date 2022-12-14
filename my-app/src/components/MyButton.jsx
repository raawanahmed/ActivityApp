import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

function MyButton({ buttonTitle, buttonColor, actionOnPress}) {
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        style={[styles.buttonStyle, {backgroundColor: buttonColor}]}
        onPress={actionOnPress}
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
    borderRadius: 10,
    width: 110,
    marginHorizontal: 5,
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
