function menu () {
  document.getElementById('navbar').innerHTML = '<nav class="navbar navbar-inverse navbar-fixed-top shadow3"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><!-- div-boksen x767 er usynlig hvis siden er under 768px width --><div class="x767"><a class="navbar-brand" href="#">Neste Carlsen-kamp</a></div><div class="x768"></div></div><div id="navbar" class="navbar-collapse collapse navbar-ex1-collapse"><ul class="nav navbar-nav"><li><a href="/tordsa/WebMagnus/hjem.html">Hjem</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Magnus Carlsen<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="/tordsa/WebMagnus/carlsen/carlsen.html">Om Carlsen</a></li><li><a href="/tordsa/WebMagnus/carlsen/spill.html">Prestasjoner</a></li><li><a href="/tordsa/WebMagnus/carlsen/motstander.html">Motstandere</a></li><li><a href="/tordsa/WebMagnus/carlsen/team.html">Team Carlsen</a></li></ul></li><li><a href="/tordsa/WebMagnus/kamper/kamper.html">Kamper</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Spillet sjakk <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="/tordsa/WebMagnus/laersjakk/laersjakk.html">Lær å spille sjakk</a></li><li><a href="/tordsa/WebMagnus/laersjakk/brikkene.html">Bli kjent med brikkene</a></li><li><a href="/tordsa/WebMagnus/laersjakk/uttrykk.html">Ord og uttrykk</a></li><li><a href="/tordsa/WebMagnus/laersjakk/strategi.html">Enkel strategi</a></li><li><a href="/tordsa/WebMagnus/laersjakk/vitemer.html">Vil du vite mer?</a></li></ul></li><li><a href="/tordsa/WebMagnus/om/om.html">Om</a></li></ul></div><!--/.nav-collapse --></div></nav>'
}

menu();
