import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/user";

export default function Personal({ navigation }) {
  const [auth, setAuth] = useState(false);
  const { status, name } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const authFunc = () => {
    if (status) {
      dispatch(signIn(false));
    } else {
      navigation.navigate("Signin");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userNameBox}>
        <Text style={styles.userName}>{status ? name : "Пользователь"}</Text>
        <TouchableOpacity
          style={styles.userIcon}
          onPress={() => {
            navigation.navigate("PersonalEdit");
          }}
        >
          <FontAwesome5 name="pen" size={21} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <View style={styles.hr}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyOrders");
          }}
        >
          <View style={styles.box}>
            <View style={styles.subBox}>
              <Ionicons name="fast-food" size={24} color="black" />
              <Text style={styles.text}>Мои заказы</Text>
            </View>
            <View style={styles.arrowBox}>
              <Ionicons name="arrow-forward-circle" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Archive");
          }}
        >
          <View style={styles.box}>
            <View style={styles.subBox}>
              <Ionicons name="archive" size={24} color="black" />
              <Text style={styles.text}>Архив</Text>
            </View>
            <View style={styles.arrowBox}>
              <Ionicons name="arrow-forward-circle" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("StacksAddress");
          }}
        >
          <View style={styles.box}>
            <View style={styles.subBox}>
              <Ionicons name="home-sharp" size={24} color="black" />
              <Text style={styles.text}>Мои адреса</Text>
            </View>
            <View style={styles.arrowBox}>
              <Ionicons name="arrow-forward-circle" size={24} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
      </View>
      <View style={styles.supportBox}>
        <Text style={styles.supportTitle}>Поддержка</Text>
        <View style={styles.supportBtnBox}>
          <TouchableOpacity style={styles.supportChat}>
            <Ionicons name="chatbox" size={24} color="black" />
            <Text>Чат</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.supportCall}>
            <Ionicons name="call" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View> */}
      <TouchableOpacity style={styles.btnOut} onPress={authFunc}>
        <Text style={styles.btnOutText}>
          {status ? "Выйти" : "Авторизация/Регистрация"}
        </Text>
      </TouchableOpacity>
      {/* </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  userIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "39%",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 28,
    paddingLeft: 15,
  },
  userNameBox: {
    paddingTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  menu: {
    paddingTop: 10,
    width: "100%",
  },
  box: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  text: {
    paddingLeft: 10,
    fontSize: 16,
  },
  hr: {
    borderBottomColor: "#dfe4ea",
    borderBottomWidth: 1,
  },
  arrowBox: {
    paddingRight: 10,
  },
  supportBox: {
    borderRadius: 20,
    marginTop: 15,
    backgroundColor: "#f1f2f6",
    alignItems: "center",
    width: "95%",
    padding: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 2.84,
    elevation: 5,
  },
  supportTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },
  supportBtnBox: {
    width: "100%",
    flexDirection: "row",
  },
  supportChat: {
    flex: 4,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#ff6b81",
    borderRadius: 12,
  },

  supportCall: {
    flex: 1,
    marginLeft: 15,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6b81",
    borderRadius: 12,
  },
  btnOut: {
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    width: "95%",
    backgroundColor: "#28D501",
    marginTop: 10,
  },
  btnOutText: {
    color: "#fff",
    fontWeight: "600",
  },
});
