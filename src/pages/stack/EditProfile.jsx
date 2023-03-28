import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function EditProfile({ navigation }) {
  const [isSelectImageVisible, setIsSelectImageVisible] = useState(false);
  const [userId, setUserId] = useState({});
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [img, setImg] = useState({});

  const getUser = () => {
    setEmail("mazeking@gmail.com");
    setUsername("Mazeking");
    setImg(require("../../assets/images/service-1.png"));
    setUserId("33jjjjss");
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelUsername = (e) => {
    setUsername(e.target.value);
  };
  const handelIsSelectImageVisible = () => {
    setIsSelectImageVisible(!isSelectImageVisible);
  };
  const cancel = () => {
    navigation.goBack();
  };
  const save = () => {
    navigation.goBack();
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.backButton} onPress={cancel}>
            <Ionicons size={30} name="close-outline" color="#333333" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit profile</Text>
          <TouchableOpacity style={styles.backButton} onPress={save}>
            <Ionicons size={30} name="checkmark-outline" color="#333333" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.imgContainer}>
          <Image source={img} style={styles.img}></Image>
          <TouchableOpacity style={styles.pictureBtn} onPress={handelIsSelectImageVisible}>
            <Ionicons size={30} name="camera-outline" color="#333333" />
          </TouchableOpacity>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Email</Text>
          <TextInput
            value={email}
            onChange={handelEmail}
            style={styles.dateBox}
          />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.titleBox}>Username</Text>
          <TextInput
            value={username}
            onChange={handelUsername}
            style={styles.dateBox}
          />
        </View>
      </View>
      {isSelectImageVisible && (
        <TouchableOpacity style={styles.selectImgContainer} onPress={handelIsSelectImageVisible}>
          <View style={styles.selectImgMain}>
            <View style={styles.flexBox}>
              <Text style={styles.selectImgTxt}>Photo de profile</Text>
              <TouchableOpacity
                style={styles.selectImgBtn}
                onPress={handelIsSelectImageVisible}
              >
                <Ionicons size={20} name="trash-outline" />
              </TouchableOpacity>
            </View>
            <View style={styles.flexBox2}>
              <View style={styles.select}>
                <TouchableOpacity
                  style={styles.selectImgBtn2}
                  onPress={handelIsSelectImageVisible}
                >
                  <Ionicons size={30} name="image" />
                </TouchableOpacity>
                <Text style={styles.selectImgBtnTxt2}>Gallerie</Text>
              </View>
              <View style={styles.select}>
                <TouchableOpacity
                  style={styles.selectImgBtn2}
                  onPress={handelIsSelectImageVisible}
                >
                  <Ionicons size={30} name="camera" />
                </TouchableOpacity>
                <Text style={styles.selectImgBtnTxt2}>Camera</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default EditProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    width: Dimensions.get("screen").width - 60,
    height: "75%",
    marginBottom: 20,
    borderRadius: 10,
    marginHorizontal: 30,
  },
  header: {
    padding: 30,
    textAlign: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 19,
  },
  title: {
    fontSize: 27,
    fontWeight: "400",
    color: "#fff",
    marginBottom: 10,
  },
  imgContainer: {
    marginRight: 10,
    alignSelf: "center",
    // marginVertical: 15,
    overflow: "hidden",
  },
  img: {
    width: 155,
    height: 155,
    borderRadius: 155,
    resizeMode: "cover",
  },
  pictureBtn: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#fff",
    elevation: 6,
    zIndex: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  dateBox: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 15,
    borderRadius: 10,
  },
  textBox: {
    // paddingVertical: 15,
  },
  titleBox: {
    fontSize: 20,
    marginBottom: 5,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectImgContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#00000020",
    justifyContent: "flex-end",
  },
  selectImgMain: {
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
    backgroundColor: "#fff",
    elevation: 6,
  },
  selectImgTxt: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 15,
    textAlign: "center",
  },
  flexBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexBox2: {
    flexDirection: "row",
  },
  selectImgBtn: {
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
    marginHorizontal: 10,
  },
  selectImgBtn2: {
    // width: 50,
    // height: 50,
    borderRadius: 50,
    padding: 10,
    textAlign: "center",
    marginHorizontal: 10,
    borderColor: "#202020",
    borderWidth: 1,
  },
  select: {
    alignItems: "center",
    // marginVertical: 10,
    marginRight: 30,
    width:70,
  },
  selectImgBtnTxt: {
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
  },
  selectImgBtnTxt2: {
    fontSize: 16,
    fontWeight:"600",
    textAlign: "center",
    color:"gray",
    marginTop:10
  },
});
