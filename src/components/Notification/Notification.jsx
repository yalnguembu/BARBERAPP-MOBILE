import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function Notification({ notification, onClick }) {
  let { title, type, content, seen, date } = notification;

  return (
    <Pressable style={styles.main} onPress={onClick}>
      <View style={seen ? styles.container : styles.containerSeen}>
        <View style={styles.iconBox}>
          {type == "security" ? (
            <Ionicons name="lock-closed" size={40} color="gray" />
          ) : type == "reminder" ? (
            <Ionicons name="alarm" size={40} color="gray" />
          ) : (
            <Ionicons name="information-circle" size={40} color="gray" />
          )}
        </View>
        <View style={styles.cardContent}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{date}</Text>
          </View>
          <Text style={styles.desc}>
            {content.length >= 20 ? content.substr(0, 24) + "..." : content}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Notification;
const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 80,
    overflow: "hidden",
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  container: {
    height: 80,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerSeen: {
    height: 80,
    width: "100%",
    backgroundColor: "#e1e1e1",
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconBox: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    padding: 15,
    flex:1
  },
  img: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
  },
  title: {
    fontSize: 23,
    fontWeight: "500",
  },
  desc: {
    fontSize: 17,
    color: "gray",
  },
});
