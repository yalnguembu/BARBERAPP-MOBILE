import { Text, StyleSheet, View } from "react-native";
import { Reservation } from "../../domains/reservation";
import ReservationListItem from "./ReservationListItem";

function ReservationList({ reservations, title, navigation }) {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.services}>
        {reservations.map((reservation, index) => (
          <ReservationListItem
            key={index}
            reservation={new Reservation(reservation)}
            navigation={navigation}
          />
        ))}
      </View>
    </View>
  );
}

export default ReservationList;
const styles = StyleSheet.create({
  main: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginBottom: 15,
  },

  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "dodgerblue",
    marginBottom: 10,
  },
});
