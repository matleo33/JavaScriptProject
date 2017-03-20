/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function appelSport()
{
    var requeteAjax = new XMLHttpRequest();
    if (requeteAjax != null) {
        requeteAjax.open("GET",'http://api.football-data.org/v1/teams/5/fixtures', true);
        requeteAjax.addEventListener('readystatechange',function () {
            if (requeteAjax.readyState === XMLHttpRequest.DONE) {
                if (requeteAjax.status === 200) {
                    var json = JSON.parse(requeteAjax.responseText);
                    alert(json);
                    var text = json.homeTeamName + " : " + json.result.goalsHomeTeam +" - "+ json.result.goalsAwayTeam +" "+ json.awayTeamName;
                    document.getElementById('resultSport').innerText=text;
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