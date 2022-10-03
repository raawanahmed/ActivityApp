import React from "react";
import { ImageBackground} from "react-native";
import Activity from "./Activity";
const activities= [
  { id: 1, activity: "Go For a Walk.", date: "29/9/2022 2:50:30" },
  { id: 2, activity: "Draw.", date: "29/9/2022 3:51:3" },
  { id: 3, activity: "Play Free Online Games.", date: "1/10/2022 1:51:13" },
  { id: 4, activity: "Take an Online Course.", date: "1/10/2022  2:52:3" },
  { id: 5, activity: "Write a short story.", date: "1/10/2022 4:53:23" },
  { id: 6, activity: "Learn a new language.", date: "1/10/2022 5:55:28" },
  { id: 7, activity: "Go For a Run, Go For a Walk.", date: "1/10/2022 6:50:30" },
];
const HomePage = () => {
  return (
    <>
      <ImageBackground
        source={require("../../assets/simple2.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <Activity activitiesArr={activities}/>
      </ImageBackground>
    </>
  );
};

export default HomePage;
