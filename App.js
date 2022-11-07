import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tabs from "./routes/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
        <StatusBar
          style="auto"
          options={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
          }}
        />
      </NavigationContainer>
    </Provider>
  );
}
