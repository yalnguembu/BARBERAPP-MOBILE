import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/userReducer";
import { auth, setAuthToken } from "../../services";
import { storeToken } from "../../utils/asyncStorage";

function Register({ navigation }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { currentUser } = state.user;

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [secure, setSecure] = useState(true);
  const [secure2, setSecure2] = useState(true);

  const handelConfirmPass = (e) => setConfirmPass(e.target.value);
  const handelEmail = (e) => setEmail(e.target.value);
  const handelPassword = (e) => setPassword(e.target.value);
  const handelSecure = () => setSecure(!secure);
  const handelSecure2 = () => setSecure2(!secure2);

  const checkEmail = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z0-9]/;
    return email.match(emailRegex);
  };

  const checkPassword = () => {
    const PasswordRegex =
      /[A-Z]+.*[0-9]+.*[^\W]+|[A-Z]+.*[^\w]+.*[0-9]+[0-9]+.*[A-Z]+.*[^\w]+|[0-9]+.*[^\w]+.*[A-Z]+|[^\w]+.*[A-Z]+.*[0-9]+|[^\w]+.*[0-9]+.*[A-Z]+/;
    return password.match(PasswordRegex);
  };
  const checkConfirmPass = () => {
    return password.length && password === confirmPass;
  };

  const register = () => {
    if (checkEmail() && checkPassword && checkConfirmPass() | true) {
      auth
        .register({ email, password })
        .then((response) => response.data)
        .then(async (data) => {
          dispatch(setUser(data));
          await storeToken(data.accessToken);
          navigation.navigate("main");
        })
        .catch((error) => {
          setError(error.response.data.message);
          console.error(error.response.data.message);
        })
        .finally(() => {
          setEmail("");
          setPassword("");
        });
    } else {
      setError("veillez verifier vos identifiants");
    }
  };
  return (
    <View style={styles.main}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backbtn}
        >
          <Icon size={35} color="#202020" name="arrow-back" />
        </TouchableOpacity>
        <View style={styles.textBox}>
          <Text style={styles.h1}>Register</Text>
          <Text style={styles.h2}>Rejoiniez nous. Ensemble on ira loin!</Text>
        </View>
        {error.length > 0 && (
          <View style={styles.errorAlert}>
            <Icon color="orangered" name="warning" size={21} />
            <Text style={styles.errorText}>{" " + error}</Text>
          </View>
        )}
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChange={handelEmail}
        />

        <View style={styles.password}>
          <TextInput
            placeholder="password"
            value={password}
            onChange={handelPassword}
            style={styles.passwordInput}
            secureTextEntry={secure ? true : false}
          />
          <TouchableOpacity onPress={handelSecure}>
            <Icon size={25} color="#202020" name="eye" />
          </TouchableOpacity>
        </View>
        <View style={styles.password}>
          <TextInput
            placeholder="Confirm password"
            value={confirmPass}
            onChange={handelConfirmPass}
            style={styles.passwordInput}
            secureTextEntry={secure2 ? true : false}
          />
          <TouchableOpacity onPress={handelSecure2}>
            <Icon size={25} color="#202020" name="eye" />
          </TouchableOpacity>
        </View>

        {checkPassword.length && !checkConfirmPass() ? (
          <Text style={styles.errorText}>Les deux ne correspondent pas</Text>
        ) : (
          <></>
        )}
      </View>
      <View>
        <Text style={styles.registerLink}>
          Déja inscript?
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={styles.registerLinkTxt}> Connexion</Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity style={styles.loginBtn} onPress={register}>
          <Text style={styles.loginBtnTxt}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    justifyContent: "space-between",
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
  errorText: {
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
  },
  errorAlert: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
});
