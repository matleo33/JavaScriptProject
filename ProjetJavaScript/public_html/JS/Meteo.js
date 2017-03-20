/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function AfficherMeteo() {
    
}

function appelWeather() {
    var page = "http://api.openweathermap.org/data/2.5/weather?q="+document.getElementById('ville').value+"&APPID=baba13f455b4b825452802461eabb87a&units=metric";
    var requeteAjax = new XMLHttpRequest();
    if (requeteAjax != null) {
        requeteAjax.open("GET", page, true);
        requeteAjax.addEventListener('readystatechange',function () {
            if (requeteAjax.readyState === XMLHttpRequest.DONE) {
                if (requeteAjax.status === 200) {
                    var json = JSON.parse(requeteAjax.responseText);
                    var text = 'Ville : '+ json.name
                        + '\n Temps : ' + json.weather[0].description
                        + '\n Température : '+ json.main.temp+'°C'
                        + "\n Max : " + json.main.temp_max+'°C' + ' Min :'+json.main.temp_min+'°C'
                        + "\n Humidité : "+json.main.humidity + '%';
                    document.getElementById('result').innerText=text;
                }
            }
        });
        requeteAjax.send();
    }
    else
    {
        window.alert("Pas de support AJAX");
    }
}