import React from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import SearchCards from "../components/SearchCards";

const cards = [
  {
    id: 1,
    title: "Your top genres",
    // image: require("../assets/hourly.png"),
  },
  {
    id: 2,
    title: "Browse all",
    size: 120,

    // image: require("../assets/hourly.png"),
  },
  // {
  //   id: 3,
  //   title: "Made for you",
  //   // image: require("../assets/hourly.png"),
  //   //   image: {
  //   //     uri:
  //   //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWSaLfIiq_i7IVLNKjXizLvcSsrzn5SiumX3nJyAgoWfaZmtn&s",
  //   //   },
  // },
];

export default function SearchScreen({ navigation: { navigate } }) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Search</Text>
      <View style={styles.textInput}>
        <Icon icon="account-search" height={30} color="#a9a9a9" size={28} />
        <TextInput
          placeholder="Artists, songs, or podcasts"
          style={{ flex: 1, paddingLeft: 10 }}
        />
        <Icon icon="microphone" height={30} color="#a9a9a9" size={28} />
      </View>
      {/* <SearchCards /> */}
      <FlatList
        data={cards}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <SearchCards title={item.title} onPress={() => navigate("Album")} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, paddingTop: 50 },
  text: { color: "#fff", fontSize: 30, fontWeight: "bold" },
  textInput: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});
