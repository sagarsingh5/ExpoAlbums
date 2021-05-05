import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Icon from "../components/Icon";
import List from "../components/List";
import Screen from "../components/Screen";

export default function SettingScreen({ navigation: { goBack } }) {
  return (
    <Screen style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Icon icon="arrow-left" style={styles.icon} onPress={() => goBack()} />
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          Settings
        </Text>
      </View>
      <Text style={styles.free}>Free Account</Text>
      <View style={styles.button}>
        <Text style={[styles.free, { color: "#000", marginVertical: 20 }]}>
          Go Premium
        </Text>
      </View>
      <List
        borderRadius
        title="Sagar"
        sideicon="chevron-right"
        icon="alpha-s"
        size={40}
        subtitle="View Profile"
        iconBackground="#F573A1"
      />
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
  free: {
    color: "#fff",
    fontSize: 20,
    alignSelf: "center",
    marginVertical: 25,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fff",
    width: "70%",
    alignSelf: "center",
    borderRadius: 50,
    marginBottom: 20,
  },
});
