import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function AddressForm({ route }) {
  const [text, setText] = useState("zero");
  const { createNew } = route.params;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        autofocus={true}
      />
      <TouchableOpacity>
        <Text>{createNew ? "Добавить" : "Изменить"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomWidth: 1,
    minWidth: "60%",
    textAlign: "center",
  },
});
