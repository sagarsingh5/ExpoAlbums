import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
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
