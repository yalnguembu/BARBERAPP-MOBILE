import { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const times = [
  { id: 0, value: "08:30" },
  { id: 1, value: "09:00" },
  { id: 2, value: "09:30" },
  { id: 3, value: "10:00" },
  { id: 4, value: "10:30" },
];

export default function TimePicker({ onSelect }) {
  const [selectedTime, setSelectedTime] = useState(times[0].id);

  const handelSelect = (time) => {
    setSelectedTime(time.id);
    onSelect(time.value);
  };

  const TimeItem = ({ time }) => {
    return (
      <TouchableOpacity
        style={selectedTime === time.id ? styles.selectedItem : styles.item}
        onPress={() => handelSelect(time)}
      >
        <Text
          style={
            selectedTime === time.id ? styles.selectedTextItem : styles.textItem
          }
        >
          {time.value}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.main}
    >
      {times.map((time, index) => (
        <TimeItem key={index} time={time} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 15,
  },
  item: {
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 8,
    padding: 7,
    paddingHorizontal: 15,
    marginRight: 7,
  },
  textItem: {
    color: "#222",
  },
  selectedItem: {
    backgroundColor: "#222",
    borderWidth: 1,
    borderColor: "#222",
    borderRadius: 8,
    padding: 7,
    paddingHorizontal: 15,
    marginRight: 7,
  },
  selectedTextItem: {
    color: "#fff",
  },
});
