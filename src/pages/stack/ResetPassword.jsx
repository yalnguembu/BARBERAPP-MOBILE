import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BackIcon from "react-native-vector-icons/Ionicons";

function ResetPassword({ navigation }) {
  const [email, setEmail] = useState("");
  const [send, setSend] = useState(false);
  const handelEmail = (e) => setEmail(e.target.value);
  const handelSend = () => setSend(!send);

  const ResetPassword = () => {
    setEmail("");
    handelSend();
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backbtn}
          >
            <BackIcon size={35} color="#202020" name="arrow-back" />
          </TouchableOpacity>
          <View style={styles.textBox}>
            <Text style={styles.h1}>Reinitialiser mot de passe</Text>
            <Text style={styles.h2}>
              Entrez votre adresse email pour le reinitialiser .
            </Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="email"
            value={email}
            onChange={handelEmail}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.loginBtn} onPress={ResetPassword}>
            <Text style={styles.loginBtnTxt}>Reinitialiser</Text>
          </TouchableOpacity>
        </View>
      </View>
      {send ? (
        <View style={styles.alertContainer}>
          <View style={styles.alert}>
            <Text style={styles.h1}>Information</Text>
            <Text>
              Un mail vous a été envoyer a cette address suivez les instructions
              contenu dans le mail
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("main")}
              style={styles.alertBtn}
            >
              <Text style={styles.alertBtnText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

export default ResetPassword;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    padding: 30,
  },
  backbtn: {
    marginBottom: 20,
  },
  textBox: {
    marginBottom: 10,
  },
  h1: {
    fontSize: 30,
    fontWeight: "700",
  },
  h2: {
    fontSize: 24,
  },
  loginBtn: {
    width: "100%",
    height: 55,
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
  input: {
    width: "100%",
    height: 55,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    marginTop: 20,
  },
  password: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    marginTop: 20,
  },
  passwordInput: {
    flex: 1,
  },
  forgetLink: {
    fontSize: 17,
    fontWeight: "500",
    textAlign: "right",
    color: "dodgerblue",
    padding: 10,
  },
  registerLink: {
    fontSize: 17,
    textAlign: "center",
    padding: 10,
  },
  registerLinkTxt: {
    fontWeight: "500",
    color: "dodgerblue",
  },
  alert: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    elevation: 3,
    borderRadius: 10,
    textAlign: "center",
  },
  alertContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#20202050",
  },
  alertBtn: {
    width: "100%",
    padding: 10,
    backgroundColor: "#202020",
    borderRadius: 10,
    marginTop: 10,
  },
  alertBtnText: {
    textAlign: "center",
    color: "#fff",
  },
});
