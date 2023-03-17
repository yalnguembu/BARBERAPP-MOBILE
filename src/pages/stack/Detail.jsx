import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
// import DateTimePicker from "@react-native-community/datetimepicker"; //a commenter pour lancer dans le navigateur
import Tag from "../../components/Detail/Tag";

function Detail({ navigation, route }) {
  const defaultProduct = {
    name: "",
    price: 0,
    desc: "",
    tags: [],
  };
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timePicker, setTimePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [product, setProduct] = useState(defaultProduct);

  const schelde = () => {
    navigation.navigate("reservations");
  };
  function showDatePicker() {
    setDatePicker(true);
  }
  function showTimePicker() {
    setTimePicker(true);
  }
  function onDateSelected(event, value) {
    setDatePicker(false);
    setDate(value.toLocalDateString("fr-FR"));
  }
  function onTimeSelected(event, value) {
    setTimePicker(false);
    setTime(value);
  }
  useEffect(() => {
    if (typeof route.params !== "undefined" && route.params.product !== "") {
      const { product } = route.params;
      let imgName = "service-4.png";
      setProduct({
        name: product,
        price: 3500,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat commodi incidunt numquam aperiam laboriosam, vitae earum. Nihil ipsum ex",
        tags: ["coifure homme", " teinture", "soins du visage"],
        img: require(`../../assets/images/${imgName}`),
      });
    } else {
      navigation.goBack();
    }
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Image source={product.img} style={styles.imageBg} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backbtn}
        >
          <Ionicons size={35} color="#202020" name="arrow-back" />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price} F</Text>
          {/* <View style={styles.tagsBox}>
            {product.tags.map((tagName, index) => (
              <Tag key={index} name={tagName} />
            ))}
          </View>*/}
          <Text style={styles.desc}>{product.desc}</Text>
          <View>
            <View style={styles.dateGroup}>
              <View style={styles.textBox}>
                <Text style={styles.titleBox}>Date</Text>
                <View style={styles.dateBox}>
                  <TextInput
                    value={date.toLocaleDateString()}
                    onChange={onDateSelected}
                    style={styles.input}
                  />
                  <TouchableOpacity onPress={showDatePicker}>
                    <Ionicons name="calendar" size={25} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.textBox}>
                <Text style={styles.titleBox}>Heure</Text>
                <View style={styles.dateBox}>
                  <TextInput
                    value={time.toLocaleTimeString().substring(0, 5)}
                    onChange={onDateSelected}
                    style={styles.input}
                  />
                  <TouchableOpacity
                    style={styles.formBtn}
                    onPress={showTimePicker}
                  >
                    <Ionicons name="time" size={25} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={schelde}>
              <Text style={styles.loginBtnTxt}>Schelde</Text>
            </TouchableOpacity>
            {datePicker && (
              <></>
              // <DateTimePicker
              //   value={date}
              //   mode={"date"}
              //   display={Platform.OS === "ios" ? "spinner" : "default"}
              //   is24Hour={true}
              //   onChange={onDateSelected}
              //   style={styles.datePicker}
              // />
            )}
            {timePicker && (
              <></>
              // <DateTimePicker
              //   value={time}
              //   mode={"time"}
              //   display={Platform.OS === "ios" ? "spinner" : "default"}
              //   is24Hour={false}
              //   onChange={onTimeSelected}
              //   style={styles.datePicker}
              // />
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  imageBg: {
    width: "100%",
    height: 250,
    padding: 20,
    backgroundColor: "lightgrey",
  },
  img: {
    width: "100%",
    height: 250,
  },
  main: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
    height: "75%",
  },
  backbtn: {
    width: 50,
    height: 40,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 16,
    position: "absolute",
    top: 20,
    left: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
  },
  price: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 10,
  },
  desc: {
    fontSize: 17,
    color: "#606060",
    marginVertical: 15,
  },
  tagsBox: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  loginBtn: {
    width: "100%",
    height: 55,
    backgroundColor: "#202020",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 90,
    
  },
  loginBtnTxt: {
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
  },
  dateGroup: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textBox: {
    width: "45%",
  },
  titleBox: {
    fontSize: 20,
    marginBottom: 5,
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
  input: {
    flex: 1,
    width: "70%",
    fontSize: 16,
  },
  formLabel: {
    fontSize: 17,
    color: "#202020",
    fontWeight: "500",
  },
  dateInput: {
    width: 150,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 5,
  },
  textDate: {
    fontSize: 16,
    color: "gray",
    fontWeight: "400",
  },
});
