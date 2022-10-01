import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import Header from "./Header";
import MyButton from "./MyButton";
import Activity from "./Activity";
export const activitiesArr = [
  { id: "1", activity: "Go For a Walk." },
  { id: "2", activity: "Draw." },
  { id: "3", activity: "Play Free Online Games." },
  { id: "4", activity: "Take an Online Course." },
  { id: "5", activity: "Write a short story." },
  { id: "6", activity: "Learn a new language." },
  { id: "7", activity: "Go For a Run, Go For a Walk." },
];
const HomePage = () => {
  const[activities, setActivities] = React.useState(activities);
  const onAddButton = () => {
    var updatedActivities= [...activitiesArr, {id: "8", activity:"walk"}];
    setActivities(updatedActivities);
    console.log("Hello!");
  };
  return (
    <>
      <ImageBackground
        source={require("../../assets/simple2.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <Header />
        <MyButton buttonTitle="Add" actionOnPress={onAddButton} buttonColor="#D2B48C" />
        <Activity />
      </ImageBackground>
    </>
  );
};

export default HomePage;
