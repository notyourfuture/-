fetch(`https://goweather.herokuapp.com/weather/q=Bishkek`)
  .then((resp) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.$(".city-name").textContent = data.name;
    document.$("price").innerHtml = Math.round(data.main.temp - 273) + "&deg";
    document.$(".disclamer").textContent = data.weather[0]["description"];
  })
  .catch(() => {});
