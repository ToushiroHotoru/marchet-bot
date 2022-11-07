import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { reset } from "../redux/basket";

export default function Counter(props) {
  const [count, setCount] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const start = async () => {
    await dispatch(reset());
    props.func(count);
  };

  useEffect(() => {
    start();
    console.log(props.id);
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do u wanna remove this item?</Text>
            <View style={styles.btns}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  props.removeItem(props.id);
                  props.reduxFuncMinus(count - 1);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Remove</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.counter}>
        <TouchableOpacity
          onPress={() => {
            if (count <= 1) {
              setModalVisible(!modalVisible);
            } else {
              setCount(count - 1);
              props.reduxFuncMinus(count - 1);
            }
          }}
        >
          <View style={styles.plusAndMinusBtn}>
            <Text>-</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.count}>{count}</Text>
        <TouchableOpacity
          onPress={() => {
            if (count >= 99) {
              setCount(99);
            } else {
              setCount(count + 1);
              props.reduxFuncPlus(count + 1);
            }
          }}
        >
          <View style={styles.plusAndMinusBtn}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginHorizontal: 6,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  btns: {
    flexDirection: "row",
  },
});
