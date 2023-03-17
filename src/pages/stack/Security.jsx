import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function Security({ navigation }) {
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [user, setUser] = useState({});
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handelNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handelConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handelOldPassword = (e) => {
    setOldPassword(e.target.value);
  };
  const handelIsEditFormVisible = () => {
    setIsEditFormVisible(!isEditFormVisible);
  };
  const cancel = () => {
    handelIsEditFormVisible();
  };
  const save = () => {
    navigation.goBack();
  };
  const getUser = () => {
    setUser({
      id: "33jjjjss",
      username: "Mazeking",
      email: "mazeking@gmail.com",
      img: require("../../assets/images/service-6.png"),
    });
  };
  const handelBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {isEditFormVisible && (
        <View style={styles.editPasssContainer}>
          <TouchableOpacity
            onPress={handelIsEditFormVisible}
            style={{ flex: 1 }}
          ></TouchableOpacity>
          <View style={styles.esditPasssMain}>
            <Text style={styles.selectImgTxt}>Modifier mot de passe</Text>
            <View style={styles.textBox}>
              <TextInput
                placeholder="Ancien mot de passe"
                value={oldPassword}
                onChange={handelOldPassword}
                style={styles.input}
              />
            </View>
            <View style={styles.textBox}>
              <TextInput
                placeholder="Nouveau mot de passe"
                value={newPassword}
                onChange={handelNewPassword}
                style={styles.input}
              />
            </View>
            <View style={styles.textBox}>
              <TextInput
                placeholder="Confirmez mot de passe"
                value={confirmpassword}
                onChange={handelConfirmPassword}
                style={styles.input}
              />
            </View>
            <View style={styles.flexBox}>
              <TouchableOpacity style={styles.delAlertBtn} onPress={cancel}>
                <Text style={styles.delAlertBtnTxt}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.delAlertBtn2} onPress={save}>
                <Text style={styles.delAlertBtnTxt2}>Enregistrer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
     
     <View style={styles.header}>
        <Text style={styles.title}>Mes reservations</Text>
        <View style={styles.btnGroup}>
          <TouchableOpacity onPress={handelFilter}>
            <Ionicons size={23} name="filter" color="#333333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("reservationsearch")}>
            <Ionicons size={22} name="search" color="#333333" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.flexRow}
              onPress={handelIsEditFormVisible}
            >
              <Ionicons name="square" size={27} />
              <Text style={styles.titleBox}>Modifier mot de pase</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <TouchableOpacity
              style={styles.flexRow}
              onPress={() => navigation.navigate("resetpassword")}
            >
              <Ionicons name="square" size={27} />
              <Text style={styles.titleBox}>Renitialiser mot de pase</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Security;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  editButton: {
    alignSelf: "flex-start",
    margin: 10,
    elevation: 5,
    paddingBottom: 10,
  },
  main: {
    width: Dimensions.get("screen").width - 60,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 15,
  },
  header: {
    padding: 10,
  },
  header: {
    width: "100%",
    padding: 15,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:"#fff",
    elevation:5
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#202020",
    textAlign: "center",
    padding: 15,
  },
  body: {
    padding: 10,
    borderTopColor: "#eee",
    borderTopWidth: 1,
  },
  textBox: {
    marginBottom: 15,
  },
  titleBox: {
    fontWeight: "bold",
    fontSize: 17,
    padding: 15,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  editPasssContainer: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    height: "100%",
    backgroundColor: "#00000020",
    justifyContent: "flex-end",
    zIndex: 10,
  },
  esditPasssMain: {
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
    backgroundColor: "#fff",
    elevation: 6,
    // zIndex:100
  },
  selectImgTxt: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "lightgray",
    padding: 15,
  },
  flexBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  delAlertBtn: {
    borderRadius: 10,
    padding: 10,
    flex: 1,
    textAlign: "center",
    marginRight: 10,
    backgroundColor: "#eeeeee",
    marginTop: 20,
  },
  delAlertBtn2: {
    borderRadius: 10,
    padding: 10,
    flex: 1,
    textAlign: "center",
    marginLeft: 10,
    backgroundColor: "#202020",
    marginTop: 20,
  },
  delAlertBtnTxt: {
    fontWeight: "bold",
    fontSize: 19,
  },
  delAlertBtnTxt2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 19,
  },
});
