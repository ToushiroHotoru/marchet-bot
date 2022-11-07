import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Address from "../screens/Address";
import AddressForm from "../screens/AddressForm";

const Stack = createNativeStackNavigator();

export default function StackAddress() {
  return (
    <Stack.Navigator initialRouteName="Address">
      <Stack.Screen
        name="Address"
        component={Address}
        options={{
          title: "Мои адреса",
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
      <Stack.Screen
        name="AddressForm"
        component={AddressForm}
        options={{
          title: "Изменить адрес",
          //   headerShown: false,
          // headerTransparent: true,
          headerStyle: {
            backgroundColor: "#f1f2f6",
          },
          title: "Изменить адрес",
        }}
      />
    </Stack.Navigator>
  );
}
