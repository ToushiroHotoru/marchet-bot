import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";

export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Имя"
        autofocus={true}
      />
      <TextInput
        style={styles.input}
        onChangeText={setSurname}
        value={surname}
        placeholder="Фамилия"
        autofocus={true}
      />
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="+7 900 00 00 00"
        autofocus={true}
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Пароль"
        autofocus={true}
      />
      <TouchableOpacity style={styles.signinBtn}>
        <Text style={styles.btnText}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => {
          navigation.navigate("Signin");
        }}
      >
        <Text style={styles.btnText}>Войти</Text>
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
