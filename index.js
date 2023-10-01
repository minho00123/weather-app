const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

const date = new Date();
const yearNow = date.getFullYear();
const monthNow = date.getMonth() + 1;
const dateNow = date.getDate();
const dayNow = days[date.getDay()];

const dayEl = document.querySelector(".day");
dayEl.textContent = dayNow;

const fullDate = `${monthNow}. ${dateNow}. ${yearNow}`;
const dateEl = document.querySelector(".date");
dateEl.textContent = fullDate;

// function success(pos) {
//   // let crd = pos.coords;

//   console.log(pos);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error);

const icons = {
  "Clear": "😎",
  "Rain": "☔️",
  "Snow": "❄️",
  "Clouds": "☁️",
}

const locationBoxEl = document.querySelector('.location-box');
const tempEl = document.querySelector('.temp');
const feelTempEl = document.querySelector('.feel-temp');
const maxTempEl = document.querySelector('.max-temp');
const minTempEl = document.querySelector('.min-temp');
const iconEl = document.querySelector('.icon');
const statusEl = document.querySelector('.status');
const humidityEl = document.querySelector('.humidity');
const windSpeedEl = document.querySelector('.wind-speed');

navigator.geolocation.getCurrentPosition(location => {
  let {latitude: lat, longitude: lon} = location.coords;
  const API_KEY = '3988d5003f38edefca5986f9166ee8f1';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  async function getWeatherInfo() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    locationBoxEl.textContent = data.name
    tempEl.textContent = `${Math.round(data.main.temp)}℃`;
    feelTempEl.textContent = `Feels Like: ${Math.round(data.main.feels_like)}℃`;
    maxTempEl.textContent = `Max: ${Math.round(data["main"]["temp_max"])}℃`;
    minTempEl.textContent = `Min: ${Math.round(data["main"]["temp_min"])}℃`;
    iconEl.textContent = icons[data["weather"][0]["main"]];
    statusEl.textContent = data["weather"][0]["main"];
    humidityEl.textContent = `💦: ${data["main"]["humidity"]}%`;
    windSpeedEl.textContent = `💨: ${data["wind"]["speed"]}m/s`;
  }
  getWeatherInfo();
})