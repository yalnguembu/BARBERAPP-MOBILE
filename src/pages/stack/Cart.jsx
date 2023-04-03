import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { reservations as reservationApi } from "../../services";
import { Reservation } from "../../domains/reservation";
import CartItem from "../../components/Store/CartItem";
import { useSelector } from "react-redux";

const Cart = ({ navigation }) => {
  const [reservations, setResevations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const removeEventLinstener = navigation.addListener("focus", () => {
      reservationApi
        .getByClient(currentUser.id)
        .then((response) => response.data)
        .then((data) => {
          setIsLoading(false);
          setResevations(data);
        });
    });

    return removeEventLinstener;
  }, [navigation]);

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon size={30} name="arrow-back" color="#333333" />
        </TouchableOpacity>
        <View style={styles.flexBox}>
          <Text style={styles.title}>Cart</Text>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => navigation.navigate("checkout")}
          >
            <Text style={styles.buyButtonText}>checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View style={styles.main}>
            {reservations.map((reservation, index) => (
              <CartItem
                key={index}
                product={new Reservation(reservation)}
                navigation={navigation}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  header: {
    width: "100%",
    padding: 15,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 5,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 5,
    marginLeft: 10,
  },
  loaderContainer: {
    width: Dimensions.get("screen").width,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  btnGroup: {
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
    alignItems: "center",
  },
  main: {
    flex: 1,
    padding: 15,
    paddingVertical: 25,
  },
  shadow: {
    width: "100%",
    height: 1500,
    backgroundColor: "#22222230",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    paddingTop: 60,
    paddingRight: 25,
    alignItems: "flex-end",
  },
  menu: {
    minWidth: 150,
    borderRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#fff",
  },
  menuButton: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  optionItemButton: {
    padding: 10,
    fontSize: 15,
  },
  reservationsCard: {
    flex: 1,
    width: "100%",
  },
  buyButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15,
    backgroundColor: "#222",
    borderRadius: 8,
    alignSelf: "flex-end",
  },
  buyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
  flexBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
