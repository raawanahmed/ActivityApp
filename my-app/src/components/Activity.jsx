import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import MyButton from "./MyButton";
const activitiesArr = [
  { id: "1", activity: "Go For a Walk." },
  { id: "2", activity: "Draw." },
  { id: "3", activity: "Play Free Online Games." },
  { id: "4", activity: "Take an Online Course." },
  { id: "5", activity: "Write a short story." },
  { id: "6", activity: "Learn a new language." },
  { id: "7", activity: "Go For a Run, Go For a Walk." },
];
export default function Activity() {
  const [activities, setActivities] = React.useState(activitiesArr);
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
  const onAddButton = () => {
    var updatedActivities = [...activitiesArr, { id: "8", activity: "walk" }];
    setActivities(updatedActivities);
    console.log("Hello!");
    alert("Activity has been added successfully.");
  };
  return (
    <View>
      <MyButton
        buttonTitle="Add"
        actionOnPress={onAddButton}
        buttonColor="#D2B48C"
      />
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
    padding: 10,
    backgroundColor: "white",
    marginVertical: 6,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    borderColor: "#D58A94",
    borderWidth: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
  },
  buttonsStyle: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
