import Home from "./src/screens/Home";

import { Provider } from "react-redux";

import { store } from "./src/features/store/store";

import {
  useFonts,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
