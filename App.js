import { Provider } from "react-redux";
import { LogBox, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "./src/pages/stack/Cart";
import Main from "./src/pages/stack/Main";
import Login from "./src/pages/stack/Login";
import Detail from "./src/pages/stack/ServiceDetail";
import Search from "./src/pages/stack/Search";
import Onboarding from "./src/pages/stack/Onboarding";
import Register from "./src/pages/stack/Register";
import Security from "./src/pages/stack/Security";
import Profile from "./src/pages/stack/Profile";
import Reservation from "./src/pages/stack/Reservation";
import EditProfile from "./src/pages/stack/EditProfile";
import ProductDetail from "./src/pages/stack/ProductDetail";
import Notification from "./src/pages/stack/Notifications";
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
          initialRouteName={"onboarding"}
        >
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="main" component={Main} />
          <Stack.Screen name="detail" component={Detail} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="security" component={Security} />
          <Stack.Screen name="product-detail" component={ProductDetail} />
          <Stack.Screen name="editprofile" component={EditProfile} />
          <Stack.Screen name="reservation" component={Reservation} />
          <Stack.Screen name="notification" component={Notification} />
          <Stack.Screen
            name="reservationsearch"
            component={ReservationSearch}
          />
          <Stack.Screen name="editreservation" component={EditReservation} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="onboarding" component={Onboarding} />
          <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
