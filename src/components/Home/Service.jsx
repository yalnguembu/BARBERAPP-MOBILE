import { StyleSheet, Image, Pressable ,Dimensions} from "react-native";

function Service({ service, onClick }) {
  let { img } = service;


  return (
    <Pressable style={styles.main} onPress={onClick}>
      <Image source={img} style={styles.img} />
    </Pressable>
  );
}

export default Service;
const styles = StyleSheet.create({
  main: {
    width: Dimensions.get("screen").width -60,
    borderRadius: 10,
    marginBottom: 20,
    marginRight:15
  },
  cardContent: {
    padding: 15,
  },
  img: {
    width: "100%",
    height: Dimensions.get("screen").width -120,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 23,
    fontWeight: "500",
  },
  desc:{
    fontSize:17,
    color:"gray"
  },
});
