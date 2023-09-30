// // let lat, long;

// // navigator.geolocation.getCurrentPosition((position) => {
// //   lat = position.coords.latitude;
// //   long = position.coords.longitude;
// // });

// // console.log(lat, long);

// // const API_KEY = 'd2d5348210331fcddebc9b14ba077f23';
// // const url = (`https://api.openweathermap.org/data/2.5/onecall?lat=37.532600&lon=127.024612&appid=${API_KEY}`)

// // async function getWeatherInfo() {
// //   const response = await fetch(url);
// //   const data = await response.json();
// //   console.log(data);
// // }

// // getWeatherInfo();

// const url = 'http://worldtimeapi.org/api/timezone/America/New_York';

// // async function getData() {
// //   const response = await fetch(url);
// //   const data = await response.json();
// //   console.log(data);
// // }

// // getData();

// const request = new Request(url);
// fetch(request)
//   .then(response => response.json())
//   .then(data => console.log('Success:', data))
//   .catch(error => console.log(`Error: ${error}`));