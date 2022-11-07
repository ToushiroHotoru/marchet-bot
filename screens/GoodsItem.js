import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

export default function Something({ route, navigation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    navigation.setOptions({ title: item.name });
  }, []);

  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: item.img }} style={styles.img} />
      </View>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
      <View style={styles.hr}></View>

      <View style={styles.bottom}>
        <View style={styles.counter}>
          <TouchableOpacity
            onPress={() => {
              if (count <= 0) {
                setCount(0);
              } else {
                setCount(count - 1);
              }
            }}
          >
            <View style={styles.plusAndMinusBtn}>
              <Text>-</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.count}>{count}</Text>
          <TouchableOpacity
            onPress={() => {
              if (count >= 99) {
                setCount(99);
              } else {
                setCount(count + 1);
              }
            }}
          >
            <View style={styles.plusAndMinusBtn}>
              <Text>+</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buyButtonContainer}>
          <View style={styles.buyButton}>
            <Text>Добавить</Text>
          </View>
        </TouchableOpacity>
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
    alignItems: "center",
  },
  img: {
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    height: "60%",
  },
  title: {
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 15,
    fontSize: 25,
  },
  desc: {
    paddingHorizontal: 20,
    paddingTop: 15,
    textAlign: "justify",
  },
  hr: {
    paddingVertical: 10,
    borderBottomColor: "#57606f",
    borderBottomWidth: 1,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  plusAndMinusBtn: {
    paddingHorizontal: 15,
    backgroundColor: "#dfe4ea",
    paddingVertical: 10,
    borderRadius: 10,
  },
  count: {
    paddingHorizontal: 10,
  },
  buyButtonContainer: {
    flex: 1,
    height: "50%",
    justifyContent: "center",
  },
  buyButton: {
    width: "75%",
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7bed9f",
  },
});
