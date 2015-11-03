/**
 * Created by Emil on 03.11.2015.
 */
var url = "data/kamperdata.html";
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = 'document';
xhr.send();
xhr.onload = function(e) {
    var doc = e.target.responseXML;
    console.log("yolo");
    var data = doc.getElementById('data');
    console.log(data.children);
};

