import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen from "../components/Screen";
import LibraryEventScreen from "../screens/LibraryEventScreen";
import { createStackNavigator } from "@react-navigation/stack";
import AlbumScreen from "../screens/AlbumScreen";

function MyTabBar({
  state,
  descriptors,
  navigation,
  position,
  fontSize,
  bottom,
}) {
  return (
    <View style={{ flexDirection: "row", paddingTop: 20 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        // modify inputRange for custom behavior
        // const inputRange = state.routes.map((_, i) => i);
        // const opacity = Animated.interpolate(position, {
        //   inputRange,
        //   outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        // });
        // console.log(isFocused);
        return (
          // <View style={{ width: 100, height: 50, backgroundColor: "yellow" }}>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ marginLeft: 15 }}
            key={index}
          >
            <Text
              style={[
                styles.text,
                {
                  color: isFocused ? "#fff" : "#707070",
                  fontSize: fontSize,
                  borderBottomColor: bottom
                    ? isFocused
                      ? "green"
                      : "transparent"
                    : "transparent",
                },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
          // </View>
        );
      })}
    </View>
  );
}

const TopNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    // <NavigationContainer>
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} fontSize={35} />}>
      <Tab.Screen name="Music" component={MusicTopNavigation} />
      <Tab.Screen name="Podcasts" component={PodcastTopNavigation} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};
// export const TopNavigation = TopNavigation( );
// const [onPress, setOnPress] = useState(initialState);
const MusicTopNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Screen>
      <Tab.Navigator
        removeClippedSubviews={true}
        tabBar={(props) => <MyTabBar {...props} fontSize={20} bottom />}
      >
        <Tab.Screen name="Playlists">
          {() => <LibraryEventScreen i={3} />}
        </Tab.Screen>
        <Tab.Screen name="Artists">
          {() => <LibraryEventScreen i={4} />}
        </Tab.Screen>
        <Tab.Screen name="Albums">
          {() => (
            <LibraryEventScreen
              i={0}
              title="Tap on icon to download and listen online"
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </Screen>
    // </NavigationContainer>
  );
};
const PodcastTopNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Screen>
      <Tab.Navigator
        tabBar={(props) => <MyTabBar {...props} fontSize={20} bottom />}
      >
        <Tab.Screen name="Episodes">
          {() => (
            <LibraryEventScreen
              i={0}
              title="Looking for shows to listen?"
              button="browse"
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Downloads">
          {() => (
            <LibraryEventScreen
              i={0}
              title="No Downloads yet"
              subtitle="Tap on download on an episode to listen without a connection"
              button="Browse"
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Shows">
          {() => (
            <LibraryEventScreen
              i={0}
              title="Looking for shows to listen"
              button="Browse"
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </Screen>
    // </NavigationContainer>
  );
};
// const Stack = createStackNavigator();
// const StackNavigation = () => {
//   return (
//     <Stack.Navigator headerMode={false}>
//       <Stack.Screen name="Top" component={TopNavigation} />
//       <Stack.Screen name="Album" component={AlbumScreen} />
//     </Stack.Navigator>
//   );
// };
export default TopNavigation;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
    marginRight: 10,
    alignSelf: "flex-end",
    fontWeight: "bold",
    paddingVertical: 8,
    borderBottomWidth: 2,
    // borderBottomColor: "green",
    // alignSelf: "center",
  },
});
