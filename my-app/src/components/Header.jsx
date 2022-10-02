import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
export default function Header({ onChange, label }) {
  return (
    <View style={styles.viewStyle}>
      <TextInput
        style={styles.textInputStyle}
        multiline
        numberOfLines={3}
        placeholder={label}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {},
  textInputStyle: {
    borderRadius: 6,
    borderColor: "#D58A94",
    borderWidth: 5,
    fontSize: 20,
    marginTop: 15,
    marginBottom: 5,
    width: "70%",
    height: "80%",
    textAlign: "center",
    placeholderTextColor: "grey",
    alignSelf: "center",
    textAlignVertical: "top",
  },
});
