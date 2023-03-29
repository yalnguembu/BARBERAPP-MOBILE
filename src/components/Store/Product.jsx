import {
  StyleSheet,
  Image,
  Pressable,
  View,
  Text,
  Dimensions,
} from "react-native";
import axios from "axios";

function Product({ service, onClick }) {
  const { picture, name, price } = service;

  return (
    <Pressable style={styles.main} onPress={onClick}>
      <Image
        source={{ uri: `${axios.getUri()}/storage/images/services/${picture}` }}
        style={styles.img}
      />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{name && name.substring(0, 24)}</Text>
        <Text style={styles.price}>{price + " "}xaf</Text>
      </View>
    </Pressable>
  );
}
const serviceWidth = Dimensions.get("screen").width / 2 - 32;

export default Product;
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
    height: 220,
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "lightgray",
  },
  name: {
    fontSize: 23,
    fontWeight: "700",
    color: "#232b2b",
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
    color: "gray",
  },
});
