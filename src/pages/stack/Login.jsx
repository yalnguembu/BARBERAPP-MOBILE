import { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BackIcon from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { loginStart, loginFail, loginSuccess } from "../../redux/userReducer";

function Login({ navigation }) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const handelEmail = (e) => setEmail(e.target.value);
  const handelPassword = (e) => setPassword(e.target.value);
  const handelSecure = () => setSecure(!secure);

  const checkEmail = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]+[a-zA-Z0-9]/;
    const valideEmail = emailRegex.test(email);
    if (email.length > 0) {
      return valideEmail;
    }
    return true;
  };
  const checkPassword = () => {
    const PasswordRegex =
      /[A-Z]+.*[0-9]+.*[^\W]+|[A-Z]+.*[^\w]+.*[0-9]+[0-9]+.*[A-Z]+.*[^\w]+|[0-9]+.*[^\w]+.*[A-Z]+|[^\w]+.*[A-Z]+.*[0-9]+|[^\w]+.*[0-9]+.*[A-Z]+/;
    const validePassword = PasswordRegex.test(password);
    if (password.length > 0) return validePassword;
    return true;
  };
  const login = () => {
    if (
      checkEmail &&
      checkPassword &&
      email.length > 1 &&
      password.length > 1
    ) {
      dispatch(loginStart());
      const URL = "http://127.0.0.1:5000/api/auth/login";
      // const URL = "http://192.168.43.235:5000/api/auth/login";
      fetch(URL, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          if (json._id) {
            dispatch(loginSuccess(json));
            navigation.navigate("main");
          }
        })
        .catch((error) => {
          console.error(error);
          loginFail();
        });
      setEmail("");
      setPassword("");
    } else {
      setError("veillez verifier vos identifiants");
    }
  };

  useEffect(() => {
    if (currentUser !== null) navigation.navigate("main");
  }, []);

  return (
    <View style={styles.main}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backbtn}
        >
          <BackIcon size={35} color="#202020" name="arrow-back" />
        </TouchableOpacity>
        <View style={styles.textBox}>
          <Text style={styles.h1}>Login</Text>
          <Text style={styles.h2}>Content de vous revoir.</Text>
        </View>
        {error.length > 0 && (
          <View style={styles.errorAlert}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChange={handelEmail}
        />
        {!checkEmail() && (
          <Text style={styles.errorText}>Addresse email invalide</Text>
        )}
        <View style={styles.password}>
          <TextInput
            placeholder="password"
            value={password}
            onChange={handelPassword}
            style={styles.passwordInput}
            secureTextEntry={secure ? true : false}
          />
          <TouchableOpacity onPress={handelSecure}>
            <BackIcon size={25} color="#202020" name="eye" />
          </TouchableOpacity>
        </View>
        {!checkPassword() && (
          <Text style={styles.errorText}>Mot de passe invalide</Text>
        )}
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
        <TouchableOpacity style={styles.loginBtn} onPress={login}>
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
  errorText: {
    color: "crimson",
    // textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
  errorAlert: {
    backgroundColor: "#CF414B10",
    borderLeftColor: "#CF414B",
    borderLeftWidth: 3,
    marginVertical:12,
    padding:10
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
