import { View, Text, StyleSheet, } from "react-native";

const Tag = ({ name}) => {

  return (
    <View style={styles.main}>
        <View style={styles.contain}>
            <Text style={styles.name}>{name}</Text>
        </View>
      
    </View>
  );
};

export default Tag;
const styles = StyleSheet.create({
  main: {
    marginBottom: 10,
    marginRight: 10,
  },
  contain:{
    backgroundColor: "#ffd10035",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
  },
  name: {
    fontSize: 17,
    textAlign: "center",
    color:"#202020"
  },
});
