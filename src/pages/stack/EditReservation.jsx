import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DatePicker from "../../components/Services/DatePicker";
import TimePicker from "../../components/Services/TimePicker";
import { Reservation } from "../../domains/reservation";
import { reservations as reservationApi, reservations } from "../../services";
import { date } from "../../utils/common";

function EditReservation({ navigation, route }) {
  typeof route.params == "undefined" && navigation.goBack();
  const { id } = route.params;
  const [isCancelAlertVisible, setIsCancelAlertVisible] = useState(false);
  const [reservation, setReservation] = useState({});
  const [date, setDate] = useState(new Date().toISOString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [service, setService] = useState({});

  const handelService = (e) => setService(e.target.value);

  const toggleIsCancelAlertVisible = () => {
    setIsCancelAlertVisible(!isCancelAlertVisible);
  };
  const cancelEdit = () => {
    toggleIsCancelAlertVisible();
  };
  const cancel = () => {
    toggleIsCancelAlertVisible();
    navigation.goBack();
  };
  const edit = () => {
    reservations
      .update(id, {
        service,
        date,
        time,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSelectTime = (value) => {
    const hours = value.split(":")[0];
    const minutes = value.split(":")[1];
    const dateTime = new Date();
    dateTime.setHours(parseInt(hours));
    dateTime.setMinutes(parseInt(minutes));
    setTime(dateTime.toLocaleTimeString());
  };

  const onSelectDate = (value) => {
    const newDate = new Date();
    newDate.setDate(parseInt(date));
    setDate(newDate);
  };

  useEffect(() => {
    let ignore = false;

    if (!ignore)
      reservationApi
        .getById(id)
        .then((response) => response.data)
        .then((data) => {
          setReservation(new Reservation(data));
        });

    return () => (ignore = true);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.backButton} onPress={cancelEdit}>
            <Icon size={30} name="close-outline" color="#333333" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit reservation</Text>
          <TouchableOpacity style={styles.backButton} onPress={edit}>
            <Icon size={30} name="checkmark-outline" color="#333333" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        ></ScrollView>

        <TouchableOpacity
          style={styles.ChooseButton}
          onPress={() => navigation.navigate("Choose-reservation")}
        >
          <Icon name="repeat" size={30} color="gray" />
          <Text style={styles.ChooseButtonText}>Choose a service</Text>
        </TouchableOpacity>
        <View style={styles.textBox}>
          <View style={{ marginTop: 15 }}>
            <View style={styles.flexBox}>
              <Text>Date</Text>
              <Icon name="chevron-forward" size={15} />
            </View>
            <DatePicker onSelect={onSelectDate} />
          </View>
          <View style={{ marginTop: 15 }}>
            <View style={styles.flexBox}>
              <Text>Hour</Text>
              <Icon name="chevron-forward" size={15} />
            </View>
            <TimePicker onSelect={onSelectTime} />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={() => {}}>
            <Text style={styles.loginBtnTxt}>Edit</Text>
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
                onPress={toggleIsCancelAlertVisible}
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
  ChooseButton: {
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: "gray",
    alignItems: "center",
  },
  ChooseButtonText: {
    marginLeft: 10,
    color: "gray",
  },
});
