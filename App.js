import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
// import { store, persistor } from "./assets/src/redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { navigationRef } from "./assets/src/navigation/RootNavigation";
import AppStackNavigation from "./assets/src/navigation/TabNavigation";

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer ref={navigationRef}>
      <AppStackNavigation />
    </NavigationContainer>
    //   </PersistGate>
    // </Provider>
    // <MusicScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
