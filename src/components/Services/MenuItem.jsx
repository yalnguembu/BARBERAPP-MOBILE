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
    width:"100%",
    padding: 15,
    paddingHorizontal:25
  },
  menuItem: {
    fontSize: 15,
  },
});
