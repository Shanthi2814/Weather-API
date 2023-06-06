let heading = document.createElement('h1')
heading.setAttribute('class','myHeading');

heading.innerHTML ="Weather-API"

document.body.append(heading)

let div1 = document.createElement('div')

div1.setAttribute('class','card')

document.body.append(div1)

let div2 = document.createElement('div')

div2.setAttribute('class','search')

div1.appendChild(div2)

let searchBox = document.createElement('input')

searchBox.setAttribute('type','text')

searchBox.setAttribute('placeholder','Enter city name')

searchBox.setAttribute('spellcheck','false')

div2.appendChild(searchBox)

let button = document.createElement('button')

div2.appendChild(button);

let image = document.createElement('img')

image.setAttribute('src','images/search.png')

image.setAttribute('alt',"")

button.appendChild(image)

let div3 = document.createElement('div')

div3.setAttribute('class','weather')

div1.appendChild(div3)

let image1 = document.createElement('img')

image1.setAttribute('src','images/rain.png')

image1.setAttribute('class','weather-icon')

div3.appendChild(image1)

let heading1 = document.createElement('h2')

heading1.setAttribute('class','temp')

heading1.innerHTML="38°C";

div3.appendChild(heading1)

let heading2 = document.createElement('h3')

heading2.setAttribute('class','city')

heading2.innerHTML="Tiruchirapalli West";

div3.appendChild(heading2)

let div4 = document.createElement('div')

div4.setAttribute('class','details')

div3.appendChild(div4)

let div5 = document.createElement('div')

div5.setAttribute('class','col')

div4.appendChild(div5)
let image2 = document.createElement('img')

image2.setAttribute('src','images/humidity.png')

div5.appendChild(image2)
let div6 = document.createElement('div')

div5.appendChild(div6)
let para1 = document.createElement('p')
para1.setAttribute('class','humidity')
para1.innerHTML="50%";
div6.appendChild(para1)
let para2 = document.createElement('p')
para2.innerHTML="Humidity";
div6.appendChild(para2)
let div7 = document.createElement('div')

div7.setAttribute('class','col')

div4.appendChild(div7)
let image3 = document.createElement('img')

image3.setAttribute('src','images/wind.png')

div7.appendChild(image3)
let div8 = document.createElement('div')

div7.appendChild(div8)
let para3 = document.createElement('p')
para3.setAttribute('class','wind')
para3.innerHTML="15 km/h";
div8.appendChild(para3)
let para4 = document.createElement('p')
para4.innerHTML="wind Speed";
div8.appendChild(para4)
let apiKey ="a5004c345143bf373b4af35556f3cb5c";

let apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox1 = document.querySelector('.search input');
let searchbtn = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){

    let response = await fetch(apiUrl +city + `&appid=${apiKey}`);

    let data = await response.json()

    console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main =="Clouds"){
        weatherIcon.src ="images/clouds.png";
    }else if(data.weather[0].main =="Clear"){
        weatherIcon.src ="images/clear.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src ="images/rain.png"
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src ="images/drizzle.png"
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src ="images/mist.png"
    }
    document.querySelector(".weather").style.display="block";
}
searchbtn.addEventListener('click',()=>{
    checkWeather(searchBox1.value);
})







