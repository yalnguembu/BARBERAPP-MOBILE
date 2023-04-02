import { Text, StyleSheet, Pressable, View } from "react-native";

function Reservation({ reservation, navigation }) {
  const { id, date, serviceName, time, serviceDuration, isCanceled } =
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
      <View>
        <Text style={styles.title}>{serviceName}</Text>
        <View style={styles.textBox}>
          <Text style={styles.duration}>
            {time} - {serviceDuration + " min"}
          </Text>
          {isCanceled ? (
            <View style={styles.canceledBox}>
              <Text style={styles.canceledText}>canceled</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
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
  textBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  canceledBox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginLeft: 20,
  },
  canceledText: {
    color: "red",
    fontSize: 14,
  },
});
