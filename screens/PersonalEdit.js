import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useIsFocused } from "@react-navigation/native";

export default function PersonalEdit({ navigation }) {
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
      <TouchableOpacity
        style={styles.changeBtn}
        onPress={() => {
          navigation.navigate("Personal");
        }}
      >
        <Text style={styles.btnText}>Изменить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    paddingTop: 10,
    minWidth: "60%",
    textAlign: "center",
  },
  changeBtn: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#28D501",
    width: "60%",
    marginTop: 20,
    borderRadius: 15,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});
