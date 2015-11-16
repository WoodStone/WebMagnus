/*
FILNAVN: menu.js
LAGET AV: Midttun, Austad, Kollstrøm, Dahl
NÅR: November 2015
MÅL: Setter inn meny på hver side i navbar div-boksen
*/


/*Funksjonen limer inn menyen i navbar div-boksen*/
function menu () {
  document.getElementById('navbar').innerHTML = '<nav class="navbar navbar-inverse navbar-fixed-top shadow3"><div class="container"><div id="navbar" class="navbar-collapse collapse navbar-ex1-collapse"><ul class="nav navbar-nav"><li><a href="/tordsa/WebMagnus/hjem.html">Hjem</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Magnus Carlsen<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="/tordsa/WebMagnus/carlsen/carlsen.html">Om Carlsen</a></li><li><a href="/tordsa/WebMagnus/carlsen/spill.html">Prestasjoner</a></li><li><a href="/tordsa/WebMagnus/carlsen/motstander.html">Motstandere</a></li><li><a href="/tordsa/WebMagnus/carlsen/team.html">Team Carlsen</a></li></ul></li><li><a href="/tordsa/WebMagnus/kamper/kamper.html">Kamper</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Spillet sjakk <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="/tordsa/WebMagnus/laersjakk/laersjakk.html">Lær å spille sjakk</a></li><li><a href="/tordsa/WebMagnus/laersjakk/brikkene.html">Bli kjent med brikkene</a></li><li><a href="/tordsa/WebMagnus/laersjakk/uttrykk.html">Ord og uttrykk</a></li><li><a href="/tordsa/WebMagnus/laersjakk/strategi.html">Enkel strategi</a></li><li><a href="/tordsa/WebMagnus/laersjakk/vitemer.html">Vil du vite mer?</a></li></ul></li><li><a href="/tordsa/WebMagnus/om/om.html">Om</a></li></ul></div><!--/.nav-collapse --></div></nav>'
}

menu();
