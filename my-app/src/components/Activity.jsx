import React from "react";
import { FlatList, View, Text, StyleSheet, Alert } from "react-native";
import MyButton from "./MyButton";
import Header from "./Header";
const activitiesArr = [
  { id: 1, activity: "Go For a Walk.", date: "29/9/2022 2:50:30" },
  { id: 2, activity: "Draw.", date: "29/9/2022 3:51:3" },
  { id: 3, activity: "Play Free Online Games.", date: "1/10/2022 1:51:13" },
  { id: 4, activity: "Take an Online Course.", date: "1/10/2022  2:52:3" },
  { id: 5, activity: "Write a short story.", date: "1/10/2022 4:53:23" },
  { id: 6, activity: "Learn a new language.", date: "1/10/2022 5:55:28" },
  { id: 7, activity: "Go For a Run, Go For a Walk.", date: "1/10/2022 6:50:30" },
];
export default function Activity() {
  const [inputActivity, setInputActivity] = React.useState("");
  const [activities, setActivities] = React.useState(activitiesArr);
  const [numOfID, setID] = React.useState(8);
  const [date, setDateTime] = React.useState("");
  const [textLabel, setTextLabel] = React.useState("Enter your activity");
  const enteredActivity = (input) => {
    setInputActivity(input);
    console.log(input);
  };
  const getDate = () => {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    return day + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec;
  };
  const onAddButton = () => {
    const curDate = getDate();
    if (inputActivity.length != 0) {
      const updatedActivities = [
        ...activities,
        { id: numOfID, activity: inputActivity, date: curDate },
      ];
      setID(numOfID + 1);
      setActivities(updatedActivities);

      setDateTime(curDate);
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
        <View style={styles.activityContent}>
          <Text style={styles.textStyle}>{item.activity}</Text>
          <Text style={styles.dateStyle}>{item.date}</Text>
        </View>
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
  activityContent: {
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "red",
    width: "35%",
  },
  dateStyle:{
    fontWeight: "400",
    color: "gray"
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonsStyle: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
