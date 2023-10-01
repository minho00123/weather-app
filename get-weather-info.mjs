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

export const getWeather = function() {
  navigator.geolocation.getCurrentPosition(location => {
  let {latitude: lat, longitude: lon} = location.coords;
  const API_KEY = '';
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
})};
