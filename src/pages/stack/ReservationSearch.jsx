import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Menu from "../../components/Services/Menu";
import ReservationList from "../../components/Reservations/ReservationList";

function ReservationSearch({ navigation }) {
  const reservations = [
    {
      date: "juillet 2022",
      reservations: [
        {
          id: 0,
          date: new Date(),
          service: {
            title: "Congoliliana hair cut",
            content: "Coupe afro complex au forme du congo zairoi.",
            prix: 3500,
          },
          reminder: false,
          seen: false,
        },
        {
          id: 1,
          date: new Date(),
          service: {
            title: "Congoliliana hair cut",
            content: "Coupe afro complex au forme du congo zairoi.",
            prix: 3500,
          },
          reminder: false,
          seen: false,
        },
      ],
    },
    {
      date: "aout 2022",
      reservations: [
        {
          id: 2,
          date: new Date(),
          service: {
            title: "Congoliliana hair cut",
            content: "Coupe afro complex au forme du congo zairoi.",
            prix: 3500,
          },
          reminder: false,
          seen: false,
        },
        {
          id: 3,
          date: new Date(),
          service: {
            title: "Congoliliana hair cut",
            content: "Coupe afro complex au forme du congo zairoi.",
            prix: 3500,
          },
          reminder: false,
          seen: false,
        },
      ],
    },
  ];
  const [filter, setFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handelFilter = (filter) => {
    setFilter(filter);
  };

  const handelSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handelSearch = () => {};
  //   const
  const reservationFilter = (filter = null, date = null) => {
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
    <View style={{ backgroundColor: "#fefefe" }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons size={23} name="arrow-back" color="#333333" />
        </TouchableOpacity>
        <Text style={styles.title}>Reservations</Text>
      </View>
      <View style={styles.searchGroup}>
        <TextInput
          placeholder="recherche..."
          value={searchInput}
          onChange={handelSearchInput}
          style={styles.searchInput}
        />
        <View style={styles.searchIconsBox}>
          {searchInput.length > 0 && (
            <TouchableOpacity
              style={styles.cleanBtn}
              onPress={() => setSearchInput("")}
            >
              <Ionicons size={23} name="close" color="#aaa" />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={handelSearch}>
            <Ionicons size={23} name="search" color="#aaa" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          {reservations.map((reservation, index) => (
            <ReservationList
              reservationList={reservation}
              key={index}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default ReservationSearch;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fefefe",
  },
  header: {
    width: "100%",
    padding: 15,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:"#fff",
    elevation:5,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 15,
  },
  searchGroup: {
    width: Dimensions.get("screen").width - 40,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "lightgray",
    margin: 20,
    marginBottom: 0,
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
    marginRight: 15,
  },
  searchIconsBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
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
