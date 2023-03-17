import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MenuItem from "./MenuItem";

function Menu({ handelFilter }) {
  let items = [
    { title: "Tout", action: "ALL", /*onClick: reservationFilter*/ },
    { title: "Alphabetique", action: "ALL", /*onClick: reservationFilter*/ },
    { title: "Date", action: "ALL", /*onClick: reservationFilter*/ },
    { title: "Avenir", action: "ALL", /*onClick: reservationFilter*/ },
    { title: "Ancien", action: "ALL", /*onClick: reservationFilter*/ },
    { title: "Allez a une date", action: "ALL", /*onClick: reservationFilter*/ },
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
    height: 1500,
    backgroundColor: "#22222230",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    paddingTop: 60,
    paddingRight: 55,
    alignItems: "flex-end",
  },
  menu: {
    minWidth: 150,
    borderRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#fff",
    padding:0
  },
});
