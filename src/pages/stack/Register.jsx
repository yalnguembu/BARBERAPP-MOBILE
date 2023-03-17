import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BackIcon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { loginStart, loginFail, loginSuccess } from "../../redux/userReducer";

function Register({ navigation }) {
  const dispatch = useDispatch();
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
  const checkConfirmPass = () => {
    if (password !== confirmPass && password.length < 0) return false;
    return true;
  };
  const register = () => {
    if (checkEmail() & checkPassword & checkConfirmPass()) {
      dispatch(loginStart());
      const URL = "http://127.0.0.1:5000/api/auth/register";
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
          loginFail();
        });
      setEmail("");
      setPassword("");
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
          <BackIcon size={35} color="#202020" name="arrow-back" />
        </TouchableOpacity>
        <View style={styles.textBox}>
          <Text style={styles.h1}>Register</Text>
          <Text style={styles.h2}>Rejoiniez nous. Ensemble on ira loin!</Text>
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
        <View style={styles.password}>
          <TextInput
            placeholder="Confirm password"
            value={confirmPass}
            onChange={handelConfirmPass}
            style={styles.passwordInput}
            secureTextEntry={secure2 ? true : false}
          />
          <TouchableOpacity onPress={handelSecure2}>
            <BackIcon size={25} color="#202020" name="eye" />
          </TouchableOpacity>
        </View>

        {!checkConfirmPass() && (
          <Text style={styles.errorText}>Les deux ne correspondent pas</Text>
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
    // textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  errorAlert: {
    backgroundColor: "#CF414B10",
    borderLeftColor: "#CF414B",
    borderLeftWidth: 3,
    marginVertical: 12,
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
});
