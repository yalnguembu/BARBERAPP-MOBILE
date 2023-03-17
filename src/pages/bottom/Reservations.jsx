import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Menu from "../../components/Services/Menu";
import ReservationList from "../../components/Reservations/ReservationList";

function Reservations({ navigation }) {
  
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
  const [filter, setFilter] = useState(false);

  const handelFilter = () => {
    // if (option) setFilter(false);
    setFilter(!filter);
  };
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
    <View>
      {filter && <Menu handelFilter={handelFilter} />}
      <View style={styles.header}>
        <Text style={styles.title}>Mes reservations</Text>
        <View style={styles.btnGroup}>
          <TouchableOpacity onPress={handelFilter}>
            <Ionicons size={23} name="filter" color="#333333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("reservationsearch")}>
            <Ionicons size={22} name="search" color="#333333" />
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

export default Reservations;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  header: {
    width: "100%",
    padding: 15,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:"#fff",
    elevation:5
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
  },
  btnGroup: {
    flexDirection: "row",
    width: 70,
    justifyContent: "space-between",
    alignItems: "center",
  },
  main: {
    flex: 1,
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
