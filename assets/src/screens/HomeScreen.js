import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import Screen from "../components/Screen";
import CardsContainer from "../components/CardsContainer";

// import  from 'expo';
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

export default function HomeScreen({ navigation: { navigate } }) {
  return (
    <Screen style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={cards}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <CardsContainer
            first={item.first}
            icon1={item.icon1}
            icon2={item.icon2}
            title={item.title}
            size={item.size}
            image={item.image}
            history={() => navigate("Recent")}
            setting={() => navigate("Setting")}
            album={() => navigate("Album")}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // backgroundColor: "#000",
  //   // paddingHorizontal: 15,
  // },
});
