/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function rechercheYoutube() {
    var recherche = document.getElementById('recherche').value;
    var scr = "<iframe id=\"ytplayer\" src=\"http://www.youtube.com/embed?listType=search&list="+recherche+"/>";
    var script = document.createElement('script');
    script.src = scr;
    script.defer = true;
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);
}