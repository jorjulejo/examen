import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone1415ProMax1 from "./screens/IPhone1415ProMax1";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <IPhone1415ProMax1  />

  );
};

export default App;
