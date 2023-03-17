import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const Service = ({ service, onClick }) => {
  const { text, img } = service;

  return (
    <Pressable style={styles.main} onPress={onClick}>
      <Image source={img} style={styles.img} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default Service;
const styles = StyleSheet.create({
  main: {
    width: "48%",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  img: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
  },
  cardContent: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
