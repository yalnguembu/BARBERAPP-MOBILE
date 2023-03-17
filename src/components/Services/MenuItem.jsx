import { Text, StyleSheet, TouchableOpacity } from "react-native";

function MenuItem({ item }) {
  let { onClick, title, action } = item;
  // onClick = onClick(action);
  return (
    <TouchableOpacity onPress={onClick} style={styles.menuItem}>
      <Text style={styles.menuItemText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default MenuItem;

const styles = StyleSheet.create({
  menuItemText: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    width:"100%",
    padding: 10,
  },
  menuItem: {
    fontSize: 15,
  },
});
