const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]

const date = new Date();
const yearNow = date.getFullYear();
const monthNow = date.getMonth() + 1;
const dateNow = date.getDate();
const dayNow = days[date.getDay()];

const dayEl = document.querySelector(".day");
dayEl.textContent = dayNow;

const fullDate = `${yearNow}년 ${monthNow}월 ${dateNow}일`;
const dateEl = document.querySelector(".date");
dateEl.textContent = fullDate;

