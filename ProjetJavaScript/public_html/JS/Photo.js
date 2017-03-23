/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function appelPhoto() {
    var URL = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(URL,{
        tags: $("#searchPhoto").val(),
        tagmode: "any",
        format : "json"}).done(function(reponse)
    {
        if(document.getElementById('flickr')!=null)
        {
            parent = document.getElementById('flickr').parentNode;
            document.getElementById('flickr').parentNode.removeChild(document.getElementById('flickr'));
        }
        var image = reponse.items[0].media.m;
        var img = document.createElement('img');
        img.src = image;
        img.id = 'flickr';
        document.getElementById('photo').appendChild(img);

    });
}

function supprimerPhoto() {
    $("#widgetPhoto").click(function(){
        $("#widgetPhoto").hide();
    });
}

function AfficherPhotos() {
    $("#widgetPhoto").show();
}