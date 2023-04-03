import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabBar from "../../components/Services/TabBar";
import Service from "../../components/Services/Service";
import { services as apiServices } from "../../services";

function Search({ navigation }) {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredServices, setFilteredServices] = useState([]);
  const [search, setSearch] = useState("");

  const handelSearch = (value) => {
    setSearch(value);
    setTimeout(() => setFilteredServices(filter(value, services)), 500);
  };

  const filter = (keyWord, datas) => {
    keyWord = keyWord.toLowerCase();
    return datas?.filter(
      (datas) =>
        datas?.name?.toLowerCase().search(keyWord) !== -1 ||
        datas?.category?.toLowerCase().search(keyWord) !== -1
    );
  };

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
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.searchGroup}>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons size={23} name="arrow-back" color="#aaa" />
          </TouchableOpacity>
          <TextInput
            placeholder="Search a service..."
            placeholderTextColor="gray"
            value={search}
            onChangeText={handelSearch}
            style={styles.searchInput}
            autoFocus
          />
          <View style={styles.searchIconsBox}>
            {search.length ? (
              <TouchableOpacity
                style={styles.cleanBtn}
                onPress={() => setSearch("")}
              >
                <Ionicons size={23} name="close" color="#aaa" />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
      <View style={styles.tabBarContainer}>
        {/* <TabBar handelActiveTab={handelActiveTab} activeTab={activeTab} /> */}
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.servicesBox}>
          {!search ? (
            <></>
          ) : isLoading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" />
            </View>
          ) : filteredServices.length ? (
            filteredServices.map((service, index) => (
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
              Oups! nothing found please something else
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fefefe",
    flex: 1,
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fefefe",
  },
  header: {
    width: "100%",
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 15,
  },
  searchGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get("screen").width - 30,
    padding: 5,
    margin: 15,
    paddingHorizontal: 10,
    marginBottom: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  searchInput: {
    flex: 1,
    padding: 7,
    fontSize: 15,
    paddingHorizontal: 10,
  },
  cleanBtn: {
    padding: 5,
    borderLeftColor: "lightgray",
    borderLeftWidth: 1,
  },
  searchBtn: {
    padding: 5,
  },
  searchIconsBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabBarContainer: {
    padding: 15,
    paddingBottom: 0,
  },
  servicesBox: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 15,
    padding: 15,
  },
  shadow: {
    width: "100%",
    height: 1500,
    backgroundColor: "#22222230",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    paddingTop: 60,
    paddingRight: 25,
    alignItems: "flex-end",
  },
  menu: {
    minWidth: 150,
    borderRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#fff",
  },
  menuButton: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  optionItemButton: {
    padding: 10,
    fontSize: 15,
  },
});
