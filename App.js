import { Provider } from "react-redux";
import { LogBox, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Map from "./src/pages/stack/Map";
import Main from "./src/pages/stack/Main";
import Login from "./src/pages/stack/Login";
import Detail from "./src/pages/stack/Detail";
import Search from "./src/pages/stack/Search";
import Welcome from "./src/pages/stack/Welcome";
import Gallery from "./src/pages/stack/Gallery";
import Register from "./src/pages/stack/Register";
import Security from "./src/pages/stack/Security";
import Reservation from "./src/pages/stack/Reservation";
import EditProfile from "./src/pages/stack/EditProfile";
import Notification from "./src/pages/stack/Notifications";
import ResetPassword from "./src/pages/stack/ResetPassword";
import NewReservation from "./src/pages/stack/NewReservation";
import EditReservation from "./src/pages/stack/EditReservation";
import ReservationSearch from "./src/pages/stack/ReservationSearch";
import { store } from "./src/redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreLogs(["Remote debugger"]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          animated={true}
          backgroundColor="#202020"
        />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={"main"}
        >
          <Stack.Screen name="map" component={Map} />
          <Stack.Screen name="main" component={Main} />
          <Stack.Screen name="detail" component={Detail} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="gallery" component={Gallery} />
          <Stack.Screen name="security" component={Security} />
          <Stack.Screen name="editprofile" component={EditProfile} />
          <Stack.Screen name="reservation" component={Reservation} />
          <Stack.Screen name="notification" component={Notification} />
          <Stack.Screen name="resetpassword" component={ResetPassword} />
          <Stack.Screen name="newreservatin" component={NewReservation} />
          <Stack.Screen
            name="reservationsearch"
            component={ReservationSearch}
          />
          <Stack.Screen name="editreservation" component={EditReservation} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
