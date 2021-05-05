import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

export default function SliderComponent({
  totalTime = "55:5",
  currentTime = "5555",
  value = 0,
}) {
  // const [value, setValue] = useState(0);
  return (
    <View style={styles.barContainer}>
      <Slider
        style={{ width: "100%", height: 15 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#373A3D"
        thumbTintColor="#fff"
        value={value}
        // onValueChange={(value) => setValue({ value })}
        // thumbStyle={{ height: 15, width: 15 }}
        // thumbTouchSize={{ width: 40, height: 40 }}
        // step={1}
      />
      <View style={styles.time}>
        <Text style={{ color: "#fff" }}>{currentTime}</Text>
        <Text style={{ color: "#fff" }}>{totalTime}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //   container: { backgroundColor: "red" },
  barContainer: {
    // height: 1,
    width: "100%",
    // backgroundColor: "red",
    marginVertical: 15,
    // marginHorizontal: 10,
    padding: 15,
  },
  // bar: {
  //   width: "100%",
  //   height: 4,
  //   backgroundColor: "rgb(54,58,61)",
  //   borderRadius: 2,
  // },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
    // color: "#fff",
  },
});
