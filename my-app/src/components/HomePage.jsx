import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import Header from "./Header";
import MyButton from "./MyButton";
import Activity from "./Activity";
export const activities = [
  { id: "1", activity: "Go For a Walk" },
  { id: "2", activity: "Go For a Run" },
];
const HomePage = () => {
  const x = () => {
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
        <MyButton buttonTitle="Add" actionOnPress={x} buttonColor="#D2B48C" />
        <Activity/>
      </ImageBackground>
    </>
  );
};

export default HomePage;
