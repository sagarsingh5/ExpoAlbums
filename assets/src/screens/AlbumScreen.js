import React from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import Icon from "../components/Icon";
import List from "../components/List";
import Screen from "../components/Screen";
import navigationRef from "../navigation/RootNavigation";

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
  {
    id: 7,
    title: "Recommended Stations",
    // image: require("../assets/hourly.png"),
  },
];

export default function AlbumScreen({ navigation: { navigate, goBack } }) {
  return (
    <Screen style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Icon icon="arrow-left" onPress={() => goBack()} />
        <View style={{ flexDirection: "row" }}>
          <Icon icon="heart-outline" />
          <Icon icon="dots-vertical" />
        </View>
      </View>
      <View style={styles.image}>
        <Icon
          height={150}
          image={{
            uri:
              "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2017/10/ranbir-kapoor-in-and-as-rockstar-1-1509441108.jpg",
          }}
        />
        <Icon
          icon="play"
          height={70}
          borderRadius
          size={22}
          backgroundColor="#20B955"
          style={styles.icon}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={cards}
          keyExtractor={(data) => data.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          renderItem={({ item }) => (
            <List
              sideicon="dots-vertical"
              // onPress={() => navigationRef.navigate("Music")}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  icon: {
    // backgroundColor: "red",
    position: "absolute",
    bottom: -35,
  },
  header: {
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    paddingHorizontal: 10,
    flex: 1,
    paddingTop: 50,
  },
});
