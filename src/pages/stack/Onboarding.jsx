import { Dimensions } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Img from "../../assets/images/ghostbarber.png";

function Onboarding({ navigation }) {
  return (
    <View style={styles.main}>
      <View>
        <Image
          source={Img}
          style={styles.img}
          resizeMethod="resize"
          resizeMode="cover"
        />
        <Text style={styles.h1}>Welcome to the ghost barber app</Text>
        <Text style={styles.h2}>
          La prise de rendez-vous qui vient vers vous tendez lui la main{" "}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.loginBtnTxt}>Login</Text>
        </TouchableOpacity>
        <View style={styles.flexBox}>
          <View style={styles.hr} />
          <Text style={styles.textOr}>or</Text>
          <View style={styles.hr} />
        </View>
        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.registerBtnTxt}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Onboarding;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "space-between",
  },
  img: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  h1: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
  },
  h2: {
    fontSize: 15,
    color: "gray",
    textAlign: "center",
  },
  loginBtn: {
    backgroundColor: "#202020",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
  },
  loginBtnTxt: {
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
  },
  registerBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    backgroundColor: "#e1e1e190",
  },
  registerBtnTxt: {
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
  },
  hr: {
    width: Dimensions.get("screen").width / 3 - 40,
    marginHorizontal: 15,
    backgroundColor: "#eee",
    height: 3,
    borderRadius: 50,
    marginVertical: 20,
  },
  flexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textOr: {
    color: "#888",
    fontSize: 19,
  },
});
