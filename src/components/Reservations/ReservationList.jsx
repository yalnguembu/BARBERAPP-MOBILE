import { Text, StyleSheet, View } from "react-native";
import Reservation from "./Reservation";

function ReservationList({ reservationList,navigation }) {
  const { reservations, date } = reservationList;
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{date}</Text>
      <View style={styles.services}>
        {reservations.map((reservation, index) => (
          <Reservation key={index} reservation={reservation} navigation={navigation} />
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
    paddingHorizontal:20,
    backgroundColor: "#fff",
    marginBottom:15
  },
  
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "dodgerblue",
    marginBottom:10
  },
});
