import {
  View,
  Pressable,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const ServiceHorizontal = ({ service, onClick }) => {
  const { picture, name, category } = service;
  const serverURL = "http://192.168.43.25:5000";
  return (
    <View style={styles.main}>
      <Image
        source={{ uri: `${serverURL}/storage/images/services/${picture}` }}
        style={styles.img}
      />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{name.substring(0, 9)}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <Pressable style={styles.button} onPress={onClick}>
        <Text style={styles.buttonText}>book</Text>
      </Pressable>
    </View>
  );
};

export default ServiceHorizontal;

const styles = StyleSheet.create({
  main: {
    width: Dimensions.get("screen").width - 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#232b2b",
    borderRadius: 15,
    marginBottom: 15,
    padding: 8,
  },
  img: {
    width: 55,
    height: 55,
    resizeMode: "cover",
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    width: Dimensions.get("screen").width - 100,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff",
  },
  category: {
    fontSize: 15,
    color: "#ffcc00",
    marginTop:5
  },
  button: {
    width: 65,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
  },
});
