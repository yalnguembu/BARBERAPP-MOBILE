import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function Slider({ navigation, activeImage, sliderVibility }) {
  const slides = [0, 1, 2];
  const [slide, setSlide] = useState({
    id: "",
    date: "",
    time: "",
    reminder: true,
    seen: true,
    service: {
      title: "",
      content: "",
      price: 0,
      duration: [0, 0],
    },
  });
  // const getSlide = () => {
  //   setSlide({
  //     id: "33jjjjss",
  //     date: new Date().toDateString(),
  //     time: new Date().toLocaleTimeString().substring(0, 5),
  //     reminder: true,
  //     seen: true,
  //     service: {
  //       title: "Wache an style coupe",
  //       content:
  //         "wache and style erjrevnnenvnvn is a haire cut jjddnenddbnd bnndbnnnn nijj",
  //       price: 3460,
  //       duration: [1, 30],
  //     },
  //   });
  // };
  // useEffect(() => {
  //   getSlide();
  // }, []);

  const SliderItem = ({ image, id }) => {
    return (
      <View style={stylesItem.container}>
        <View style={stylesItem.main}>
          <Image
            source={require("../../assets/images/service-1.png")}
            style={stylesItem.image}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("detail", { id: id })}
          >
            <Text style={stylesItem.title}>
              Plus de details{" "}
              <Ionicons name="chevron-forward" size={20} color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={sliderVibility}
      >
        <Ionicons size={30} name="close" color="#fff" />
      </TouchableOpacity>
      <ScrollView
        style={styles.main}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {slides.map((index) => (
          <SliderItem key={index} id={index} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Slider;
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    position: "absolute",
    top: 0,
    backgroundColor: "#111",
  },
  main: {
    flex: 1,
  },
  backButton: {
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: -15,
    alignSelf: "flex-end",
  },
});

const stylesItem = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    flex:1
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 400,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
    padding: 10,
    textAlign: "center",
  },
});
