import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Catalog({ navigation }) {
  // const isFocused = useIsFocused();
  // const { name } = route.params;
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    try {
      console.log("start");
      const result = await axios.get(
        "https://bot2.workhunt.ru/nodeback/getcategory"
      );
      console.log("ready");
      console.log(result.data.data);
      setCategories(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("test");
    getCategory();
    console.log("zero");
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {categories.length > 0 ? (
          categories.map((item, i) => {
            return (
              <TouchableOpacity
                key={item.name}
                onPress={() =>
                  navigation.navigate("Goods", {
                    item: item,
                  })
                }
              >
                <View style={styles.button}>
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <ActivityIndicator
            style={styles.scrollLoader}
            size="large"
            color="#00ff00"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginTop: 20,
    alignItems: "center",
  },
  scrollLoader: {
    paddingTop: "60%",
  },
});
