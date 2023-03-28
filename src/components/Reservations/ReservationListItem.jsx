import { Text, StyleSheet, Pressable, View } from "react-native";

function Reservation({ reservation, navigation }) {
  const { id, date, serviceName, time, serviceDuration } =
    reservation;
  return (
    <Pressable
      style={styles.main}
      onPress={() => navigation.navigate("reservation", { id })}
    >
      <View style={styles.dateBox}>
        <Text style={styles.dayNumeric}>{date.date}</Text>
        <Text style={styles.dayString}>{date.day}</Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{serviceName}</Text>
        <Text style={styles.duration}>
          {time} - {serviceDuration}
        </Text>
      </View>
    </Pressable>
  );
}

export default Reservation;
const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dateBox: {
    paddingRight: 20,
    alignItems: "center",
    textAlign: "center",
  },
  dayNumeric: {
    fontSize: 22,
    fontWeight: "500",
  },
  dayString: {
    fontSize: 12,
    color: "gray",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  duration: {
    fontSize: 15,
    color: "gray",
  },
});
