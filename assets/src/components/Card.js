import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Card({
  title,
  subtitle,
  size = 150,
  width = size,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={{
          height: size,
          width: width,
        }}
      >
        <Image
          style={{ height: "100%", width: "100%" }}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWSaLfIiq_i7IVLNKjXizLvcSsrzn5SiumX3nJyAgoWfaZmtn&s",
          }}
        />
      </View>
      {(subtitle || title) && (
        <View style={styles.textContainer}>
          {title && <Text style={styles.text}>{title}</Text>}
          {subtitle && (
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={[styles.text, { color: "#a9a9a9" }]}
            >
              {subtitle}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    padding: 10,
    paddingLeft: 0,
  },
  //   image: ,
  textContainer: {
    // justifyContent: "center",
    paddingVertical: 10,
    // backgroundColor: "red",
    width: 100,
    // padding: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
