import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabBar from "../../components/Services/TabBar";
import ServicesList from "../../components/Search/ServicesList";

function Search({ navigation }) {
  const services = [
    {
      categorie: "coupe",
      services: [
        {
          id: 1,
          title: "Coupe",
          img: require("../../assets/images/service-1.png"),
          desc: "lorem ipsum description text",
        },
        {
          id: 1,
          title: "Tracage",
          img: require("../../assets/images/service-1.png"),
          desc: "lorem ipsum description text",
        },
        {
          id: 1,
          title: "Lavage",
          img: require("../../assets/images/service-1.png"),
          desc: "lorem ipsum description text",
        },
      ],
    },
    {
      categorie: "tracage",
      services: [
        {
          id: 1,
          title: "Teinte",
          img: require("../../assets/images/service-1.png"),
          desc: "lorem ipsum description text",
        },
        {
          id: 1,
          title: "Barbe",
          img: require("../../assets/images/service-1.png"),
          desc: "lorem ipsum description text",
        },
        {
          id: 1,
          title: "Tresse",
          img: require("../../assets/images/service-1.png"),
          desc: "lorem ipsum description text",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("tout");
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const handelActiveTab = (tab) => {
    setActiveTab(tab);
  };
  const handelFilter = (filter) => {
    setFilter(filter);
  };

  const handelSearch = (search) => {
    setSearch(search);
  };
  //   const
  const serviceFilter = (filter = null, date = null) => {
    switch (filter) {
      case "ALL":
        console.log(filter);
        break;

      case "DATE":
        console.log(filter);
        break;

      case "ALPHA_ASC":
        console.log(filter);
        break;

      case "NEW":
        console.log(filter);
        break;

      case "OLD":
        console.log(filter);
        break;

      case "SEEN":
        console.log(filter);
        break;

      case "GOTO_DATE":
        console.log(filter);
        if (date !== null) console.log(date);

        break;

      default:
        break;
    }
  };

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
        <TabBar handelActiveTab={handelActiveTab} activeTab={activeTab} />
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          {services.map((service, index) => (
            <ServicesList
              servicesList={service}
              key={index}
              navigation={navigation}
            />
          ))}
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
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
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
