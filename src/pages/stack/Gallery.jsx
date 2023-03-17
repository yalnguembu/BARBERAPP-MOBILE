import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "../../components/Gallery/Slider";
import Item from "../../components/Gallery/Item";

function Gallery({ navigation }) {
  const images = [
    {
      id: 122123,
      img: require("../../assets/images/service-1.png"),
    },
    {
      id: 122124,
      img: require("../../assets/images/service-2.png"),
    },
    {
      id: 122125,
      img: require("../../assets/images/service-3.png"),
    },
    {
      id: 122126,
      img: require("../../assets/images/service-4.png"),
    },
    {
      id: 122127,
      img: require("../../assets/images/service-5.png"),
    },
    {
      id: 122128,
      img: require("../../assets/images/service-6.png"),
    },
    {
      id: 122123,
      img: require("../../assets/images/service-1.png"),
    },
    {
      id: 122123,
      img: require("../../assets/images/service-2.png"),
    },
    {
      id: 122123,
      img: require("../../assets/images/service-3.png"),
    },
    {
      id: 122123,
      img: require("../../assets/images/service-4.png"),
    },
    {
      id: 122123,
      img: require("../../assets/images/service-5.png"),
    },
    {
      id: 122123,
      img: require("../../assets/images/service-6.png"),
    },
  ];
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(false);

  const sliderVibility = () => {
    setIsSliderVisible(!isSliderVisible);
  };
  const handelActiveImage = (image) => {
    setActiveImage(image);
    sliderVibility();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons size={23} name="arrow-back" color="#333333" />
        </TouchableOpacity>
        <Text style={styles.title}>Gallery</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {images.map((image, index) => (
            <Item
              key={index}
              onClick={() => handelActiveImage(`${image.id}`)}
              img={image.img}
            />
          ))}
        </View>
      </ScrollView>
      {isSliderVisible && (
        <Slider activeImage={activeImage} sliderVibility={()=>sliderVibility()} navigation={navigation} />
      )}
    </View>
  );
}

export default Gallery;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fefefe",
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 15,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    width: "100%",
    padding: 15,
    paddingTop: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:"#fff",
    elevation:5,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 15,
  },
});
