import { StyleSheet, Dimensions, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function SearchBar({ service }) {
  return (
    <View style={styles.main}>
      <Ionicons name="search" size={25} color="lightgray" />
      <Text style={styles.input}>Search a service...</Text>
    </View>
  );
}

export default SearchBar;
const styles = StyleSheet.create({
  main: {
    width: Dimensions.get("screen").width - 30,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#fefefe",
    marginVertical: 15,
  },
  input: {
    paddingHorizontal: 15,
    color: "gray",
  },
  name: {
    fontSize: 23,
    fontWeight: "700",
    color: "#fefefe",
    marginTop: 10,
  },
  category: {
    fontSize: 16,
    color: "#FFF269",
  },
  button: {
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#fefefe40",
    marginTop: 15,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 21,
    color: "#fff",
  },
});
