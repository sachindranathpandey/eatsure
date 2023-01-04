// let x = document.getElementById("out");
// let y = document.getElementById("weather");
let btnlocation = document.querySelector(".selected-place-span");
let showtemp = document.querySelector(".show-temp-span");
let tempdiv = document.querySelector(".temprature-div");
function geolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerText = "Geo Not Supported";
  }
}
function showPosition(data) {
  console.log(data);
  let lat = data.coords.latitude;
  let lon = data.coords.longitude;
  console.log(lat);
  console.log(lon);
  // x.innerHTML = `Latitude is ${lat}  and Longitude is ${lon}`;

  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

  fetch(url, { method: "GET" })
    //return promises
    .then((res) => res.json())
    //resolve promises and get data
    .then((data) => {
      console.log(data);
      let cityName = data.city.name;
      let temp = data.list[0].temp.day;

      console.log(cityName + " " + temp);

      // y.innerText = `Temperature in ${cityName} is ${temp} °C`;
      btnlocation.innerText = cityName;
      console.log(cityName);
      tempdiv.classList.remove("hide-temp-div");
      showtemp.innerText = ` ${temp} °C`;
    });
}
