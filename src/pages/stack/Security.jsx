import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Services({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon size={25} name="arrow-left" color="#333333" />
        </TouchableOpacity>
        <Text style={styles.title}>Security</Text>
      </View>
      <ScrollView
        style={styles.main}
        showsVerticalScrollIndicator={false}
      ></ScrollView>
    </View>
  );
}

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    padding: 15,
    paddingTop: 0,
    paddingBottom: 35,
  },
  header: {
    width: "100%",
    padding: 15,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 5,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 5,
    marginLeft: 12,
  },
});
