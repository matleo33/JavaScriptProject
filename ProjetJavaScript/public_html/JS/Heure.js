/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function AfficherHeure() {
    if (document.getElementById('DivTemps') == null) {
        $('body').append($('<div id="DivTemps" class="col-md-3"> <div class="panel panel-primary"> <div class="panel-heading clearfix"> <span style="float:right" onclick="supprimerHeure()">&times;</span>Temps </div> <div class="panel-body" id="horloge"> </div> </div> </div>'));
    }
}

function affichageHeureB() {
    var d = new Date();
    var horloge = document.getElementById("horloge");
    horloge.innerHTML=d.toLocaleDateString()+'  '+d.toLocaleTimeString();
}
function supprimerHeure(){
    document.getElementById('DivTemps').remove();
}