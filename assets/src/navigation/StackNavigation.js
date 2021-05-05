import React from "react";
import { Easing, StyleSheet, Text, View } from "react-native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import RecentScreen from "../screens/RecentScreen";
import SettingScreen from "../screens/SettingScreen";
import AlbumScreen from "../screens/AlbumScreen";
// import MusicScreen from "../screens/MusicScreen";
import PlayBox from "../components/PlayBox";

// const config = {
//   animation: "spring",
//   config: {
//     stiffness: 1000,
//     damping: 50,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };
// const config = {
//   animation: "spring",
//   config: {
//     duration: "50",
//     easing: Easing.elastic(4),
//   },
// };

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      headerMode={false}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // transitionSpec: {
        //   open: config,
        //   close: config,
        // },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Recent" component={RecentScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Album" component={AlbumScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
