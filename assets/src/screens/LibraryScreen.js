import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import List from "../components/List";
import Screen from "../components/Screen";
import TopNavigation from "../navigation/TopNavigation";

const cards = [
  {
    id: 1,
    title: "Good afternoon",
    // image: require("../assets/hourly.png"),
    icon1: true,
    icon2: true,
    first: true,
  },
  {
    id: 2,
    title: "Recently played",
    size: 120,

    // image: require("../assets/hourly.png"),
  },
  {
    id: 3,
    title: "Made for you",
    // image: require("../assets/hourly.png"),
    image: {
      uri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWSaLfIiq_i7IVLNKjXizLvcSsrzn5SiumX3nJyAgoWfaZmtn&s",
    },
  },
  {
    id: 4,
    title: "Popular playlist",
    // image: require("../assets/hourly.png"),
  },
  {
    id: 5,
    title: "Try something else",
    // image: require("../assets/hourly.png"),
  },
  {
    id: 6,
    title: "Recommended Stations",
    // image: require("../assets/hourly.png"),
  },
];

export default function LibraryScreen({ navigation }) {
  return (
    <Screen>
      <TopNavigation />
    </Screen>
  );
}
