/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*function AfficherPhoto() {
    var URL = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"+document.getElementById('recherchePhoto').value;
    $.getJSON(URL,{
        tags: $("#searchPhoto").val(),
        tagmode: "any",
        format : "json"}).done(function(reponse)
    {
        var image = reponse.items[0].media;
        var img = document.createElement('img');
        img.src = image;
        document.getElementById('photo').appendChild(img);

    });
}*/

function appelPhoto()
{
    var requeteAjax = new XMLHttpRequest();
    if (requeteAjax != null) {
        requeteAjax.open("GET","https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"+document.getElementById('recherchePhoto').value, true);
        requeteAjax.addEventListener('readystatechange',function () {
            if (requeteAjax.readyState === XMLHttpRequest.DONE) {
                if (requeteAjax.status === 200) {
                    var json = requeteAjax.responseText;
                    var image = json.items[0].media;
                    var img = document.createElement('img');
                    img.src = image;
                    document.getElementById('photo').appendChild(img);
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