import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { activities } from "./HomePage";
import MyButton from "./MyButton";
export default function Activity() {
  const renderItem = ({ item }) => {
    //  console.log(item);
    const onEditButton = () => {};
    const onDeleteButton = () => {};

    return (
      <View style={styles.activityStyle}>
        <Text style={styles.textStyle}>{item.activity}</Text>
        <View style={styles.buttonsStyle}>
          <MyButton
            buttonTitle="Edit"
            buttonColor="#99C68E"
            actionOnPress={onEditButton}
          />
          <MyButton
            buttonTitle="Delete"
            buttonColor="#C24641"
            actionOnPress={onDeleteButton}
          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  activityStyle: {
    padding: 20,
    backgroundColor: "white",
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    borderColor: "#D58A94",
    borderWidth: 5,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonsStyle: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
