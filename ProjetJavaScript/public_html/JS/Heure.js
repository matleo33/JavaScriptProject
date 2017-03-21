/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function affichageHeureB() {
    var d = new Date();
    var horloge = document.getElementById("horloge");
    horloge.innerHTML=d.toLocaleDateString()+'  '+d.toLocaleTimeString();
}
function supprimerHeure() {
    $("#widgetTemps").click(function(){
        $("#widgetTemps").hide();
    });
}

function AfficherHeure() {
    $("#widgetTemps").show();
}