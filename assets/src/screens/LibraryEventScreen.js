import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import List from "../components/List";
import Screen from "../components/Screen";

const cards = [
  {
    id: 1,
    title: "Liked",
    // image: require("../assets/hourly.png"),
    icon: "heart",
    icon2: true,
    first: true,
    iconBackground: "#694CE6",
  },
  {
    id: 2,
    title: "Create playlist",
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
export default function LibraryEventScreen({
  i = 3,
  subtitle,
  title,
  button,
  onPress,
}) {
  const filter = cards.filter((item) => {
    if (item.id < i) {
      return item;
    }
  });
  //   console.log(filter);
  if (i == 0)
    return (
      <Screen>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            alignSelf: "center",
          }}
        >
          {title && <Text style={styles.free}>{title}</Text>}
          {subtitle && (
            <Text style={[styles.free, { color: "#7F7F7F", fontSize: 15 }]}>
              {subtitle}
            </Text>
          )}
          {button && (
            <View style={styles.button}>
              <Text
                style={[
                  styles.free,
                  { color: "#000", marginVertical: 20, fontWeight: "normal" },
                ]}
              >
                {button}
              </Text>
            </View>
          )}
        </View>
      </Screen>
    );
  return (
    <Screen style={styles.container}>
      <FlatList
        data={filter}
        keyExtractor={(data) => data.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ height: 10, width: "100%" }} />
        )}
        renderItem={({ item }) => (
          <List
            title={item.title}
            icon={item.icon}
            iconBackground={item.iconBackground}
            onPress={onPress}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
  free: {
    color: "#fff",
    fontSize: 25,
    alignSelf: "center",
    marginVertical: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fff",
    width: "70%",
    alignSelf: "center",
    borderRadius: 50,
    // marginBottom: 20,
    marginTop: 30,
  },
});
