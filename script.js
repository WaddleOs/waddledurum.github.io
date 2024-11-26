async function getWeather() {
    const city = document.getElementById("city-input").value;
    const _0x41ecf8=_0x317f;(function(_0x5bb812,_0x25fcc3){const _0x35d57c=_0x317f,_0x5db17d=_0x5bb812();while(!![]){try{const _0x18785c=parseInt(_0x35d57c(0x11d))/(0x1*-0x2459+0x1*-0x2555+0x5ab*0xd)*(parseInt(_0x35d57c(0x113))/(0x1934+0x1a5*-0x7+-0x1f*0x71))+parseInt(_0x35d57c(0x115))/(0x22f+-0x2280+-0x4*-0x815)*(parseInt(_0x35d57c(0x117))/(0x18d*-0x19+0x1*-0x649+0x2d12))+parseInt(_0x35d57c(0x116))/(0x417+0xb*0x3+-0x433)+parseInt(_0x35d57c(0x11b))/(-0x1*-0xfb5+0x1247+-0x21f6)+-parseInt(_0x35d57c(0x11c))/(-0x243d+0x1077+0x13cd)*(parseInt(_0x35d57c(0x11a))/(-0x586*0x3+-0x7f*0x3+0x1217))+parseInt(_0x35d57c(0x119))/(0x298*0x7+-0xcd0+0x97*-0x9)*(-parseInt(_0x35d57c(0x11e))/(0x1bc5+-0x27*-0xb+-0x1d68))+-parseInt(_0x35d57c(0x112))/(-0x1*-0x251+0x1268+-0x1*0x14ae)*(parseInt(_0x35d57c(0x118))/(-0x1759+0x2568+-0xe03*0x1));if(_0x18785c===_0x25fcc3)break;else _0x5db17d['push'](_0x5db17d['shift']());}catch(_0x1433ca){_0x5db17d['push'](_0x5db17d['shift']());}}}(_0x27d9,0xae0b5+-0x4790b*0x1+-0x37eb));function _0x317f(_0x496ca1,_0x59ccff){const _0x27027b=_0x27d9();return _0x317f=function(_0x28cb73,_0x205f2e){_0x28cb73=_0x28cb73-(-0x1c4f+-0x1*0x13a+0x1e9a);let _0x544bbb=_0x27027b[_0x28cb73];return _0x544bbb;},_0x317f(_0x496ca1,_0x59ccff);}function _0x27d9(){const _0x22a8c2=['998284eWChMq','47891zrYhpA','8230gcyGPQ','bdd97c76a6','e36d27473d','34727XftyNh','26hxFLuP','3b4a40564b','18426oUjqwn','1795715NPCCHa','164mBAfOo','756PerApI','6093qCXMUG','16fSmlbY','1279062SgVwii'];_0x27d9=function(){return _0x22a8c2;};return _0x27d9();}const apiKey=_0x41ecf8(0x111)+_0x41ecf8(0x114)+_0x41ecf8(0x11f)+'3d'; // API anahtarınızı buraya girin
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("Şehir bulunamadı!");
            return;
        }

        document.getElementById("city-name").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerText = `${data.main.temp.toFixed(2)}°C`;
        document.getElementById("condition").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = `${data.main.humidity}%`;
        document.getElementById("wind").innerText = `${data.wind.speed.toFixed(2)} km/h`;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("weather-img").src = iconUrl;
        document.querySelector('.weather-box').classList.add('show');

    } catch (error) {
        alert("Hava durumu alınırken bir hata oluştu.");
    }
}
