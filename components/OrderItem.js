import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { calc, minus } from "../redux/basket";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";

export default function OrderItem(props) {
  const [price, setPrice] = useState(0);
  const [basket, setBasket] = useState({
    total: "9999",
    goods: [
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
    ],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props.item.id);
  }, [price]);

  return (
    <View style={styles.order}>
      <View style={styles.imgBox}>
        <Image source={props.item.img} style={styles.img} />
      </View>
      <View style={styles.nameAndCounter}>
        <View style={styles.nameBox}>
          <Text>{props.item.name}</Text>
        </View>
        <View style={styles.counterBox}>
          <View style={styles.container}>
            <Counter
              id={props.item.id}
              func={(count) => {
                setPrice(count * props.item.price);
                dispatch(calc(count * props.item.price));
              }}
              reduxFuncMinus={(count) => {
                console.log(price);
                dispatch(minus(props.item.price));
                setPrice(count * props.item.price);
              }}
              reduxFuncPlus={(count) => {
                console.log(price);
                dispatch(calc(props.item.price));
                setPrice(count * props.item.price);
              }}
              removeItem={(id) => {
                props.removeItem(id);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.priceBox}>
        <Text style={styles.price}>{price} &#8381;</Text>
      </View>
      <View style={styles.hr}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 20,
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
    paddingVertical: 8,
    borderRadius: 10,
  },
  count: {
    paddingHorizontal: 10,
  },
  img: {
    // flex: 1,
    width: 70,
    height: 70,
  },
  order: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  imgBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
  },
  nameAndCounter: {
    flex: 1,
  },
  nameBox: {
    flex: 1,
    alignItems: "center",
    // borderWidth: 1,
  },
  counterBox: {
    flex: 1,
    justifyContent: "center",
    // borderWidth: 1,
  },
  priceBox: {
    flex: 1,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    fontSize: 22,
    fontWeight: "400",
  },
  hr: {
    paddingVertical: 10,
    borderBottomColor: "#57606f",
    borderBottomWidth: 1,
  },
});
