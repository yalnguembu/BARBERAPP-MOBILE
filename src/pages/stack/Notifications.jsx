import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Notification from "../../components/Notification/Notification";

function Notifications({ navigation }) {
  //   const defaultProduct = {
  //     name: "",
  //     price: 0,
  //     desc: "",
  //     tags: [],
  //   };
  //   const [product, setProduct] = useState(defaultProduct);

  //   const schelde = () => {
  //     navigation.navigate("reservations");
  //   };

  //   useEffect(() => {}, []);

  const notifications = [
    {
      id: 1,
      title: "Profile edit",
      content: "Votre email a ete modifier avec succes",
      type: "security",
      date: new Date().toLocaleTimeString().substring(0,5),
      seen: false,
    },
    {
      id: 1,
      title: "Rappel",
      content: "Votre rendez-vous aura lieu dans moins de 5 min",
      type: "reminder",
      date: new Date().toLocaleTimeString().substring(0,4),
      seen: true,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Ionicons size={30} name="arrow-back" color="#333333" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <View style={styles.main}>
        {notifications.map((notification, index) => (
          <Notification
            key={index}
            notification={notification}
            onClick={() => {}}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor:"#fff"
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
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 5,
    marginLeft:10
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
  },
  backbtn: {
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
