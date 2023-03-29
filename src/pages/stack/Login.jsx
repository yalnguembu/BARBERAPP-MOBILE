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

function Login({ navigation }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { currentUser } = state.user;

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const handelSecure = () => setSecure(!secure);

  const checkEmail = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z0-9]/;
    return email.match(emailRegex);
  };

  const checkPassword = () => {
    const PasswordRegex =
      /[A-Z]+.*[0-9]+.*[^\W]+|[A-Z]+.*[^\w]+.*[0-9]+[0-9]+.*[A-Z]+.*[^\w]+|[0-9]+.*[^\w]+.*[A-Z]+|[^\w]+.*[A-Z]+.*[0-9]+|[^\w]+.*[0-9]+.*[A-Z]+/;
    return password.match(PasswordRegex)
  };

  const sigin = () => {
    if (!email.length || !password.length) {
      setError("Please filled you crudentials");
    }
    if (checkEmail() && checkPassword()) {
      auth
        .login({ email, password })
        .then((response) => response.data)
        .then(async (data) => {
          dispatch(setUser(data));
          setAuthToken(data.accessToken);
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
      setError("Please field your credential correctly");
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
          <Text style={styles.h1}>Login</Text>
          <Text style={styles.h2}>Content de vous revoir.</Text>
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
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.password}>
          <TextInput
            placeholder="password"
            placeholderTextColor="gray"
            value={password}
            onChangeText={setPassword}
            style={styles.passwordInput}
            secureTextEntry={secure ? true : false}
          />
          <TouchableOpacity onPress={handelSecure}>
            <Icon size={25} color="#202020" name="eye" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("resetpassword")}>
          <Text style={styles.forgetLink}>Password forget?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.registerLink}>
          Pas encore inscript?
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={styles.registerLinkTxt}> Inscription</Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity style={styles.loginBtn} onPress={sigin}>
          <Text style={styles.loginBtnTxt}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;

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
    fontSize: 25,
    fontWeight: "700",
  },
  h2: {
    fontSize: 17,
    color: "gray",
    marginTop: 10,
  },
  loginBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "#202020",
    justifyContent: "center",
    alignItems: "center",
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
  errorAlert: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  errorText: {
    color: "orangered",
    fontWeight: "bold",
    marginVertical: 10,
    marginBottom: 0,
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
