const getDay = function(day) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  return days[day];
}

const date = new Date();
const yearNow = date.getFullYear();
const monthNow = date.getMonth() + 1;
const dateNow = date.getDate();
const dayNow = getDay(date.getDay());
const fullDate = `${monthNow}. ${dateNow}. ${yearNow}`;

export const displayDate = function() {
  const dayEl = document.querySelector(".day");
  const dateEl = document.querySelector(".date");

  dayEl.textContent = dayNow;
  dateEl.textContent = fullDate;
}
