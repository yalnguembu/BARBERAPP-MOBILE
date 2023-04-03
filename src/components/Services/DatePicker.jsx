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
  { id: 9, value: "08" },
  { id: 10, value: "09" },
  { id: 11, value: "10" },
  { id: 12, value: "11" },
  { id: 13, value: "12" },
  { id: 14, value: "13" },
  { id: 15, value: "14" },
  { id: 16, value: "15" },
  { id: 17, value: "16" },
  { id: 18, value: "17" },
  { id: 19, value: "18" },
  { id: 20, value: "19" },
  { id: 21, value: "20" },
  { id: 22, value: "21" },
  { id: 23, value: "24" },
  { id: 24, value: "25" },
  { id: 25, value: "26" },
  { id: 26, value: "27" },
  { id: 27, value: "28" },
  { id: 28, value: "29" },
  { id: 29, value: "30" },
  { id: 30, value: "31" },
];

export default function DatePicker({ onSelect, month }) {
  const [selectedTime, setSelectedTime] = useState(dates[0].id);

  const handelSelect = (date) => {
    setSelectedTime(date.id);
    const newDate = new Date();
    newDate.setDate(date.value);
    onSelect(newDate.toISOString());
  };

  const DateItem = ({ time }) => {
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
          {date().dateToDayOfWeek(new Date().setDate(time.id))}
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
        <DateItem key={index} time={time} />
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
