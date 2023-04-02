import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Reservation } from "../../domains/reservation";
import { reservations as reservationApi, reservations } from "../../services";
import { date } from "../../utils/common";

function ReservationView({ navigation, route }) {
  const id = route.params?.id;
  if (!id) navigation.goBack();

  const [isCancelAlertVisible, setIsCancelAlertVisible] = useState(false);
  const [reservation, setReservation] = useState(new Reservation());

  const toggleIsCancelAlertVisible = () => {
    setIsCancelAlertVisible(!isCancelAlertVisible);
  };

  const cancelReservation = () => {
    toggleIsCancelAlertVisible();
    reservations
      .cancel(id)
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        toggleIsCancelAlertVisible();
      });
  };

  const handelEdit = () => {
    navigation.navigate("editreservation", { id: reservation.id });
  };

  useEffect(() => {
    let ignore = false;

    if (!ignore)
      reservationApi
        .getById(id)
        .then((response) => response.data)
        .then((data) => {
          console.log(new Reservation(data).isCanceled);
          setReservation(new Reservation(data));
        });

    return () => (ignore = true);
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon size={30} name="arrow-left" color="#333333" />
      </TouchableOpacity>
      <>
        {reservation ? (
          <>
            <View style={styles.main}>
              <View style={styles.header}>
                <Text style={styles.title}>{reservation.serviceName}</Text>
                <View style={styles.dateBox}>
                  <Icon size={18} name="calendar" color="#ffffffc0" />
                  <Text style={styles.dateText}>
                    {date().toLocalDateString(reservation.fullDate)}
                  </Text>
                </View>
                <View style={styles.dateBox}>
                  <Icon size={18} name="clock-time-four" color="#ffffffc0" />
                  <Text style={styles.dateText}>{reservation.time}</Text>
                </View>
                {reservation.seen && (
                  <Text style={styles.seen}>
                    <Icon size={18} name="check" color="#ffffffc0" /> Vue
                  </Text>
                )}
              </View>
              <View style={styles.body}>
                <View style={styles.textBox}>
                  <Text style={styles.titleBox}>Description</Text>
                  <Text style={styles.descText}>
                    {reservation.serviceDescription}
                  </Text>
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.titleBox}>Prix</Text>
                  <Text style={styles.descText}>
                    {reservation.servicePrice}
                  </Text>
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.titleBox}>Maker</Text>
                  <Text style={styles.descText}>anyone</Text>
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.titleBox}>Durée</Text>
                  <Text style={styles.descText}>
                    {`${reservation.serviceDuration} min `}
                  </Text>
                </View>
              </View>
            </View>
            {reservation.isCanceled ? (
              <View style={styles.canceledBox}>
                <Text style={styles.canceledText}>canceled</Text>
              </View>
            ) : (
              <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={handelEdit}>
                  <Icon size={25} name="calendar-edit" color="#333333" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={toggleIsCancelAlertVisible}
                >
                  <Icon size={25} name="close" color="#333333" />
                </TouchableOpacity>
              </View>
            )}
          </>
        ) : (
          <></>
        )}
      </>

      {isCancelAlertVisible && (
        <View style={styles.delAlertContainer}>
          <View style={styles.delAlert}>
            <Text style={styles.delAlertTxt}>Annuler cette reservation?</Text>
            <View style={styles.flexBox}>
              <TouchableOpacity
                style={styles.delAlertBtn}
                onPress={toggleIsCancelAlertVisible}
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

export default ReservationView;
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
    elevation: 5,
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
  canceledBox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginLeft: 20,
    width: 200,
  },
  canceledText: {
    color: "red",
    fontSize: 14,
  },
});
