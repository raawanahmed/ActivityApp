import React from "react";
import { FlatList, View, Text, StyleSheet, Alert } from "react-native";
import MyButton from "./MyButton";
import Header from "./Header";
const activitiesArr = [
  { id: 1, activity: "Go For a Walk." },
  { id: 2, activity: "Draw." },
  { id: 3, activity: "Play Free Online Games." },
  { id: 4, activity: "Take an Online Course." },
  { id: 5, activity: "Write a short story." },
  { id: 6, activity: "Learn a new language." },
  { id: 7, activity: "Go For a Run, Go For a Walk." },
];
export default function Activity() {
  const [inputActivity, setInputActivity] = React.useState("");
  const [activities, setActivities] = React.useState(activitiesArr);
  const [numOfID, setID] = React.useState(8);
  const [textLabel, setTextLabel] = React.useState("Enter your activity");
  const enteredActivity = (input) => {
    setInputActivity(input);
    console.log(input);
  };
  const onAddButton = () => {
    if (inputActivity.length != 0) {
      const updatedActivities = [
        ...activities,
        { id: numOfID, activity: inputActivity },
      ];
      setID(numOfID + 1);
      setActivities(updatedActivities);

      console.log("Activity has been added.");
      alert("Activity has been added successfully.");
    } else {
      alert("Please enter an activity.");
    }
    console.log(activities);
  };
  const onEditButton = (id) => {
    console.log(id);
    setTextLabel("Edit your activity.");
    if (inputActivity.length != 0) {
      const idx = activities.findIndex((item) => item.id == id);
      activities[idx].activity = inputActivity;
      setActivities(activities);
      setID(numOfID + 1);
    }
    console.log(activities);
    //setTextLabel("Enter your activity.");
  };
  const onDeleteButton = (id) => {
    // Alert.alert("Are you sure you want to delete this activity?",
    // [
    //   {
    //     text: "Cancel",
    //     onPress: () => console.log("Cancel Pressed"),
    //     style: "cancel",
    //   },
    //   {
    //     text: "Ok",
    //     onPress: () => {
    //       const afterDelete = activities.filter((item) => item.id !== id);
    //       setActivities(afterDelete);
    //       console.log("OK Pressed");
    //     },
    //   },
    // ]);
    alert("Are you sure you want to delete this activity?");
    const afterDelete = activities.filter((item) => item.id !== id);
    setActivities(afterDelete);
    console.log(activities);
  };
  const renderItem = ({ item }) => {
    //  console.log(item);

    return (
      <View style={styles.activityStyle}>
        <Text style={styles.textStyle}>{item.activity}</Text>
        <View style={styles.buttonsStyle}>
          <MyButton
            buttonTitle="Edit"
            buttonColor="#99C68E"
            actionOnPress={() => {
              onEditButton(item.id);
            }}
          />
          <MyButton
            buttonTitle="Delete"
            buttonColor="#C24641"
            actionOnPress={() => {
              onDeleteButton(item.id);
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <Header onChange={enteredActivity} label={textLabel} />
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
