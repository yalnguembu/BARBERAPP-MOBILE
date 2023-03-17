import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function Reservation({ navigation, route }) {
  typeof route.params == "undefined" && navigation.goBack();
  const { id } = route.params;
  const [isCancelAlertVisible, setIsCancelAlertVisible] = useState(false);
  const [reservation, setReservation] = useState({
    id: "",
    date: "",
    time: "",
    reminder: true,
    seen: true,
    service: {
      title: "",
      content: "",
      price: 0,
      duration: [0, 0],
    },
  });
  const getReservation = () => {
    setReservation({
      id: "33jjjjss",
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString().substring(0, 5),
      reminder: true,
      seen: true,
      service: {
        title: "Wache an style coupe",
        content:
          "wache and style erjrevnnenvnvn is a haire cut jjddnenddbnd bnndbnnnn nijj",
        price: 3460,
        duration: [1, 30],
      },
    });
  };
  const handelIsCancelAlertVisible = () => {
    setIsCancelAlertVisible(!isCancelAlertVisible);
  };
  const cancelReservation = () => {
    handelIsCancelAlertVisible();
    navigation.goBack();
  };
  const handelEdit = () => {
    navigation.navigate("editreservation", { id: "i12yuyyc" });
  };
  useEffect(() => {
    getReservation();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons size={30} name="arrow-back" color="#333333" />
      </TouchableOpacity>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.title}>{reservation.service.title}</Text>
          <View style={styles.dateBox}>
            <Ionicons size={18} name="time" color="#ffffffc0" />
            <Text style={styles.dateText}>
              {reservation.date + " , " + reservation.time}
            </Text>
          </View>
          {reservation.seen && (
            <Text style={styles.seen}> <Ionicons size={18} name="checkmark-outline" color="#ffffffc0" />
              {" "}Vue
            </Text>
          )}
        </View>
        <View style={styles.body}>
          <View style={styles.textBox}>
            <Text style={styles.titleBox}>Description</Text>
            <Text style={styles.descText}>{reservation.service.content}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.titleBox}>Prix</Text>
            <Text style={styles.descText}>{reservation.service.price}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.titleBox}>Rappel</Text>
            <Text style={styles.descText}>
              {reservation.reminder ? "Oui" : "Non"}
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.titleBox}>Durée</Text>
            <Text style={styles.descText}>
              {reservation.service.duration[0] !== 0 &&
                `${reservation.service.duration[0]} h `}
              {reservation.service.duration[1] !== 0 &&
                `${reservation.service.duration[1]} min `}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handelEdit}>
          <Ionicons size={25} name="create-outline" color="#333333" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handelIsCancelAlertVisible}
        >
          <Ionicons size={25} name="close" color="#333333" />
        </TouchableOpacity>
      </View>
      {isCancelAlertVisible && (
        <View style={styles.delAlertContainer}>
          <View style={styles.delAlert}>
            <Text style={styles.delAlertTxt}>Annuler cette reservation?</Text>
            <View style={styles.flexBox}>
              <TouchableOpacity
                style={styles.delAlertBtn}
                onPress={handelIsCancelAlertVisible}
              >
                <Text style={styles.delAlertBtnTxt}>Non</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.delAlertBtn2}
                onPress={cancelReservation}
              >
                <Text style={styles.delAlertBtnTxt2}>Oui</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

export default Reservation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingBottom: 25,
    marginTop: 30,
    marginLeft: 30,
  },
  main: {
    width: Dimensions.get("screen").width - 60,
    minHeight: "75%",
    marginBottom: 20,
    borderRadius: 10,
    elevation: 6,
    backgroundColor: "#fff",
    marginHorizontal: 30,
  },
  header: {
    padding: 20,
    backgroundColor: "#111",
    height: 170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "flex-end",
    elevation:5,
  },
  title: {
    fontSize: 27,
    fontWeight: "400",
    color: "#fff",
    marginBottom: 10,
  },
  dateText: {
    fontSize: 17,
    color: "#ffffffd0",
    marginLeft: 10,
  },
  seen: {
    color: "#fff",
    marginTop: 10,
  },
  dateBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    padding: 15,
  },
  textBox: {
    paddingVertical: 15,
  },
  titleBox: {
    fontSize: 20,
    marginBottom: 5,
  },
  descText: {
    fontSize: 16,
    color: "#202020b0",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    elevation: 5,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  delAlertContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#00000020",
    justifyContent: "center",
    alignItems: "center",
  },
  delAlert: {
    width: "80%",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#fff",
    elevation: 6,
  },
  delAlertTxt: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 15,
    textAlign: "center",
  },
  flexBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  delAlertBtn: {
    borderRadius: 10,
    padding: 10,
    flex: 1,
    textAlign: "center",
    marginHorizontal: 10,
    backgroundColor: "#eeeeee",
  },
  delAlertBtn2: {
    borderRadius: 10,
    padding: 10,
    flex: 1,
    textAlign: "center",
    marginHorizontal: 10,
    backgroundColor: "#202020",
  },
  delAlertBtnTxt: {
    fontWeight: "bold",
    fontSize: 19,
  },
  delAlertBtnTxt2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 19,
  },
});

// import React, { useEffect } from 'react';
// import { StyleSheet, View, Text, Button, Platform } from 'react-native';
// import * as Calendar from 'expo-calendar';

// export default function App() {
//   useEffect(() => {
//     (async () => {
//       const { status } = await Calendar.requestCalendarPermissionsAsync();
//       if (status === 'granted') {
//         const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
//         console.log('Here are all your calendars:');
//         console.log({ calendars });
//       }
//     })();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text>Calendar Module Example</Text>
//       <Button title="Create a new calendar" onPress={createCalendar} />
//     </View>
//   );
// }

// async function getDefaultCalendarSource() {
//   const defaultCalendar = await Calendar.getDefaultCalendarAsync();
//   return defaultCalendar.source;
// }

// async function createCalendar() {
//   const defaultCalendarSource =
//     Platform.OS === 'ios'
//       ? await getDefaultCalendarSource()
//       : { isLocalAccount: true, name: 'Expo Calendar' };
//   const newCalendarID = await Calendar.createCalendarAsync({
//     title: 'Expo Calendar',
//     color: 'blue',
//     entityType: Calendar.EntityTypes.EVENT,
//     sourceId: defaultCalendarSource.id,
//     source: defaultCalendarSource,
//     name: 'internalCalendarName',
//     ownerAccount: 'personal',
//     accessLevel: Calendar.CalendarAccessLevel.OWNER,
//   });
//   console.log(`Your new calendar ID is: ${newCalendarID}`);
// }
// const styles = StyleSheet.create({
//   container:{
//     width:200,
//     height:200,
//   }
// });
