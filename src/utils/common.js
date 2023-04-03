export const date = () => {
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "WEN", "SAT", "SUN"];
  const getDay = (date) => {
    const day = new Date();
    day.setMonth(4);
    return daysOfWeek[day.getDay() - 1];
  };
  const dateToDayOfWeek = (date) => {
    return daysOfWeek.at(new Date(date).getDay());
  };

  const dateToDayOfMonth = (date) => {
    return new Date(date).getDate();
  };

  const toLocalDateString = (date) => {
    return new Date(date).toDateString();
  };

  return {
    dateToDayOfWeek,
    dateToDayOfMonth,
    toLocalDateString,
  };
};
