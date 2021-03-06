import React from "react";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store";
import { useFonts } from "expo-font";
import Root from "./src/index";

export default function App() {
  const [loaded] = useFonts({
    Staatliches: require("./assets/fonts/Staatliches-Regular.ttf"),
    SansPro: require("./assets/fonts/SourceSansPro-Regular.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
