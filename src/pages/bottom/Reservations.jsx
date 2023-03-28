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
import Ionicons from "react-native-vector-icons/Ionicons";
import Menu from "../../components/Services/Menu";
import ReservationListItem from "../../components/Reservations/ReservationListItem";
import { reservations as reservationApi } from "../../services";
import { Reservation } from "../../domains/reservation";
import SortButton from "../../components/Services/SortButton";
import SearchBar from "../../components/Home/SearchBar";

function Reservations({ navigation }) {
  const [filter, setFilter] = useState("");
  const [reservations, setResevations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handelFilter = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    const removeEventLinstener = navigation.addListener("focus", () => {
      reservationApi
        .getAll()
        .then((response) => response.data)
        .then((data) => {
          setIsLoading(false);
          console.log(data);
          setResevations(data);
        });
    });

    return removeEventLinstener;
  }, [navigation]);

  return (
    <View>
      {filter ? <Menu handelFilter={handelFilter} /> : <></>}
      <View style={styles.header}>
        <Text style={styles.title}>Mes reservations</Text>
        <TouchableOpacity onPress={handelFilter}>
          <Ionicons size={23} name="funnel" color="#333333" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : reservations.length ? (
          <View style={styles.main}>
            <Pressable
              onPress={() => navigation.navigate("reservation-search")}
            >
              <SearchBar />
            </Pressable>
            <View style={styles.reservationsCard}>
              {reservations.map((reservation, index) => (
                <ReservationListItem
                  key={index}
                  reservation={new Reservation(reservation)}
                  navigation={navigation}
                />
              ))}
            </View>
          </View>
        ) : (
          <Text
            style={{
              padding: 30,
              color: "gray",
            }}
          >
            You don't yet have reservation, make a reservation and it will
            appear header
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

export default Reservations;

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
    justifyContent: "space-between",
    backgroundColor: "#fff",
    elevation: 5,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 5,
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
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
});
