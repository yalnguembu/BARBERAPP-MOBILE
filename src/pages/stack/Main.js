import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../bottom/Home";
import Services from "../bottom/Services";
import Store from "../bottom/Store";
import Reservation from "../bottom/Reservations";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      initialRouteName="main"
      sceneContainerStyle={{ backgroundColor: "#fff" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let icon;
          if (route.name === "Home") {
            icon = focused ? "home-variant" : "home-variant-outline";
          } else if (route.name === "services") {
            icon = focused ? "apps" : "apps";
          } else if (route.name === "store") {
            icon = focused ? "store" : "store-outline";
          } else if (route.name === "reservations") {
            icon = focused ? "calendar" : "calendar-outline";
          }

          return (
            <View
              style={{
                padding: 8,
                borderRadius: 10,
                backgroundColor: focused ? "#222" : "#fff",
              }}
            >
              <Icon name={icon} color={color} size={focused ? size : 30} />
            </View>
          );
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#232b2b",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 65,
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#f1f1f1",
          position: "absolute",
          elevation: 4,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="services" component={Services} />
      <Tab.Screen name="store" component={Store} />
      <Tab.Screen name="reservations" component={Reservation} />
    </Tab.Navigator>
  );
}
