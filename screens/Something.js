import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function Something() {
  return (
    <View style={styles.container}>
      <Text>Menu item #2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  h1: {
    padding: 20,
  },
  h1Text: {
    fontSize: 28,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    width: "90%",
    minWidth: 360,
  },
  notActiveButton: { backgroundColor: "#DDDDDD" },
  activeButton: { backgroundColor: "#8e44ad" },
  menu: {
    alignItems: "center",
  },
});
