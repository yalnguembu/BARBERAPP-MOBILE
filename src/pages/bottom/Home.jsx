import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Service from "../../components/Home/Service";
import SearchBar from "../../components/Home/SearchBar";
import ServiceHorizontal from "../../components/Home/ServiceHorizontal";
import { useEffect } from "react";
import { services as apiServices } from "../../services";

function Home({ navigation }) {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const setUsername = (username) => {
    const settle = username.split(" ")[0].substring(0, 12);
    return settle + (settle.length >= 12 ? "..." : "");
  };

  useEffect(() => {
    const removeEventLinstener = navigation.addListener("focus", () => {
      apiServices
        .getAll()
        .then((response) => response.data)
        .then((data) => {
          setServices(data);
          setIsLoading(false);
        });
    });

    return removeEventLinstener;
  }, [navigation]);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.appName}>GHOST-BARBER</Text>
        <TouchableOpacity
          style={styles.notificationButton}
          onPress={() => navigation.navigate("profile")}
        >
          <Icon name="account-circle" size={40} color="#232b2b" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.salutation}>
            Hey,{" "}
            <Text style={styles.username}>{setUsername("Mazeking")} 👋🏾</Text>
          </Text>
          <Text style={styles.date}>{new Date().toDateString()}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("search")}>
          <SearchBar />
        </TouchableOpacity>

        {isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View>
            {services.length ? (
              <View style={{ marginTop: 15 }}>
                <View style={styles.flexBox}>
                  <Text style={styles.h1}>Last reservetion</Text>
                  <Icon name="arrow-right" size={20} color="#333" />
                </View>
                <ServiceHorizontal
                  service={services[0]}
                  onClick={() => navigation.navigate("detail", {})}
                />
              </View>
            ) : (
              <></>
            )}

            <View style={styles.container}>
              <View style={styles.flexBox}>
                <Text style={styles.h1}>Recommended services</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("gallery")}
                >
                  <Icon name="chevron-right" size={20} color="#333" />
                </TouchableOpacity>
              </View>
              <ScrollView
                style={styles.servicesBox}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {services.map((service, index) => (
                  <Service
                    key={index}
                    service={service}
                    onClick={() =>
                      navigation.navigate("detail", { id: service._id })
                    }
                  />
                ))}
                {services.length < 1 && (
                  <Text>Sorry there is no recommanded services</Text>
                )}
              </ScrollView>
            </View>
            <View style={styles.container}>
              <View style={styles.flexBox}>
                <Text style={styles.h1}>Popular services</Text>
                <TouchableOpacity>
                  <Icon name="arrow-right" size={20} color="#333" />
                </TouchableOpacity>
              </View>
              <ScrollView
                style={styles.servicesBox}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {services.map((service, index) => (
                  <Service
                    key={index}
                    service={service}
                    onClick={() =>
                      navigation.navigate("detail", { id: service._id })
                    }
                  />
                ))}
                {services.length < 1 && (
                  <Text>
                    Sorry there is no services aviaible for the moment
                  </Text>
                )}
              </ScrollView>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 15,
  },
  loaderContainer: {
    width: Dimensions.get("screen").width - 30,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    paddingBottom: 35,
  },
  header: {
    width: Dimensions.get("screen").width - 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  appName: {
    fontSize: 19,
    color: "#232b2b",
    fontWeight: "bold",
  },
  salutation: {
    fontSize: 27,
    color: "#232b2b",
    marginTop: 20,
  },
  username: {
    fontWeight: "bold",
  },
  date: {
    color: "#232b2b",
    fontWeight: "600",
    marginVertical: 10,
  },
  notificationButton: {
    borderRadius: 5,
    height: 50,
  },
  h1: {
    fontSize: 17,
    fontWeight: "500",
  },
  servicesBox: {
    width: Dimensions.get("screen").width,
    marginTop: 15,
    minHeight: 15,
  },
});
