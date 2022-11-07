import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "../components/OrderItem";

export default function Basket() {
  const [basket, setBasket] = useState([
    {
      id: "123",
      name: "Vopper",
      count: 1,
      price: 269,
      img: {
        uri: "https://basilico.dn.ua/upload/iblock/41d/voper.png",
      },
    },
    {
      id: "124",
      name: "Zipper",
      count: 1,
      price: 399,
      img: {
        uri: "https://kartinkin.net/uploads/posts/2021-07/1626894781_50-kartinkin-com-p-burger-kafe-yeda-krasivo-foto-57.jpg",
      },
    },
  ]);

  const dispatch = useDispatch();
  const { total } = useSelector((state) => state.basket);

  const createTitle = (data) => {
    if (data.length === 1) {
      return `${data.length} блюдо на `;
    } else if (data.length > 1 && data.length < 5) {
      return `${data.length} блюда на `;
    } else if (data.length > 4) {
      return `${data.length} блюд  на `;
    }
  };

  const removeItem = (id) => {
    setBasket((prevBasket) => {
      return prevBasket.filter((item) => {
        console.log(item.id, id);
        return item.id != id;
      });
    });
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        {createTitle(basket)}
        {total}&#8381;
      </Text>
      <View>
        <View style={styles.hr}></View>
        <FlatList
          data={basket}
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <>
              <OrderItem
                item={item}
                removeItem={(id) => {
                  removeItem(id);
                }}
              />
              <View style={styles.hr}></View>
            </>
          )}
        />
      </View>
      <ScrollView></ScrollView>
      <View style={styles.hr}></View>
      <View style={styles.orderAcceptBtnBox}>
        <TouchableOpacity style={styles.orderAcceptBtn}>
          <Text style={styles.orderAcceptBtnText}>Оформить заказ</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 28,
    padding: 20,
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
    width: "100%",
    height: 1,
  },
  orderAcceptBtn: {
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#28D501",
    alignItems: "center",
    borderRadius: 15,
  },
  orderAcceptBtnBox: {
    paddingVertical: 20,
  },
  orderAcceptBtnText: {
    color: "white",
    fontWeight: "bold",
  },
});
