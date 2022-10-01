import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
export default function Header() {
  const [state, setState] = React.useState({ inputActivity: "" });
  return (
    <View style={styles.viewStyle}>
      <TextInput
        style={styles.textInputStyle}
        multiline
        numberOfLines={3}
        placeholder="Enter your activity"
        onChangeText={() => {
          console.log("hi");
        }}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
  },
  textInputStyle: {
    borderRadius: 6,
    borderColor: "#A08FAF",
    borderWidth: 5,
    fontSize: 20,
    marginTop: 15,
    marginBottom: 5,
    width: "70%",
    height: "60%",
    textAlign: "center",
    placeholderTextColor: "grey",
    alignSelf: "center",
    textAlignVertical: "top"
        
  },
});
