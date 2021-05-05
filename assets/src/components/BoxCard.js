import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "./Icon";
// import Constants from "expo-constants";
const { width } = Dimensions.get("screen");
export default function BoxCard({ text, onPress }) {
  // console.log(width);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.icon}>
        <Icon
          icon="heart"
          height={50}
          // backgroundColor="#00ff00"
          // borderRadius={0}
          size={16}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 5,
        }}
      >
        <Text style={styles.text} numberOfLines={2}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: (width - 34) / 2,
    backgroundColor: "rgba(255,255,255,.2)",
    flexDirection: "row",
    marginBottom: 5,
    marginRight: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0fff",
  },
  text: { color: "#fff" },
});
