/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function rechercheYoutube() {
    //document.getElementById('widgetYoutube').remove(document.getElementById('ytplayer'));

    var recherche = document.getElementById('recherche').value;
    var iframe = document.createElement('iframe');
    iframe.id ="ytplayer";
    iframe.src = "http://www.youtube.com/embed?listType=search&list="+recherche;
    document.getElementById('widgetYoutube').appendChild(iframe);
}