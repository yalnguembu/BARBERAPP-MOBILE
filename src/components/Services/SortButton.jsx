import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, StyleSheet, Text } from "react-native";

const SortButton = () => {
  return (
    <View style={styles.main}>
      <Icon size={23} color="#b1b1b1" name="filter" />
      <Text style={styles.text}> Sort by</Text>
    </View>
  );
};

export default SortButton;

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: "#b1b1b1",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginBottom:15
  },
  text: {
    color: "#b1b1b1",
    fontSize: 21,
  },
});
