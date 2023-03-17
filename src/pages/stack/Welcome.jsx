import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Img from "../../assets/images/ghostbarber.png";

function Welcome({navigation}) {
  return (
    <View style={styles.main}>
      <View>
        <Image source={Img} style={styles.img} resizeMethod="resize" resizeMode="cover" />
        <Text style={styles.h1}>Welcome to the ghost barber app</Text>
        <Text style={styles.h2}>
          La prise de rendez-vous qui vient vers vous tendez lui la main{" "}
        </Text>
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>{navigation.navigate("login")}}>
          <Text style={styles.loginBtnTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn} onPress={()=>{navigation.navigate("register")}}>
          <Text style={styles.registerBtnTxt}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F90C71",
    padding: 30,
    justifyContent:"space-between"
  },
  img: {
    width: "100%",
    height: 300,
    marginBottom:20
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
  btnBox: {
    width: "100%",
    height: 70,
    backgroundColor: "#e1e1e190",
    borderRadius: 10,
    flexDirection: "row",
  },
  loginBtn: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  loginBtnTxt: {
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
  },
  registerBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  registerBtnTxt: {
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
  },
});