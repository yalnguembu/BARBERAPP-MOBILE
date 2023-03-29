import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";

const CartItem = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${axios.getUri()}/storage/images/services/service-8.png`,
        }}
        style={styles.image}
      />
      <View style={styles.main}>
        <View style={styles.flexBox}>
          <Text style={styles.name}>Essentials oils</Text>
        </View>
        <View style={styles.flexBox}>
          <Text style={styles.price}>85000 xaf</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Icon size={30} name="close" color="crimson" />
        </TouchableOpacity>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon size={25} name="remove" color="dark" />
          </TouchableOpacity>
          <Text style={styles.number}>{1}</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Icon size={25} name="add" color="dark" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 30,
    flexDirection: "row",
    height: 130,
    marginBottom: 20,
    borderRadius: 15,
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 110,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgrey",
  },
  main: {
    padding: 10,
    flex: 1,
  },
  flexBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 23,
    fontWeight: "700",
  },
  price: {
    fontSize: 19,
    fontWeight: "700",
    color: "#888",
    marginTop: 5,
  },
  buttonGroup: {
    backgroundColor: "#f1f1f1",
    borderRadius: 7,
  },
  actionButton: {
    backgroundColor: "#e1e1e1",
    padding: 1,
    borderRadius: 5,
  },
  number: {
    textAlign: "center",
    padding: 5,
  },
});
