import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "../screens/Home";
import StacksPersonal from "./StacksPersonal";
import Stacks from "./Stacks";
import Basket from "../screens/Basket";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Stacks") {
            iconName = "menu";
          } else if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Basket") {
            iconName = "basket";
          } else if (route.name === "Личное") {
            iconName = "person";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Домашняя",
          headerShown: false,
          // headerStyle: {
          //   backgroundColor: "#f1c40f",
          // },
        }}
      />
      <Tab.Screen
        name="Stacks"
        component={Stacks}
        options={{
          title: "Каталог",
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{
          title: "Корзина",
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
      <Tab.Screen
        name="Личное"
        component={StacksPersonal}
        options={{
          title: "Личное",
          headerShown: false,
          headerStyle: {
            backgroundColor: "#f1c40f",
          },
        }}
      />
    </Tab.Navigator>
  );
}
