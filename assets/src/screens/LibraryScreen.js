import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import List from "../components/List";
import Screen from "../components/Screen";
import TopNavigation from "../navigation/TopNavigation";

export default function LibraryScreen({ navigation }) {
  return (
    <Screen>
      <TopNavigation />
    </Screen>
  );
}
