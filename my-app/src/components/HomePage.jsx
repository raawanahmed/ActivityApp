import React from "react";
import { ImageBackground } from "react-native";
import Header from "./Header";

const HomePage = () => {
  return (
    <>
      <ImageBackground source={require("../../assets/b.jpg")} style={{flex: 1}}  resizeMode="cover" >
        <Header></Header>
      </ImageBackground>
    </>
  );
};
export default HomePage;