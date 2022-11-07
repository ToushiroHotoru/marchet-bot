import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../redux/user";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";

export default function Signin({ navigation }) {
  const [login, setLogin] = useState("");
  const [passwordForm, setPasswordForm] = useState("");
  const dispatch = useDispatch();
  const { name, password } = useSelector((state) => state.user);

  const auth = () => {};

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setLogin}
        value={login}
        placeholder="Логин"
        autofocus={true}
      />

      <TextInput
        style={styles.input}
        onChangeText={setPasswordForm}
        value={passwordForm}
        secureTextEntry={true}
        placeholder="Пароль"
        autofocus={true}
      />
      <TouchableOpacity
        style={styles.signinBtn}
        onPress={() => {
          if (name == login && password == passwordForm) {
            dispatch(signIn(true));
            navigation.navigate("Personal");
          } else {
            Alert.alert(
              "Предупреждение",
              "Пароль или логин были ввыдены не правильно",
              [
                {
                  text: "Повторить",
                  onPress: () => console.log("Btn Pressed"),
                  style: "cancel",
                },
              ]
            );
          }
        }}
      >
        <Text style={styles.btnText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        <Text style={styles.btnText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomWidth: 1,
    width: "60%",
    textAlign: "center",
    marginVertical: 15,
  },
  signinBtn: {
    padding: 15,
    backgroundColor: "#28D501",
    width: "60%",
    alignItems: "center",
    borderRadius: 15,
  },
  signupBtn: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#259abe",
    width: "60%",
    alignItems: "center",
    borderRadius: 15,
  },
  btnText: {
    color: "#fff",
  },
});
