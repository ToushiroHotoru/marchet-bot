import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

export default function Address({ navigation }) {
  const [address, setAddress] = useState(["Tokyo", "Moscow", "Rome"]);
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log("fetch completed");
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <FlatList
        data={address}
        contentContainerStyle={{ paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.addressBox}>
            <View style={styles.addressIconBox}>
              <Ionicons name="location" size={24} color="black" />
            </View>
            <View style={styles.addressTextBox}>
              <Text style={styles.addressText}>{item}</Text>
            </View>
            <TouchableOpacity
              style={styles.addressEditBox}
              onPress={() => {
                navigation.navigate("AddressForm", {
                  createNew: false,
                });
              }}
            >
              <Ionicons name="pencil" size={19} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
      <ScrollView></ScrollView>

      <View style={styles.hr}></View>
      <View style={styles.orderAcceptBtnBox}>
        <TouchableOpacity
          style={styles.orderAcceptBtn}
          onPress={() => {
            navigation.navigate("AddressForm", {
              createNew: true,
            });
          }}
        >
          <Text style={styles.orderAcceptBtnText}>Добавить адрес</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  addressBox: {
    flex: 1,
    marginTop: 10,
    borderRadius: 15,
    minWidth: "95%",
    padding: 20,
    flexDirection: "row",
    backgroundColor: "#D0D2CF",
    alignItems: "center",
    justifyContent: "center",
  },
  addressText: {
    fontSize: 19,
  },
  addressIconBox: {
    flex: 1,
    alignItems: "center",
  },
  addressTextBox: {
    flex: 1,
    alignItems: "center",
  },
  addressEditBox: {
    flex: 1,
    alignItems: "center",
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
    width: "100%",
    height: 1,
  },
  orderAcceptBtn: {
    minWidth: "95%",
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
