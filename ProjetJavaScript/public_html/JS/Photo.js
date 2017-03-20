/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function AfficherPhoto() {
    var URL = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
    $.getJSON(URL,{
        tags: $("#searchPhoto").val(),
        tagmode: "any",
        format : "json"}).done(function(reponse)
    {
        //parser json
    });
}