import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";

export default function List({
  borderRadius,
  icon = "plus-thick",
  sideicon,
  title = "Liked",
  subtitle = "subtitile",
  size = 22,
  iconBackground = "#a9a9a9",
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        borderRadius={borderRadius}
        icon={icon}
        height={70}
        backgroundColor={iconBackground}
        size={size}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.text, { fontWeight: "bold" }]}>{title}</Text>
        <Text style={[styles.text, { fontSize: 14, color: "#a9a9a9" }]}>
          {subtitle}
        </Text>
      </View>
      {sideicon && <Icon icon={sideicon} style={styles.icon} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    // backgroundColor: "red",
    flexDirection: "row",
    // margin: 10,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  // icon: { alignSelf: "flex-end" },
});
