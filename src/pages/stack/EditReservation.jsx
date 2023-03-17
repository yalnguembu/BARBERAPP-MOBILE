import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function EditReservation({ navigation, route }) {
  typeof route.params == "undefined" && navigation.goBack();
  const { id } = route.params;
  const [isCancelAlertVisible, setIsCancelAlertVisible] = useState(false);
  const [reservation, setReservation] = useState({});
  const [date, setDate] = useState(new Date().toDateString());
  const [time, setTime] = useState(new Date().toTimeString());

  const handelDate = (e) => setTime(e.target.value);
  const handelTime = (e) => setTime(e.target.value);
  const getReservation = () => {
    setReservation({
      id: "33jjjjss",
      title: "Wache an style coupe",
      content:
        "wache and style erjrevnnenvnvn is a haire cut jjddnenddbnd,bnndbnnnn,nijj",
      date: new Date().toLocaleDateString(),
      start: new Date().toLocaleTimeString(),
      end: new Date().toLocaleTimeString(),
      reminder: true,
    });
  };
  const handelIsCancelAlertVisible = () => {
    setIsCancelAlertVisible(!isCancelAlertVisible);
  };
  const cancelEdit = () => {
    handelIsCancelAlertVisible();
  };
  const cancel = () => {
    handelIsCancelAlertVisible();
    navigation.goBack();
  };
  const handelEdit = () => {
    navigation.goBack();
  };
  const { reminder, ...other } = reservation;
  const editReminder = () => setReservation({ ...other, reminder: !reminder });
  useEffect(() => {
    getReservation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.backButton} onPress={cancelEdit}>
            <Ionicons size={30} name="close-outline" color="#333333" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit reservation</Text>
          <TouchableOpacity style={styles.backButton} onPress={handelEdit}>
            <Ionicons size={30} name="checkmark-outline" color="#333333" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>{reservation.title}</Text>
          <Text style={styles.descText}>{reservation.content}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Date</Text>
          <View style={styles.dateBox}>
            <TextInput
              value={date}
              onChange={handelDate}
              style={styles.input}
            />
            <TouchableOpacity>
              <Ionicons name="calendar" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Heure</Text>
          <View style={styles.dateBox}>
            <TextInput
              value={time.substr(0, 5)}
              onChange={handelTime}
              style={styles.input}
            />
            <TouchableOpacity>
              <Ionicons name="time" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Rappel</Text>
          <TouchableOpacity style={styles.flexRow} onPress={editReminder}>
            <Text style={styles.descText}>
              {reservation.reminder === true ? "oui" : "false"}
            </Text>
            <Ionicons name="chevron-forward" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      {isCancelAlertVisible && (
        <View style={styles.delAlertContainer}>
          <View style={styles.delAlert}>
            <Text style={styles.delAlertTxt}>Annuler les modification?</Text>
            <View style={styles.flexBox}>
              <TouchableOpacity
                style={styles.delAlertBtn}
                onPress={handelIsCancelAlertVisible}
              >
                <Text style={styles.delAlertBtnTxt}>Non</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.delAlertBtn2} onPress={cancel}>
                <Text style={styles.delAlertBtnTxt2}>Oui</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

export default EditReservation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    width: Dimensions.get("screen").width,
    paddingHorizontal: 30,
  },
  header: {
    padding: 30,
    textAlign: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 19,
  },
  title: {
    fontSize: 27,
    fontWeight: "400",
    color: "#fff",
    marginBottom: 10,
  },
  dateBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 15,
    borderRadius: 10,
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
