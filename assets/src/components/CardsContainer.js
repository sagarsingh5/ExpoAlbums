import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BoxCard from "./BoxCard";
import Card from "./Card";
import Icon from "./Icon";

const cards = [
  {
    id: 1,
    title: "Hourly Driver",
    // image: require("../assets/hourly.png"),
    subtitle: "kddd djjcn fsfdv dv dv dkjdnc ffffff",
  },
  {
    id: 2,
    title: "Day Basis Driver",
    // image: require("../assets/hourly.png"),
    text: "Atif aslam",
  },
  {
    id: 3,
    title: "Hourly Driver",
    // image: require("../assets/hourly.png"),
  },
  {
    id: 4,
    title: "Day Basis Driver",
    // image: require("../assets/hourly.png"),
  },
  {
    id: 5,
    title: "Hourly Driver",
    // image: require("../assets/hourly.png"),
  },
  {
    id: 6,
    title: "Day Basis Driver",
    // image: require("../assets/hourly.png"),
  },
];
export default function CardsContainer({
  first,
  icon1,
  icon2,
  title,
  size,
  image,
  history,
  setting,
  album,
  onPressBox,
  // horizontal = true,
  // numColumns = 1,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          //   backgroundColor: first ? "red" : "transparent",
          marginBottom: 25,
        },
      ]}
    >
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          {image && <Icon image={image} borderRadius height={50} />}
          <View style={{ marginLeft: image ? 10 : 0 }}>
            {image && (
              <Text
                style={{ color: "#a9a9a9", fontSize: 12, letterSpacing: 2.5 }}
              >
                MORE LIKE
              </Text>
            )}
            <Text style={styles.wish}>{title}</Text>
          </View>
        </View>
        <View style={styles.iconContain}>
          {icon1 && <Icon icon="history" height={50} onPress={history} />}
          {icon2 && <Icon icon="nut" height={50} onPress={setting} />}
        </View>
      </View>
      {first && (
        <FlatList
          data={cards}
          keyExtractor={(data) => data.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <BoxCard text={item.title} onPress={album} />
          )}
        />
      )}

      {!first && (
        <FlatList
          horizontal
          // numColumns={2}
          data={cards}
          keyExtractor={(data) => data.id.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ height: "100%", width: 10 }} />
          )}
          renderItem={({ item }) => (
            <Card
              title={item.text}
              subtitle={item.subtitle}
              size={size}
              width={size}
              onPress={album}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 15 },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
    paddingVertical: 10,
    marginBottom: 10,
  },
  wish: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  iconContain: { flexDirection: "row" },
});
