import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useIsFocused } from "@react-navigation/native";

export default function Goods({ route, navigation }) {
  const [data, setData] = useState([]);

  const { item } = route.params;

  const getOneCatergoryGoods = async () => {
    try {
      console.log(item.name);
      const result = await axios.post(
        "https://bot2.workhunt.ru/nodeback/getproducts",
        {
          parameter: item.name,
        }
      );
      console.log(result.data.data);
      setData(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOneCatergoryGoods();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        // style={styles.flatList}
        contentContainerStyle={{ paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
        // numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("GoodsItem", {
                item: item,
              });
            }}
          >
            <View style={styles.block}>
              <View style={styles.imgBlock}>
                <Image source={{ uri: item.img }} style={styles.img} />
              </View>
              <View>
                <Text style={styles.title}>{item.name}</Text>
              </View>
              <View style={styles.priceBlock}>
                <Text style={styles.priceTitle}>{item.price} &#8381;</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
//просто коммент делаю вид что что то пишу, у меня все равно нет задачи и я тут сижу один, но пришел специалист, который меняет освещение, поэтому седлаю вид что что то пишу
//интернета тоже нет, у меня не безлемит, раздовать жирно будет
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f2f6",
    alignItems: "center",
  },
  block: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 15,
    // flex: 1,
    width: 350,
    height: 250,
  },
  imgBlock: {
    height: 150,
  },
  img: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: "100%",
  },
  title: {
    padding: 10,
    fontWeight: "400",
    fontSize: 18,
    textAlign: "center",
  },
  priceBlock: {
    marginTop: 5,
    alignItems: "center",
    width: "100%",
  },
  priceTitle: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 15,
    backgroundColor: "#f1f2f6",
    alignItems: "center",
    width: "90%",
    textAlign: "center",
  },
});
