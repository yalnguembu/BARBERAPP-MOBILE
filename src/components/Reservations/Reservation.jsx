import { Text, StyleSheet, Pressable, View } from "react-native";

function Reservation({ reservation, navigation }) {
  let { id, seen, date, service } = reservation;
  let { title } = service;
  return (
    <Pressable
      style={styles.main}
      onPress={() => navigation.navigate("reservation", { id: id })}
    >
      {/* {seen ? (
        <></>
      ) : (
        <> */}
          <View style={styles.dateBox}>
            <Text style={styles.dayNumeric}>
              {new Date(date).toLocaleDateString().substring(0, 2)}
            </Text>
            <Text style={styles.dayString}>
              {new Date(date).toDateString().substring(0, 3)}.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.duration}>8:30 - 16:45</Text>
          </View>
        {/* </>
      )} */}
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
