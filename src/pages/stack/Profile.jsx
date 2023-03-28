import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { User } from "../../domains/user";
import { user as userApi } from "../../services";

function Profile({ navigation }) {
  const { currentUser } = useSelector((state) => state.user);
  const [user, setUser] = useState({
    picture: "",
    email: "",
    username: "",
  });
  const [darkMode, setDarkMode] = useState(false);

  const handelEdit = () => {
    navigation.navigate("editprofile");
  };
  const handelDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    let ignore = false;
    userApi
      .getById("64102e0fe68d740e89e57e11")
      .then((response) => response.data)
      .then((data) => {
        setUser(new User(data));
      });
    return () => {
      ignore = true;
    };
  }, []);

  const serverURL = "http://192.168.43.25:5000";

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.flexBox}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <Icon size={30} name="arrow-back" color="#333333" />
        </TouchableOpacity>
        <Text style={styles.title}>Compte</Text>
        <TouchableOpacity style={styles.headerButton} onPress={handelEdit}>
          <Icon size={30} name="create-outline" color="#333333" />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.imgContainer}>
            {user.picture ? (
              <Image
                source={{
                  uri: `${serverURL}/storage/images/users/${user.picture}`,
                }}
                style={styles.img}
              />
            ) : (
              <></>
            )}
          </View>
          <View>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.textBox}
            onPress={() => navigation.navigate("security")}
          >
            <Icon name="lock-closed-outline" size={27} />
            <Text style={styles.titleBox}>Sécurité</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textBox}
            onPress={() => navigation.navigate("notification")}
          >
            <Icon name="notifications-outline" size={27} />
            <Text style={styles.titleBox}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textBox} onPress={() => {}}>
            <Icon name="help-circle-outline" size={27} />
            <Text style={styles.titleBox}>Aide</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textBox} onPress={() => {}}>
            <Icon name="share-outline" size={27} />
            <Text style={styles.titleBox}>Partager</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textBox} onPress={() => {}}>
            <Text style={styles.titleBox2}>Dark mode</Text>
            <Switch value={darkMode} onChange={handelDarkMode} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.textBox} onPress={() => {}}>
            <Icon name="log-out-outline" size={27} />
            <Text style={styles.titleBox}>Déconnection</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerButton: {
    margin: 30,
    backgroundColor: "#fff",
  },
  flexBox: {
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  main: {
    width: Dimensions.get("screen").width - 60,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 6,
    backgroundColor: "#fff",
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
  },
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: "#808080",
    backgroundColor: "#f1f1f1",
    resizeMode: "cover",
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#202020",
    textAlign: "center",
    padding: 15,
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
  username: {
    fontSize: 19,
    color: "#202020",
    fontWeight: "500",
  },
  body: {
    padding: 15,
    borderTopColor: "#eee",
    borderTopWidth: 1,
  },
  textBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleBox: {
    fontWeight: "bold",
    fontSize: 17,
    padding: 15,
  },
  titleBox2: {
    fontWeight: "bold",
    fontSize: 17,
    padding: 15,
    paddingLeft: 0,
  },
});
