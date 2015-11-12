/*
FILNAVN: brikkene.js
LAGET AV: Tord Austad
NÅR: November 2015
MÅL: Endrer innholdet i div-boksen "brikker" i brikkene.html etter hvilken knapp som er trykket.
*/

window.onload = function () {
	document.getElementById('konge').addEventListener('click',function (){show("0")});
	document.getElementById('dronning').addEventListener('click',function (){show('1')});
	document.getElementById('tarn').addEventListener('click',function (){show('2')});
  document.getElementById('loper').addEventListener('click',function (){show('3')});
  document.getElementById('springer').addEventListener('click',function (){show('4')});
  document.getElementById('bonde').addEventListener('click',function (){show('5')});
};

/*preloader bilder*/
(function () {
    var moves = [ "img/kingmoves.png", "img/queenmoves.png", "img/rookmoves.png", "img/bishopmoves.png", "img/knightmoves.png", "img/pawnmoves.png", 'img/king2.png', 'img/queen2.png', 'img/rook2.png', 'img/bishop2.png', 'img/knight2.png', 'img/pawn2.png'];
    for (var i = 0; i < moves.length; i++) {
        var move = document.createElement("img");
        move.src = moves[i];
    }
}());

function show (brikke) {
	/*Konge*/
  if (brikke === "0") {
		document.getElementById('brikkeinfo').style.display = 'block';
		document.getElementById('brikkerimg').style.display = 'block';

    document.getElementById('konge').src = 'img/king2.png';
    document.getElementById('dronning').src = 'img/queen.png';
    document.getElementById('tarn').src = 'img/rook.png';
    document.getElementById('loper').src = 'img/bishop.png';
    document.getElementById('springer').src = 'img/knight.png';
    document.getElementById('bonde').src = 'img/pawn.png';

		document.getElementById('konge').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('dronning').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('tarn').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('loper').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('springer').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('bonde').title = 'original image by Wikipedia user Cburnett';

		document.getElementById('brikkerimg').innerHTML = '<img src="img/kingmoves.png" alt="" title="original image by Wikipedia user Cburnett"/><p class="text-muted">Kongens mulige trekk.</p>';

    document.getElementById('brikkeinfo').innerHTML = '<h3>Konge</h3><p>Kongen er den viktigste brikken på brettet. Den avgjør hvem som taper og vinner. Til tross for å være den viktigste brikken, er det ikke en sterk brikke. Kongen brukes sjelden aktivt i partiet før sluttspillet. Som regel setter man kongen bak bøndene i starten for å beskytte den frem til sluttspillet.</p><p>Kongen kan bevege seg et felt i alle retninger (høyre, venstre, fremover, bakover, diagonalt). Unntaket er i rokade, hvor kongen kan flyttes to felter til høyre eller venstre. Den hvite kongen starter på feltet e1, mens den sorte kongen starter på feltet e8.</p>';
  }
	/*Dronning*/
  else if (brikke === "1") {
		document.getElementById('brikkeinfo').style.display = 'block';
		document.getElementById('brikkerimg').style.display = 'block';

    document.getElementById('konge').src = 'img/king.png';
    document.getElementById('dronning').src = 'img/queen2.png';
    document.getElementById('tarn').src = 'img/rook.png';
    document.getElementById('loper').src = 'img/bishop.png';
    document.getElementById('springer').src = 'img/knight.png';
    document.getElementById('bonde').src = 'img/pawn.png';

		document.getElementById('konge').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('dronning').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('tarn').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('loper').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('springer').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('bonde').title = 'original image by Wikipedia user Cburnett';

		document.getElementById('brikkerimg').innerHTML = '<img src="img/queenmoves.png" alt="" title="original image by Wikipedia user Cburnett"/><p class="text-muted">Dronningens mulige trekk.</p>';

    document.getElementById('brikkeinfo').innerHTML = '<h3>Dronning</h3><p>Dronningen er den sterkeste brikken på brettet, men svak i åpningsfasen. Man venter gjerne derfor med å ta den i bruk til midtspillet. Avbytte av dronningene markerer ofte starten på sluttspillet.</p><p>Dronningen kan flytte så mange felt man ønsker i alle retninger (framover, bakover, høyre, venstre, diagonalt). Den hvite dronningen starter på d1, mens den sorte dronningen på d8.</p>';
  }
	/*Tårn*/
  else if (brikke === "2") {
		document.getElementById('brikkeinfo').style.display = 'block';
		document.getElementById('brikkerimg').style.display = 'block';

    document.getElementById('konge').src = 'img/king.png';
    document.getElementById('dronning').src = 'img/queen.png';
    document.getElementById('tarn').src = 'img/rook2.png';
    document.getElementById('loper').src = 'img/bishop.png';
    document.getElementById('springer').src = 'img/knight.png';
    document.getElementById('bonde').src = 'img/pawn.png';

		document.getElementById('konge').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('dronning').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('tarn').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('loper').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('springer').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('bonde').title = 'original image by Wikipedia user Cburnett';

		document.getElementById('brikkerimg').innerHTML = '<img src="img/rookmoves.png" alt="" title="original image by Wikipedia user Cburnett"/><p class="text-muted">Tårnets mulige trekk.</p>';

    document.getElementById('brikkeinfo').innerHTML = '<h3>Tårn</h3><p>Tårnet er den nest sterkeste brikken i sjakk. Hver spiller starter med to tårn hver. De hvite tårnene starter på feltene a1 og h1, mens de sorte tårnene starter på a8 og h8. Tårn kan gå så mange felt de vil enten framover, bakover, høyre eller venstre</p>';
  }
	/*Løper*/
  else if (brikke === "3") {
		document.getElementById('brikkeinfo').style.display = 'block';
		document.getElementById('brikkerimg').style.display = 'block';

    document.getElementById('konge').src = 'img/king.png';
    document.getElementById('dronning').src = 'img/queen.png';
    document.getElementById('tarn').src = 'img/rook.png';
    document.getElementById('loper').src = 'img/bishop2.png';
    document.getElementById('springer').src = 'img/knight.png';
    document.getElementById('bonde').src = 'img/pawn.png';

		document.getElementById('konge').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('dronning').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('tarn').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('loper').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('springer').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('bonde').title = 'original image by Wikipedia user Cburnett';

		document.getElementById('brikkerimg').innerHTML = '<img src="img/bishopmoves.png" alt="" title="original image by Wikipedia user Cburnett"/><p class="text-muted">Løperens mulige trekk.</p>';

    document.getElementById('brikkeinfo').innerHTML = '<h3>Løper</h3><p>Hver spiller starter med to løpere. For hvit starter disse på c1 og f1, mens for sort på c8 og f8. Fordi løperene bare kan besøke felt av samme farge de starter på, blir de også kalt hvitfeltsløper og sortfeltsløper. Løperen kan flytte seg diagonalt så mange felt man vil. Èn løper kan bare besøke 32 av brettets 64 felter, og den regnes derfor som svakere enn tårnet.</p>';
  }
	/*Springer*/
  else if (brikke === "4") {
		document.getElementById('brikkeinfo').style.display = 'block';
		document.getElementById('brikkerimg').style.display = 'block';

    document.getElementById('konge').src = 'img/king.png';
    document.getElementById('dronning').src = 'img/queen.png';
    document.getElementById('tarn').src = 'img/rook.png';
    document.getElementById('loper').src = 'img/bishop.png';
    document.getElementById('springer').src = 'img/knight2.png';
    document.getElementById('bonde').src = 'img/pawn.png';

		document.getElementById('konge').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('dronning').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('tarn').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('loper').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('springer').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('bonde').title = 'original image by Wikipedia user Cburnett';

		document.getElementById('brikkerimg').innerHTML = '<img src="img/knightmoves.png" alt="" title="original image by Wikipedia user Cburnett"/><p class="text-muted">Springerens mulige trekk.</p>';

    document.getElementById('brikkeinfo').innerHTML = '<h3>Springer</h3><p>Hver spiller starter med to springere. For hvit starter disse på b1 og g1, mens for sort på b8 og g8. Springeren er den eneste brikken som kan hoppe over andre brikker, noe som gjør det til den eneste brikken bortsett fra bøndene som kan bevege seg i første trekk. Dette gjør at springeren er aktiv fra starten av.</p><p>Springeren kan bevege seg i en "L" ut fra sin utgangsposisjonen (se bilde under). På grunn av dette er springeren den eneste brikken som kan angripe en annen brikke (som ikke er springer) uten å være truet selv. Springeren regnes som like sterk som løperen, i midtspillet, men faller av mot sluttspillet.</p>';
  }
	/*Bonde*/
  else if (brikke === "5") {
		document.getElementById('brikkeinfo').style.display = 'block';
		document.getElementById('brikkerimg').style.display = 'block';

    document.getElementById('konge').src = 'img/king.png';
    document.getElementById('dronning').src = 'img/queen.png';
    document.getElementById('tarn').src = 'img/rook.png';
    document.getElementById('loper').src = 'img/bishop.png';
    document.getElementById('springer').src = 'img/knight.png';
    document.getElementById('bonde').src = 'img/pawn2.png';

		document.getElementById('konge').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('dronning').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('tarn').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('loper').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('springer').title = 'original image by Wikipedia user Cburnett';
		document.getElementById('bonde').title = 'original image by Wikipedia user Cburnett';

		document.getElementById('brikkerimg').innerHTML = '<img src="img/pawnmoves.png" alt="" title="original image by Wikipedia user Cburnett"/><p class="text-muted">Bondens mulige trekk.</p>';

    document.getElementById('brikkeinfo').innerHTML = '<h3>Bonde</h3><p>Hver spiller starter med 8 bønder. For hvit plasseres de på feltene på andre rad, med andre ord a2-h2, og for sort på syvende rad, a7-h7. På grunn av at hver bonde har sin egen kolonne, kalles de også for a-bonde, b-bonde, osv.</p><p>Bøndene er unike i at de bare kan gå fremover. Hvis bonden ikke har beveget seg dette partiet kan den gå opptil to felt fremover, men etter det kan den bare gå ett felt om gangen. Bonden kan heller ikke slå ut brikker som står i sin vei, de kan kun slå ut brikker som står ett felt diagonalt framover for seg. Dette er den eneste måten en bonde kan bytte kolonne.</p><p>Klarer man å få en av sine bonder over til motstanderens førsterad, blir bonden forvandlet til en annen brikke. Spilleren velger selv hvilken brikke man vil ha (alt annet enn konge), så naturligvis er dronning det vanligste valget. I visse tilfeller kan det være bedre å velge springer. Tårn velges kun får å unngå patt.</p>';
  }
}
