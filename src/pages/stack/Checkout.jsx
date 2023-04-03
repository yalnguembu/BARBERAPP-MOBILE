import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Card from "../../components/checkout/Card";

const paiementMethods = [
  {
    id: 0,
    name: "Paypal",
    picture: require("../../assets/images/paypal.jpg"),
  },
  {
    id: 1,
    name: "Visa",
    picture: require("../../assets/images/visa.png"),
  },
  {
    id: 2,
    name: "Orange Money",
    picture: require("../../assets/images/om.png"),
  },
  {
    id: 3,
    name: "MTN Mobile Money",
    picture: require("../../assets/images/mtn2.jpg"),
  },
];
const Checkout = ({ navigation }) => {
  const [selected, setSelected] = useState(-1);
  const [activeTab, setActiveTab] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");

  const next = () => selected !== -1 && setActiveTab(activeTab + 1);

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon size={30} name="arrow-back" color="#333333" />
        </TouchableOpacity>
        <View style={styles.flexBox}>
          <Text style={styles.title}>Checkout</Text>
        </View>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {activeTab === 0 ? (
          <View style={styles.main}>
            <Text style={styles.h1}>Paiment method</Text>
            <View style={styles.servicesBox}>
              {paiementMethods.map((paiementMethod) => (
                <Card
                  paiementMethod={paiementMethod}
                  key={paiementMethod.id}
                  selected={selected === paiementMethod.id}
                  onSelect={setSelected}
                />
              ))}
            </View>
            <TouchableOpacity style={styles.buyButton} onPress={next}>
              <Text style={styles.buyButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.main}>
            <Text style={styles.h1}>Paiment</Text>
            <TouchableOpacity
              style={styles.prevButton}
              onPress={() => setActiveTab(activeTab - 1)}
            >
              <Text style={styles.prevButtonText}>Previous</Text>
            </TouchableOpacity>
            <Image
              source={paiementMethods[selected].picture}
              style={styles.image}
            />
            <Text style={styles.h1}>Phone number</Text>
            <TextInput
              style={styles.input}
              placeholder="677 777 777"
              placeholderTextColor="gray"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => setActiveTab(activeTab + 1)}
            >
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Checkout;

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
    backgroundColor: "#fff",
    elevation: 5,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 5,
    marginLeft: 10,
  },
  h1: {
    fontSize: 19,
    fontWeight: "700",
    marginBottom: 5,
    marginLeft: 10,
  },
  loaderContainer: {
    width: Dimensions.get("screen").width,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    padding: 15,
    paddingVertical: 25,
  },
  buyButton: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 15,
    backgroundColor: "#222",
    borderRadius: 8,
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  buyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  prevButton: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 15,
    backgroundColor: "#888",
    borderRadius: 8,
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  prevButtonText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  flexBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  servicesBox: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  input: {
    width: "100%",
    height: 55,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: "50%",
    height: "50%",
    marginHorizontal: "25%",
    marginVertical: 20,
  },
});
