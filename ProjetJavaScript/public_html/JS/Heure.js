/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function affichageHeure() {
    window.setInterval(affichageHeureB,1000)
}

function affichageHeureB() {
    var d = new Date();
    var horloge = document.getElementById("horloge");
    horloge.innerHTML=d.toLocaleDateString()+'  '+d.toLocaleTimeString();
}