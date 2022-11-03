// function day(time) {
//   let difference = new Date().getTime() - new Date(time).getTime();
//   let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
//   return totalDays;
// }
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const convertToDay = (time) => {
  let difference = new Date().getTime() - new Date(time).getTime();
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return totalDays;
};

export const dateTime = (time) => {
  let days = +convertToDay(time);
  if (days >= 30) {
    let dateArr = new Date(time).toDateString().split(" ");
    let [_, month, day] = dateArr;
    return `${month} ${day}`;
  }
  return days;
};
