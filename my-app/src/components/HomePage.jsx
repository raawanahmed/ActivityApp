import React from "react";
import { ImageBackground} from "react-native";
import Activity from "./Activity";

const HomePage = () => {
  return (
    <>
      <ImageBackground
        source={require("../../assets/simple2.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <Activity />
      </ImageBackground>
    </>
  );
};

export default HomePage;
