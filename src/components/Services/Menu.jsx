import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MenuItem from "./MenuItem";

function Menu({ handelFilter }) {
  let items = [
    { title: "Alphabetique", action: "ALL" /*onClick: reservationFilter*/ },
    { title: "Date", action: "ALL" /*onClick: reservationFilter*/ },
  ];
  return (
    <TouchableOpacity style={styles.shadow} onPress={handelFilter}>
      <View style={styles.menu}>
        {items.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </View>
    </TouchableOpacity>
  );
}

export default Menu;

const styles = StyleSheet.create({
  shadow: {
    width: "100%",
    height: Dimensions.get("screen").height,
    backgroundColor: "#00000000",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    justifyContent: "flex-end",
  },
  menu: {
    width: "100%",
    borderRadius: 25,
    elevation: 5,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#fff",
    padding: 0,
    paddingBottom: 100,
    paddingTop: 20,
  },
});
