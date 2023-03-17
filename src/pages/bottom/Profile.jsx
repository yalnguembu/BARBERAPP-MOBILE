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
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

function Profile({ navigation }) {
  const URI = "http://localhost:5000/images/users/";
  const { currentUser } = useSelector((state) => state.user);
  const { currentTheme } = useSelector((state) => state.theme);
  const [user, setUser] = useState(currentUser);
  const [darkMode, setDarkMode] = useState(false);
  const handelEdit = () => {
    navigation.navigate("editprofile");
  };
  const handelDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    // getUser();
  }, []);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <TouchableOpacity style={styles.editButton} onPress={handelEdit}>
          <Ionicons size={30} name="create-outline" color="#333333" />
        </TouchableOpacity>
        <Text style={styles.title}>Compte</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.imgContainer}>
            <Image source={{ uri: URI+user.picture }} style={styles.img} />
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
            <Ionicons name="lock-closed-outline" size={27} />
            <Text style={styles.titleBox}>Sécurité</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textBox}
            onPress={() => navigation.navigate("notification")}
          >
            <Ionicons name="notifications-outline" size={27} />
            <Text style={styles.titleBox}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textBox} onPress={() => {}}>
            <Ionicons name="help-circle-outline" size={27} />
            <Text style={styles.titleBox}>Aide</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textBox} onPress={() => {}}>
            <Ionicons name="share-outline" size={27} />
            <Text style={styles.titleBox}>Partager</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textBox} onPress={() => {}}>
            {/* <Ionicons name="share-outline" size={27} /> */}
            <Text style={styles.titleBox2}>Dark mode</Text>
            <Switch value={darkMode} onChange={handelDarkMode} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.textBox} onPress={() => {}}>
            <Ionicons name="log-out-outline" size={27} />
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
  },
  editButton: {
    alignSelf: "flex-end",
    margin: 30,
    marginBottom: 0,
    backgroundColor: "#fff",
    padding: 10,
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
