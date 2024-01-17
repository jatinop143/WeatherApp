const apikey="9bc280d2e715487c1dd853224714e66f";
const element = document.getElementById("btn");
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric" ;
async function checkweather(){
    const all= await fetch(apiurl+`&appid=${apikey}`+`&q=jaipur`);
    var data= await all.json();
    console.log(data);
    if(data.weather[0].main == "Smoke"){
        $(".weather-icon").attr("src","C:\Users\janpa\Downloads\3280918-removebg-preview.png")
     }
    else if(data.weather[0].main == "Mist"){
        $(".weather-icon").attr("src","images/mist.png")
     }
    else if(data.weather[0].main == "Clouds"){
        $(".weather-icon").attr("src","images/clouds.png")
     }
    else if(data.weather[0].main == "Rain"){
        $(".weather-icon").attr("src","image/rain.png")
     }
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
}
checkweather();
element.addEventListener("click", async function() {
    var city=document.querySelector("#input").value;
    const all= await fetch(apiurl+`&appid=${apikey}`+`&q=${city}`);
    var data= await all.json();
    console.log(data);
    if(data.weather[0].main == "Smoke"){
        $(".weather-icon").attr("src","C:\Users\janpa\Downloads\3280918-removebg-preview.png")
     }
    else if(data.weather[0].main == "Mist"){
        $(".weather-icon").attr("src","images/mist.png")
     }
    else if(data.weather[0].main == "Clouds"){
        $(".weather-icon").attr("src","images/clouds.png")
     }
    else if(data.weather[0].main == "Rain"){
        $(".weather-icon").attr("src","images/rain.png")
     }
    else if(data.weather[0].main == "Clear"){
        $(".weather-icon").attr("src","images/clear.png")
     }
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
});

