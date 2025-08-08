const API_URL = "http://api.weatherapi.com/v1/forecast.json?key=a4929edf079142fba5244445250507&q="
const timeZone_API_URL = "https://api.weatherapi.com/v1/timezone.json?key=a4929edf079142fba5244445250507&q="
let weather_Forecast_Respond = document.getElementById("weather_Forecast_Response")

function dataProcess(data,dataName,saveMethod){
    console.log(data.location)
    function saveData(data,dataName,saveMethod){
        localStorage.setItem(dataName,JSON.stringify(data))
        if (saveMethod === 1){
            var getData1=[JSON.parse(localStorage.getItem(dataName))] 
            dataSave1 =getData1
            console.log(getData1,dataSave1)
            return getData1
        }
        else if (saveMethod ===2){
            var getData2=[JSON.parse(localStorage.getItem(dataName))]
            dataSave2 =getData2
            console.log(getData2,dataSave2)
            return getData2
        }
    }
    saveData(data,dataName,saveMethod)
    let time_And_Date_Array = data.location.localtime.split(" ")
    let cityDate = time_And_Date_Array[0]
    let cityTime =time_And_Date_Array[1]
    console.log(time_And_Date_Array, cityDate, cityTime)
    let weather_Forecast_Title =`<p id="cityDate">Hôm nay là: ${cityDate}</p>
      <p id="city_Time">Bây giờ là: ${cityTime}</p>`
    const cityGetLocation = data.location
    const getCurrentWeather = data.current
    const weatherForecast = data.forecast.forecastday[0]
    const weatherForecast_EachHour = weatherForecast.hour
    

    console.log(typeof weatherForecast_EachHour, weatherForecast_EachHour)
    
    let day_Or_Night = ""
    if (getCurrentWeather.is_day ===1){
        day_Or_Night ="Ngày"
    }
    else if(getCurrentWeather.is_day ===0){
        day_Or_Night ="Đêm"
    }
    const weather_Forecast_Respond_City_Information =`<p class="lead p-2 border rounded border-info">Thành phố: ${cityGetLocation.name}</p>
        <div id="weather_Forecast_Response_City_Information" class="container bg-info-subtle">
            <div id="country_Information">Thành phố của quốc gia: ${cityGetLocation.country}</div>
            <div id="city_Latitude_And_Longtitude_Cordinate">Nằm ở tọa độ: Vĩ độ: ${cityGetLocation.lat}, kinh độ: ${cityGetLocation.lon}</div>
            <div id="city_TimeZone">ID của múi giờ: ${cityGetLocation.tz_id}</div>
        </div>`
    const weather_Forecast_Respond_CurrentWeather =`<div id="weather_Forecast_WeatherCondition" class="container border border-primary bg-primary-subtle rounded m-3">
          <h1 class="fw-medium text-center border-start border-end border-success bg-success-subtle">Cập nhật lần cuối: ${getCurrentWeather.last_updated}</h1>
          <div class="d-flex">
            <p id="current_Weather_Condition" class="text-decoration-underline text-info">Điều kiện khí hậu hiện tại: ${getCurrentWeather.condition.text}</p>
            <img class="img-fluid" style="width: auto;height: auto;" src="${getCurrentWeather.condition.icon}" alt="">
        </div>
          <p id="temperatureMeasurement" class="text-decoration-underline text-info">Nhiệt độ thời tiết: ${getCurrentWeather.temp_c} ºC và ${getCurrentWeather.temp_f} ºF</p>
          <p id="UVMeasure" class="text-decoration-underline text-info">Chỉ số UV: ${getCurrentWeather.uv}</p>
          <p id="dewPoint" class="text-decoration-underline text-info">Điểm sương: ${getCurrentWeather.dewpoint_c} ºC và ${getCurrentWeather.dewpoint_f} ºF</p>
          <p id="feelslike_Temperature" class="text-decoration-underline text-info">Nhiệt độ rõ ràng: Cảm giác như ${getCurrentWeather.feelslike_c} ºC ${getCurrentWeather.feelslike_f} ºF</p>
          <p id="heatIndex" class="text-decoration-underline text-info">Chỉ số nóng bức: ${getCurrentWeather.heatindex_c} ºC ${getCurrentWeather.heatindex_f} ºF</p>
          <p id="humidity" class="text-decoration-underline text-info">Mức độ ẩm: ${getCurrentWeather.humidity}%</p>
          <p id="day_Or_Night" class="text-decoration-underline text-info">Đang vào buổi: ${day_Or_Night}</p>
          <p id="precipitaion_Measurement" class="text-decoration-underline text-info">Giáng thủy: ${getCurrentWeather.precip_in} inches và ${getCurrentWeather.precip_mm} milimeters</p>
          <p id="atmosphericPressure" class="text-decoration-underline text-info">Áp suất khí quyển: ${getCurrentWeather.pressure_mb} milibars và ${getCurrentWeather.pressure_in} inches</p>
          <p id="windDirectionAndSpeed" class="text-decoration-underline text-info">Tốc độ gió là ${getCurrentWeather.wind_kph} km/phút và có hướng ${getCurrentWeather.wind_dir}</p>
        </div>`
    const weather_Forecast_Respond_Weather = `<div id="weather_Forecast_Response_Forecast" style="background: #8B93FF;" class="container border border-success border-5">
          <p class="lead text-center text-decoration-underline teal border rounded border-success">Dự báo thời tiết ngày: ${weatherForecast.date}</p>
          <div id="MoonAndSunInfomation" class="container bg-teritiary border border-light border-3">
            <p class="text-decoration-underline text-success-emphasis h3">Thông tin về Mặt Trăng và Mặt Trời của hôm nay</p>
            <p class="border-start border-end border-info rounded">Pha Mặt Trăng: </p>
            <p class="border-start border-end border-info rounded">Giai đoạn của Mặt Trăng:</p>
            <p class="border-start border-end border-info rounded">Mặt Trời mọc lúc:</p>
            <p class="border-start border-end border-info rounded">Mặt Trời lặn lúc:</p>
            <p class="border-start border-end border-info rounded">Mặt Trăng mọc lúc:</p>
            <p class="border-start border-end border-info rounded">Mặt Trăng lặn lúc:</p>
          </div>
          <div id="weather_Forecast_With_Date" class="container border rounded border-sky mt-3 bg-sky">
            <p class="display-5 text-center border border-info">Dự báo thời tiết ngày hôm nay</p>
            <p class="lead border-start border-end border-primary bg-primary-subtle">Cả ngày:</p>
            <ul class="list-group list-group-item-info">
              <li class="list-group-item" id="dayWeatherCondition" >
                <div id="weatherConditionForTypedCity" class="d-flex">
                  <p class="text-light border border- bg-important p-1" >Điều kiện thời tiết: </p>
                  <img src="" class="mx-auto" alt="">
                </div>
              </li>
              <li class="list-group-item" id="averageHumidity">Độ ẩm trung bình: %</li>
              <li class="list-group-item" id="averageTemperature">Nhiệt độ trung bình: ºC và ºF</li>
              <li class="list-group-item" id="maxTemperature">Nhiệt độ cao nhất: ºC và ºF</li>
              <li class="list-group-item" id="minTemperature">Nhiệt độ thấp nhất: ºC và ºF</li>
              <li class="list-group-item" id="UV_Measurement">Chỉ số UV: </li>
              <li class="list-group-item" id="chanceOfRain">Xác suất có mưa: %</li>
              <li class="list-group-item" id="chnaceOfSnow">Xác suất có tuyết: %</li>
              <li class="list-group-item" id="rainAbility">Khả năng mưa:</li>
              <li class="list-group-item" id="snowAbility">Khả năng có tuyết:</li>
              <li class="list-group-item" id="windSpeed">Tốc độ gió: chậm nhất và nhanh nhất </li>
              <li class="list-group-item" id="total_Precipitation">Tổng lượng mưa: mm và in</li>
              <li class="list-group-item" id="total_Snow">Tổng lượng tuyết: cm</li>
            </ul>
            <p class="lead border-start border-end border-primary bg-primary-subtle mt-2">Thời tiết thay đổi vào từng giờ:</p>
            <table class="table" id="weather_Forecast_Table">
              <tr>
                <th>Giờ</th>
                <th>Điều kiện thời tiết</th>
                <th>Nhiệt độ </th>
                <th>Độ ẩm</th>
                <th>Chỉ số UV</th>
              </tr>`
        let weatherForecast_Table = document.getElementById("weather_Forecast_Table")
        // console.log(weatherForecast_Table)
        for (let hourIndex = 0; hourIndex <24; hourIndex ++){
        let weather_Forecast_Index = weatherForecast_EachHour[hourIndex]
        let timeWithDate_Array = weather_Forecast_Index.time.split(" ")
        let getTime = timeWithDate_Array[1]
        const weather_Forecast_Table =`
        <tr>
            <td class="hour">${getTime}</td>
            <td class="weatherCondition">
                  <p class="text-info-emphasis">${weather_Forecast_Index.condition.text}</p>
                  <img src="${weather_Forecast_Index.condition.icon}" alt="" class="rounded" style="width: auto;">
            </td>
            <td class="temperatureMeasurement"> ${weather_Forecast_Index.temp_c} ºC và ${weather_Forecast_Index.temp_f} ºF</td>
            <td class="humidity"> ${weather_Forecast_Index.humidity} %</td>
            <td class="UVMeasurement"> ${weather_Forecast_Index.uv}</td>
        </tr>`
        weatherForecast_Table.classList.remove("d-none")
        weatherForecast_Table.innerHTML += weather_Forecast_Table
        
        // console.log(weatherForecast_EachHour[hourIndex])consttweather_Forecast_Index.condition.CĐiều kiện thời tiết: hourIndexAnd_Date_And_${}c
    }
    weather_Forecast_Respond.innerHTML+= weather_Forecast_Title
    weather_Forecast_Respond.innerHTML += weather_Forecast_Respond_City_Information
    weather_Forecast_Respond.innerHTML += weather_Forecast_Respond_CurrentWeather
}

fetch(API_URL+"Gia Lai")
    .then(response => response.json())
    .then(data => dataProcess(data,"dataSave1",1))
    .catch(error => console.error("Lỗi khi fetch API!"+error))
// fetch(timeZone_API_URL+"Ho Chi Minh")citycityGGlog
//     .then(response => response.json())citycitycity
//     .then(data => dataProcess(data,"dataSave2",2))citycityGGGGGGyygetCurrentWeather.nđBindDateforecastconst getForecast = data.const getơconst get
//     .catch(error => console.log("Lỗi khi fetch API!",error))      cityTcurrentCityCConditiond//cdn.weatherapi.com/weather/64x64/day/113.pngcdewpoint0-cNƯf
// stringWithout_Accents_And_DiacritcsJa+stringWithout_Accents_And_DiacritcsNÔsaveDatachidsaveDataC~${}au[]{iddc_constcitylocatdata.locationdata.locationdata.locationdata.locationdata.location
// Hà NộiHa NoiDa NangHà NộiHo Chi MinhHa Noi