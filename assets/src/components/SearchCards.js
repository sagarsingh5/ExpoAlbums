import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import navigation from "../navigation/RootNavigation";

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
  //   {
  //     id: 5,
  //     title: "Try something else",
  //     // image: require("../assets/hourly.png"),
  //   },
  //   {
  //     id: 6,
  //     title: "Recommended Stations",
  //     // image: require("../assets/hourly.png"),
  //   },
];

export default function SearchCards({ title, onPress }) {
  // console.log(180 / Dimensions.get("screen").width);
  return (
    <View style={styles.container}>
      <Text style={styles.wish}>{title}</Text>
      <FlatList
        data={cards}
        // ItemSeparatorComponent={() => (
        //   // <View style={{ height: 5, width: "100%" }} />
        // )}
        // columnWrapperStyle={() => (
        //   <View style={{ height: "100%", width: 10 }} />
        // )}
        // style={{ justifyContent: "space-between" }}
        // contentContainerStyle={{ paddingHorizontal: 10 }}
        numColumns={2}
        keyExtractor={(data) => data.id.toString()}
        // getItemLayout={()=>}
        renderItem={({ item }) => (
          <Card
            width={Dimensions.get("screen").width / 2.181}
            onPress={onPress}
            size={100}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#0fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  wish: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
