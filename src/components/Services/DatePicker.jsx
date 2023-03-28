import { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { date } from "../../utils/common";

const dates = [
  { id: 0, value: "01" },
  { id: 1, value: "02" },
  { id: 2, value: "03" },
  { id: 3, value: "04" },
  { id: 4, value: "05" },
  { id: 5, value: "06" },
  { id: 6, value: "07" },
  { id: 7, value: "08" },
  { id: 8, value: "09" },
];

export default function DatePicker({ onSelect, month }) {
  const [selectedTime, setSelectedTime] = useState(dates[0].id);

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
        <Text
          style={
            selectedTime === time.id
              ? styles.selectedDayTextItem
              : styles.dayTextItem
          }
        >
          {date().dateToDayOfWeek(new Date())}
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
      {dates.map((time, index) => (
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
    width: 60,
  },
  textItem: {
    color: "#222",
    textAlign: "center",
    fontSize: 19,
  },
  dayTextItem: {
    color: "#222",
    fontSize: 12,
    textAlign: "center",
  },
  selectedItem: {
    backgroundColor: "#222",
    borderWidth: 1,
    borderColor: "#222",
    borderRadius: 8,
    padding: 7,
    paddingHorizontal: 15,
    marginRight: 7,
    textAlign: "center",
    width: 60,
  },
  selectedTextItem: {
    color: "#fff",
    textAlign: "center",
    fontSize: 19,
  },
  selectedDayTextItem: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
});
