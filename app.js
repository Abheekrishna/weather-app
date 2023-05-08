/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
const getWeatherData = (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`;
  //HINT: Use template literals to create a url with input and an API key
  fetch(URL, Option)
  .then(response => response.json())
  .then(data => {
    const cityName = document.getElementById('city-name')
    const weatherType = document.getElementById('weather-type')
    const temp = document.getElementById('temp')
    const minTemp = document.getElementById('min-temp')
    const maxTemp = document.getElementById('max-temp')


    if (city = data.name) {
    cityName.innerText = `${data.name}`
    weatherType.innerText =  `${data.weather[0].main}`
    temp.innerText = Math.floor((Number(data.main.temp)-32) * 5/9)
    minTemp.innerText = Math.floor((Number(data.main.temp_min) - 32) * 5/9)
    maxTemp.innerText =  Math.floor((Number(data.main.temp_max)-32)*5/9)
    } else {
      cityName.innerText = 'Not found'
      weatherType.innerText =  ``
    temp.innerText = ''
    minTemp.innerText = ''
    maxTemp.innerText =  ''
    }
  })

}

const searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
}