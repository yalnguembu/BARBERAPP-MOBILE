import axios from "axios";
import {
  StyleSheet,
  Image,
  Pressable,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Service = ({ service, onClick }) => {
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
          <Text style={styles.duration}>{duration} min</Text>
        </View>
        <Text style={styles.name}>{name && name.substring(0, 12)}</Text>
        <View style={styles.flexBox}>
          <Text style={styles.price}>{price + " "} xaf</Text>
          <TouchableOpacity style={styles.button}>
            <Icon name="calendar-check" size={26} color="#222" />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

export default Service;
const styles = StyleSheet.create({
  main: {
    width: 250,
    borderRadius: 23,
    marginRight: 15,
    marginLeft: 2,
    marginBottom: 5,
    backgroundColor: "#fff",
    elevation: 3,
  },
  cardContent: {
    padding: 15,
  },
  img: {
    width: 250,
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
    marginTop: 5,
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
    marginTop: 15,
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
});
