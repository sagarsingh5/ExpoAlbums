import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import LibraryScreen from "../screens/LibraryScreen";
import PremiumScreen from "../screens/PremiumScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import StackNavigation from "./StackNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import AlbumScreen from "../screens/AlbumScreen";
import MusicScreen from "../screens/MusicScreen";
import PlayBox from "../components/PlayBox";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          // tabStyle: { backgroundColor: "#282828" },
          // showLabel: false,
          activeTintColor: "#fff",
          inactiveTintColor: "#636363",
          keyboardHidesTabBar: true,
          style: {
            borderTopWidth: 0,
            backgroundColor: "#282828",
            height: 50,
            paddingVertical: 5,
            // position: "absolute",
            // bottom: 0,
          },
        }}
      >
        <Tab.Screen
          name="Stack"
          component={StackNavigation}
          options={({ route }) => ({
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={35} color={color} />
            ),
          })}
        />
        <Tab.Screen
          name="Search"
          component={SearchStackNavigation}
          options={({ route }) => ({
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="search-web"
                size={35}
                color={color}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Library"
          component={LibraryStackNavigation}
          options={({ route }) => ({
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="library-shelves"
                size={35}
                color={color}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Premium"
          component={PremiumScreen}
          options={({ route }) => ({
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="spotify" size={35} color={color} />
            ),
          })}
        />
      </Tab.Navigator>
      <PlayBox />
    </>
  );
};

const Stack = createStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Tabs" component={TabNavigation} />
      <Stack.Screen name="Music" component={MusicScreen} />
    </Stack.Navigator>
  );
};

const SearchStackNavigation = () => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Album" component={AlbumScreen} />
    </Stack.Navigator>
  );
};
const LibraryStackNavigation = () => {
  // const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Library" component={LibraryScreen} />
      <Stack.Screen name="Album" component={AlbumScreen} />
    </Stack.Navigator>
  );
};
export default AppStackNavigation;
