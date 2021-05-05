import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "./Icon";

export default function Controller({
  onNext,
  onBack,
  playing,
  setPlaying,
  onPress,
}) {
  return (
    <View style={styles.controller}>
      <Icon icon="shuffle-variant" />
      <Icon icon="skip-previous" size={45} onPress={onBack} />
      <Icon
        backgroundColor="#fff"
        color="#000"
        borderRadius
        height={80}
        size={45}
        icon={playing ? "pause" : "play"}
        onPress={onPress}
      />
      <Icon icon="skip-next" size={45} onPress={onNext} />
      <Icon icon="repeat" />
    </View>
  );
}

const styles = StyleSheet.create({
  controller: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
