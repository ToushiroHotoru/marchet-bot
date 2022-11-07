import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyOrders from "../screens/MyOrders";
import Personal from "../screens/Personal";
import StacksAddress from "./StacksAddress";
import Archive from "../screens/Archive";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import PersonalEdit from "../screens/PersonalEdit";

const Stack = createNativeStackNavigator();

export default function StackPersonal() {
  return (
    <Stack.Navigator initialRouteName="Personal">
      <Stack.Screen
        name="Personal"
        component={Personal}
        options={{
          title: "Личное",
          //   headerShown: false,
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
      <Stack.Screen
        name="MyOrders"
        component={MyOrders}
        options={{
          title: "Мои заказы",
          //   headerTransparent: true,
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
      <Stack.Screen
        name="PersonalEdit"
        component={PersonalEdit}
        options={{
          title: "Редактировать профиль",
          //   headerTransparent: true,
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
      <Stack.Screen
        name="Archive"
        component={Archive}
        options={{
          title: "Архив",
          //   headerTransparent: true,
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          title: "Авторизация",
          //   headerTransparent: true,
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Регистрация",
          //   headerTransparent: true,
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
      <Stack.Screen
        name="StacksAddress"
        component={StacksAddress}
        options={{
          // title: "Мои адреса",
          headerShown: false,
          //   headerTransparent: true,
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
    </Stack.Navigator>
  );
}
