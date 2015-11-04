/**
 * Created by Emil on 03.11.2015.
 */

//START innlasting
function lastInnFil(){
    var fil = document.getElementById("fraFil"); //laster inn en fil fra en iframe som ligger i kamper.html
    var filInnhold = fil.contentWindow.document.body.children[0].innerHTML; //Splitter filen opp i liste av kamper
    var kamper = filInnhold.split("\n");

    for(var i = 0; i<kamper.length; i++){ //For-løkke som itererer gjennom hver kamp
        var kamp = kamper[i].split(","); // Splitter hver kamp inn i en liste med data
        /**
         * kamp[0] = startdato og tidspunkt
         * kamp[1] = slutt
         * kamp[2] = navn på turnering
         * kamp[3] = url til turneringens nettside
         * kamp[4] = Carlsens plassering hvis tilgjengelig (vil ikke være
         * tilgjengelig hvis ikke kampen har vært enda, eller hvis
         * resultat ikke er lagt inn enda).
         * kamp[5] = Antall poeng hvis tilgjengelig
         */

        var listElement = document.createElement('LI'); //Lager <li>-element
        listElement.appendChild(document.createTextNode(kamp.join()));
        // Til sammenligning av datoer:
        var slutt = kamp[0].split('-'); //[0] = år, [1] = måned, [2] = dag, [3] = time
        for(var x = 0; x<slutt.length; x++){
            slutt[x] = parseInt(slutt[x], 10); //Konverterer alle elementene i arrayet til integers
        }
        var sluttDate = new Date(slutt[0], slutt[1]-1, slutt[2], slutt[3]);
        // -1 på måned fordi Date-objektet indekserer måneder fra null
        var now = new Date();
        if(sluttDate > now){
            //sett inn under kommende kamper
            document.getElementById("kommende").appendChild(listElement);
        }
        else{
            //sett inn under resultater
            document.getElementById("resultater").appendChild(listElement);
        }
    }
}