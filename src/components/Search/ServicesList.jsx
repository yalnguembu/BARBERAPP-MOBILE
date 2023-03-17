import { Text, StyleSheet, View } from "react-native";
import Service from "./Service";

function ServicesList({ servicesList,navigation }) {
  const {services,categorie} = servicesList;

  return (
    <View style={styles.main}>
      <Text style={styles.title}>{categorie}</Text>
      <View style={styles.services}>
        {services.map((service, index) => (
          <Service key={index} service={service} navigation={navigation} />
        ))}
      </View>
    </View>
  );
}

export default ServicesList;
const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: "#fff",
    marginBottom:15
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "dodgerblue",
    marginBottom:20
  },
});
