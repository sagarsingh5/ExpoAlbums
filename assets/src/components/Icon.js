import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
  height = 50,
  width = height,
  icon,
  size = height - 25,
  color = "#fff",
  backgroundColor = "transparent",
  borderRadius,
  onPress,
  image,
  style,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          height: height,
          width: width,
          borderRadius: borderRadius ? height / 2 : 0,
          backgroundColor: backgroundColor,
        },
        style,
      ]}
    >
      {icon && <MaterialCommunityIcons name={icon} size={size} color={color} />}
      {image && (
        <Image style={{ height: "100%", width: "100%" }} source={image} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
