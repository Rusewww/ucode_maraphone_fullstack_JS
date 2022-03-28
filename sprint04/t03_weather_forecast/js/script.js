let apiKey = "1ef17ed1c48e7ca9bfb845d023a2d44b"
let city = "Kharkiv"
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`

axios.get(url).then(res => {
    console.log(res.data);
    // Вывод города
    document.querySelector('.city').innerHTML = res.data.name
    // Вывод температуры
    document.querySelector('.temp').innerHTML = res.data.main.temp
    // Вывод влажности
    document.querySelector('.humidity').innerHTML = res.data.main.humidity
    // Вывод скорости ветра
    document.querySelector('.wind').innerHTML = res.data.wind.speed
})