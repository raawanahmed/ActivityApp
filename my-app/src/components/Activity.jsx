import React from "react";
import { FlatList, View, Text, StyleSheet, Alert } from "react-native";
import MyButton from "./MyButton";
import Header from "./Header";

export default function Activity({ activitiesArr }) {
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
      setDateTime(curDate);
      setActivities(updatedActivities);
      console.log("Activity has been added.");
      alert("Activity has been added successfully.");
      setInputActivity("");
    } else {
      alert("Please enter an activity.");
    }
    console.log(activities);
  };
  const onEditButton = (id) => {
    console.log(id);
    setTextLabel("Edit your activity.");
    const curDate = getDate();
    const idx = activities.findIndex((item) => item.id == id);
    setInputActivity(activities[idx].activity);
    if (inputActivity.length != 0) {
      activities[idx].activity = inputActivity;
      activities[idx].date = curDate;
      //setID(activities[idx].id);
      setDateTime(curDate);
      setActivities(activities);
      setInputActivity("");
    } else {
      alert("Please edit your activity.");
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
      <Header onChange={enteredActivity} label={textLabel} activityValue={inputActivity} />
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
    padding: 8,
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
    // borderWidth: 2,
    // borderColor: "red",
    width: "39%",
  },
  dateStyle: {
    fontWeight: "400",
    color: "gray",
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
