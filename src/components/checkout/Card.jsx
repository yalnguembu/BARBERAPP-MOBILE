import { StyleSheet, TouchableOpacity, Image } from "react-native";

const Card = ({ paiementMethod, selected, onSelect }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, borderWidth: selected ? 2 : 0 }}
      onPress={() => onSelect(paiementMethod.id)}
    >
      <Image source={paiementMethod.picture} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  button: {
    width: "47%",
    elevation: 5,
    borderRadius: 8,
    height: "80paddingHorizontal%",
    height: 150,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "80%",
    height: "80%",
  },
});
