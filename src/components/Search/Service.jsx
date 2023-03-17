import { Text, StyleSheet, Pressable, View, Image } from "react-native";

function Service({ service, navigation }) {
  let { id, img, title, desc } = service;
  return (
    <Pressable
      style={styles.main}
      onPress={() => navigation.navigate("detail", { id: id })}
    >
      <View style={styles.dateBox}>
        <Image source={img} style={styles.image} />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </Pressable>
  );
}

export default Service;
const styles = StyleSheet.create({
  main: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dateBox: {
    paddingRight: 20,
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width:60,
    height:60
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  desc: {
    fontSize: 15,
    color: "gray",
  },
});
