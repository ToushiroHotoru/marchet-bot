import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";

export default function MyOrders() {
  const [orders, setOrders] = useState([
    {
      id: "7y8fg87g28f",
      goods: [
        { id: "f98h9f9h9", count: 2, name: "Ramen", price: 4300 },
        { id: "jasdfj99999", count: 3, name: "Itoryaki", price: 2800 },
      ],
      total: 7100,
      status: "Ожидается",
    },
    {
      id: "oalvxuie323dji1",
      goods: [
        { id: "kfskkfad1234fg5ej1iupa", count: 8, name: "Sushi", price: 6200 },
        { id: "jqw1epo52nmj423pa", count: 1, name: "Pizza", price: 1000 },
      ],
      total: 7200,
      status: "Доставляется",
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.orderBox}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
          data={orders}
          renderItem={({ item }) => (
            <View style={styles.order}>
              <View style={styles.orderHeader}>
                <View style={styles.orderGoodsItemLeft}>
                  <Text>id: {item.id}</Text>
                </View>
                <View style={styles.orderGoodsItemRight}>
                  <Text
                    style={
                      item.status == "Доставляется"
                        ? styles.finished
                        : styles.pending
                    }
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
              <View style={styles.orderBody}>
                {item.goods.map((item, i) => {
                  return (
                    <View key={i} style={styles.orderGoods}>
                      <View style={styles.orderGoodsItemLeft}>
                        <Text>
                          {item.count} x {item.name}
                        </Text>
                      </View>
                      <View style={styles.orderGoodsItemRight}>
                        <Text>{item.price}</Text>
                      </View>
                    </View>
                  );
                })}
                <View style={styles.orderGoods}>
                  <View style={styles.orderGoodsItemLeft}>
                    <Text>Всего: </Text>
                  </View>
                  <View style={styles.orderGoodsItemRight}>
                    <Text>{item.total}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.hr}></View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  orderBox: {
    width: "100%",
  },

  order: {
    paddingVertical: 15,
  },
  orderHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  id: {
    flex: 1,
  },
  status: {
    flex: 1,
  },
  orderGoods: {
    flexDirection: "row",
  },
  orderGoodsItemLeft: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 30,
  },
  orderGoodsItemRight: {
    flex: 1,
    alignItems: "center",
  },
  orderBottom: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
  },
  reOrderBtn: {
    backgroundColor: "#a4b0be",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
  },

  reOrderBtnText: {
    justifyContent: "center",
  },
  hr: {
    marginTop: 20,
    borderBottomColor: "#dfe4ea",
    borderBottomWidth: 3,
  },
  finished: {
    backgroundColor: "#2ed573",
    padding: 8,
    borderRadius: 12,
  },
  pending: {
    backgroundColor: "#ffa502",
    padding: 8,
    borderRadius: 12,
  },
});
