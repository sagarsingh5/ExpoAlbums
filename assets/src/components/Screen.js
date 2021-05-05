import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
// import colors from "../config/colors";

export default function Screen({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    // marginTop: Constants.statusBarHeight,
    // backgroundColor: colors.light,
  },
});
