import {
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";

function Item({ img, onClick }) {

  return (
    <Pressable style={styles.main} onPress={onClick}>
      <Image source={img} style={styles.img} />
    </Pressable>
  );
}

export default Item;
const styles = StyleSheet.create({
  main: {
    width: (Dimensions.get("screen").width - 30)/3,
    height: (Dimensions.get("screen").width - 30)/3,
    borderWidth: 1,
    borderColor: "#fff",
  },
  img: {
    width:"100%",
    height:"100%",
  },
});
