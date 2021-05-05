import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlayBox from "../components/PlayBox";
import Screen from "../components/Screen";
import SliderComponent from "../components/SliderComponent";

export default function PremiumScreen() {
  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Go Premium</Text>
      {/* <SliderComponent /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 50,
  },
});
