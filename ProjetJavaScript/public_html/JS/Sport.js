/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function appelSport() {
    $.ajax({
        headers: { 'X-Auth-Token': '3a7ad2fb51324516978c911202db744c' },
        url: 'http://api.football-data.org/v1/teams/5/fixtures',
        dataType: 'json',
        type: 'GET',
    }).done(function(response) {
        var dernierRes = null;
        for(var i=0;i<response.fixtures.length;i++)
        {
            if(response.fixtures[i].result.goalsHomeTeam == null)
            {
                dernierRes = i-1;
                break;
            }
        }
        var text =response.fixtures[dernierRes].homeTeamName + " : " + response.fixtures[dernierRes].result.goalsHomeTeam +" - "+ response.fixtures[dernierRes].result.goalsAwayTeam +" "+ response.fixtures[dernierRes].awayTeamName;
        document.getElementById('resultSport').innerText+=text +"\n";

    });
}

function supprimerSport() {
    document.getElementById("widgetSport").remove();
}