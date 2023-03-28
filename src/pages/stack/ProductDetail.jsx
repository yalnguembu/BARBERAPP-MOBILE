import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TimePicker from "../../components/Services/TimePicker";
import DatePicker from "../../components/Services/DatePicker";
import { services } from "../../services/services";
import { reservations } from "../../services/reservations";

function Detail({ navigation, route }) {
  const defaultProduct = {
    _id: "wfegr0",
    name: "",
    price: 0,
    duration: 0,
    description: "",
    category: "",
    picture: "",
  };

  const [service, setService] = useState(defaultProduct);
  const [date, setDate] = useState(new Date().toISOString());
  const [time, setTime] = useState("08:30");
  const [isLoading, setIsLoading] = useState(true);

  const reserve = () => {
    const reservation = {
      date,
      time,
      service: {
        ...service,
        id: service._id,
      },
      client: {
        email: "client.user3@gmail.com",
        username: "client user 2",
        id: "64102e0fe68d740e89e57e11",
      },
      maker: "anyone",
    };
    console.log(reservation);

    reservations
      .create(reservation)
      .then((response) => {
        navigation.navigate("reservations");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSelectTime = (time) => {
    setTime(time);
  };

  const onSelectDate = (date) => {
    setDate(date);
  };

  useEffect(() => {
    if (route.params.id) {
      const { id } = route.params;
      services
        .getById(id)
        .then((response) => response.data)
        .then((data) => {
          setIsLoading(false);
          setService(data);
        });
    } else {
      navigation.goBack();
    }
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          <View>
            <Image
              source={require(`../../assets/images/service-default.png`)}
              style={styles.imageBg}
              resizeMethod="resize"
            />

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Icon size={35} color="#fff" name="arrow-back" />
            </TouchableOpacity>
          </View>
          <View style={styles.main}>
            <View>
              <Text style={styles.name}>
                {service.name && service.name.substring(0, 12)}
              </Text>
              <View style={styles.flexBox}>
                <Text style={styles.price}>{service.price} xaf</Text>
              </View>
              <View>
                <Text style={styles.description}>{service.description}</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View sty4={{ marginTop: 15 }}>
                <View style={styles.buttonGroup}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Icon size={25} name="remove" color="dark" />
                  </TouchableOpacity>
                  <Text style={styles.number}>{1}</Text>
                  <TouchableOpacity style={styles.actionButton}>
                    <Icon size={25} name="add" color="dark" />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.loginBtn} onPress={reserve}>
                <Text style={styles.loginBtnTxt}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#fff",
  },
  imageBg: {
    width: Dimensions.get("screen").width,
    height: 300,
    padding: 20,
    backgroundColor: "lightgrey",
  },
  main: {
    padding: 20,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    backgroundColor: "#20202030",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 16,
  },
  card: {
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    paddingTop: 15,
  },
  loginBtn: {
    width: "100%",
    height: 55,
    backgroundColor: "#202020",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  loginBtnTxt: {
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
  },
  name: {
    fontSize: 35,
    fontWeight: "700",
    color: "#232b2b",
  },
  flexBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 21,
    color: "#232b2b",
    marginTop: 15,
    fontWeight: "bold",
  },
  button: {
    padding: 7,
    borderRadius: 50,
    backgroundColor: "#232b2b",
    marginTop: 10,
  },
  description: {
    color: "#888",
    marginTop: 15,
    fontSize: 17,
  },
  buttonGroup: {
    width: 150,
    backgroundColor: "#f1f1f1",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
  actionButton: {
    backgroundColor: "#e1e1e1",
    padding: 1,
    borderRadius: 5,
    width: 50,
    height: 50,
    padding: 13,
  },
  number: {
    textAlign: "center",
    padding: 5,
    fontSize: 19,
  },
});
