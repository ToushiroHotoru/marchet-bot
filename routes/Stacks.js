import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Catalog from "../screens/Catalog";
import Something from "../screens/Something";
import Goods from "../screens/Goods";
// import Goods from "../screens/Goods";
import GoodsItem from "../screens/GoodsItem";
// import StackGoods from "./StacksGoods";

const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator initialRouteName="Catalog">
      <Stack.Screen
        name="Catalog"
        component={Catalog}
        options={{
          title: "Каталог",
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
      <Stack.Screen
        name="Goods"
        component={Goods}
        options={{
          title: "Товары",
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
      <Stack.Screen
        name="GoodsItem"
        component={GoodsItem}
        options={{
          // headerTransparent: true,
          headerStyle: {
            backgroundColor: "#f1f2f6",
          },
        }}
      />
      {/* <Stack.Screen
        name="StackGoods"
        component={StackGoods}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="Something"
        component={Something}
        options={{
          title: "Товары",
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
    </Stack.Navigator>
  );
}
