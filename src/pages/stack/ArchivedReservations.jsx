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
import ReservationListItem from "../../components/Reservations/ReservationListItem";
import { reservations as reservationApi } from "../../services";
import { Reservation } from "../../domains/reservation";
import SearchBar from "../../components/Home/SearchBar";
import { useSelector } from "react-redux";

function ArchivedReservations({ navigation }) {
  const { currentUser } = useSelector((state) => state.user);
  const [reservations, setResevations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const removeEventLinstener = navigation.addListener("focus", () => {
      reservationApi
        .getArchivedByClient(currentUser.id)
        .then((response) => response.data)
        .then((data) => {
          setIsLoading(false);
          setResevations(data);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    return removeEventLinstener;
  }, [navigation]);

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons size={23} name="arrow-back" color="#333333" />
        </TouchableOpacity>
        <Text style={styles.title}>Archived reservation</Text>
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
            <Text style={styles.h1}>Passed reservations</Text>
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

export default ArchivedReservations;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingBottom: 50,
    backgroundColor: "white",
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
    paddingHorizontal: 15,
  },
  h1: {
    paddingBottom: 10,
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
  ArchivedButton: {
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderColor: "lightgray",
    alignItems: "center",
    marginBottom: 20,
  },
  ArchivedButtonText: {
    marginLeft: 10,
    color: "lightgray",
  },
});
