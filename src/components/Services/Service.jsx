import {
  StyleSheet,
  Image,
  Pressable,
  View,
  Text,
  Dimensions,
} from "react-native";
import axios from "axios";

function Service({ service, onClick }) {
  const { picture, name, category, price, duration } = service;

  return (
    <Pressable style={styles.main} onPress={onClick}>
      <Image
        source={{ uri: `${axios.getUri()}/storage/images/services/${picture}` }}
        style={styles.img}
      />
      <View style={styles.cardContent}>
        <View style={styles.flexBox}>
          <View style={styles.bgCat}>
            <Text style={styles.category}>{category}</Text>
          </View>
        </View>
        <Text style={styles.duration}>{duration} min</Text>
        <Text style={styles.name}>{name && name.substring(0, 24)}</Text>
        <Text style={styles.price}>{price + " "}xaf</Text>
      </View>
    </Pressable>
  );
}
const serviceWidth = Dimensions.get("screen").width / 2 - 34;
export default Service;
const styles = StyleSheet.create({
  main: {
    width: serviceWidth,
    borderRadius: 23,
    marginBottom: 20,
    marginRight: 15,
    backgroundColor: "#fff",
    elevation: 3,
    marginLeft: 2,
  },
  cardContent: {
    padding: 15,
  },
  img: {
    width: serviceWidth,
    height: 180,
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "lightgray",
  },
  name: {
    fontSize: 23,
    fontWeight: "700",
    color: "#232b2b",
    marginVertical: 7,
    marginBottom: 10,
  },
  flexBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 19,
    color: "#232b2b",
  },
  category: {
    fontSize: 16,
    color: "black",
  },
  bgCat: {
    backgroundColor: "#ffcc00",
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 5,
  },
  duration: {
    fontSize: 16,
    color: "gray",
    padding: 5,
  },
  button: {
    padding: 7,
    borderRadius: 50,
    backgroundColor: "#232b2b",
    marginTop: 10,
  },
});
