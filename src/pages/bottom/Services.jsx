import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Service from "../../components/Services/Service";
import SearchBar from "../../components/Home/SearchBar";
import { services as apiServices } from "../../services";

function Services({ route, navigation }) {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const removeEventLinstener = navigation.addListener("focus", () => {
      apiServices
        .getAll()
        .then((response) => response.data)
        .then((data) => {
          setIsLoading(false);
          setServices(data);
        });
    });

    return removeEventLinstener;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Services</Text>
        <TouchableOpacity onPress={() => navigation.navigate("search")}>
          <Icon size={22} name="bell" color="#333333" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <Pressable onPress={() => navigation.navigate("search")}>
          <SearchBar />
        </Pressable>
        <View style={styles.servicesBox}>
          {isLoading ? (
            <View>
              <ActivityIndicator size="large" />
            </View>
          ) : services.length ? (
            services.map((service, index) => (
              <Service
                key={index}
                service={service}
                onClick={() =>
                  navigation.navigate("detail", { id: service._id })
                }
              />
            ))
          ) : (
            <Text style={{ textAlign: "center" }}>
              Sorry the is no yet aviable services
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
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
    justifyContent: "space-between",
    backgroundColor: "#fff",
    elevation: 5,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 5,
  },
  servicesBox: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 15,
  },
  flexBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  h1: {
    fontSize: 19,
    fontWeight: "500",
    color: "gray",
  },
});
