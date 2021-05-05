import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "../components/Icon";
import List from "../components/List";
import Screen from "../components/Screen";

export default function RecentScreen({ navigation: { goBack } }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Icon icon="arrow-left" style={styles.icon} onPress={() => goBack()} />
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          Settings
        </Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 50,
            marginBottom: 20,
          }}
        >
          Fri,23 Apr 2021
        </Text>
        <List
          title="Liked Songs"
          subtitle="Playlist"
          icon="heart"
          iconBackground="#5F38EC"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#282828",
    height: 70,
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    left: 0,
  },
});
