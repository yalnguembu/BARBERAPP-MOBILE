import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";

const TabBar = ({ handelActiveTab, activeTab }) => {
  const Button = ({ text }) => {
    return (
      <TouchableOpacity
        onPress={() => handelActiveTab(text)}
        style={activeTab === text ? styleBtn.mainActive : styleBtn.main}
      >
        <Text style={activeTab === text ? styleBtn.textActive : styleBtn.text}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView
      style={styles.main}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    >
      {["tout", "Coupe","Soins", "Tracage", "Barbe", "Teinte", "Tresse"].map(
        (text, index) => (
          <Button text={text} key={index} />
        )
      )}
    </ScrollView>
  );
};

export default TabBar;

const styleBtn = StyleSheet.create({
  main: {
    paddingVertical: 2,
    paddingHorizontal: 12,
    marginRight: 10,
    backgroundColor: "#ececec",
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
  },
  mainActive: {
    paddingVertical: 2,
    paddingHorizontal: 12,
    marginRight: 10,
    backgroundColor: "#202020",
    borderRadius: 5,
  },
  textActive: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#e1e1e1",
  },
});
const styles = StyleSheet.create({
  main: {
    width: "100%",
    marginBottom: 15,
    borderColor: "lightgrey",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
