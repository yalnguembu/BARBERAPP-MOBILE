import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../bottom/Home";
import Services from "../bottom/Services";
import Profile from "../bottom/Profile";
import Reservation from "../bottom/Reservations";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faReceipt,
  faHome,
  faUser,
  faListSquares,
} from "@fortawesome/free-solid-svg-icons";
import { Dimensions } from "react-native";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      initialRouteName="main"
      sceneContainerStyle={{ backgroundColor: "#fff" }}
      screenOptions={({ route }) => ({
        
        // tabBarIcon: ({ color, size }) => {
        //   let icon;
        //   if (route.name === "Home") {
        //     icon =  faHome ;
        //   } else if (route.name === "services") {
        //     icon = faListSquares ;
        //   } else if (route.name === "reservations") {
        //     icon =  faReceipt;
        //   } else if (route.name === "profile") {
        //     icon =  faUser ;
        //   }
        //   return <FontAwesomeIcon icon={icon} color={color} size={size}/>;
        // },
        tabBarIcon: ({ color, size, focused }) => {
          let icon;
          if (route.name === "Home") {
            icon = focused ? "grid" : "grid-outline";
          } else if (route.name === "services") {
            icon = focused ? "construct" : "construct-outline";
          } else if (route.name === "reservations") {
            icon = focused ? "list" : "list-outline";
          } else if (route.name === "profile") {
            icon = focused ? "person" : "person-outline";
          }
          return <Ionicons name={icon} color={color} size={size} />;
        },
        tabBarActiveTintColor: "#395D70",
        tabBarInactiveTintColor: "#9AD7D9",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 65,
          position: "absolute",
          bottom: 10,
          left: 40,
          width: Dimensions.get("screen").width - 80,
          backgroundColor: "#fff",
          borderRadius: 10,
          borderTopColor: "#fff",
          elevation: 6,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="services" component={Services} />
      <Tab.Screen name="reservations" component={Reservation} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}
