import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import Header from "./Header";
import MyButton from "./MyButton";
import Activity from "./Activity";

const HomePage = () => {
  return (
    <>
      <ImageBackground
        source={require("../../assets/simple2.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <Header />
        <Activity />
      </ImageBackground>
    </>
  );
};

export default HomePage;
