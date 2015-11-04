/**
 * Created by Emil on 03.11.2015.
 *
 * Linje 11: Funksjonen lastInnfil() laster inn en fil fra en iframe som ligger i kamper.html
 * Linje 14: Splitter filen opp i liste av kamper
 * Linje 16: For-l�kke som itererer gjennom hver kamp
 * Linje 17: Splitter hver kamp inn i en liste med data
 */

//START innlasting
function lastInnFil(){
    var fil = document.getElementById("fraFil");
    var filInnhold = fil.contentWindow.document.body.children[0].innerHTML;
    var kamper = filInnhold.split("\n");

    for(var i = 0; i<kamper.length; i++){
        var kamp = kamper[i].split(","); //
        /**
         * kamp[0] = startdato og tidspunkt
         * kamp[1] = slutt
         * kamp[2] = navn p� turnering
         * kamp[3] = url til turneringens nettside
         * kamp[4] = Carlsens plassering hvis tilgjengelig (vil ikke v�re
         * tilgjengelig hvis ikke kampen har v�rt enda, eller hvis
         * resultat ikke er lagt inn enda).
         * kamp[5] = Antall poeng hvis tilgjengelig
         */
        // SLUTT innlasting
        // START kommende/resultatinnlegging
        var slutt = kamp[0].split('-'); //[0] = �r, [1] = m�ned, [2] = dag, [3] = time
        for(var i = 0; i<slutt.length; i++){
            slutt[i] = parseInt(slutt[i], 10); //Konverterer alle elementene i arrayet til integers
        }
        var sluttDate = new Date(slutt[0], slutt[1]-1, slutt[2], slutt[3]);
        // -1 p� m�ned fordi Date-objektet indekserer m�neder fra null
        var now = new Date();
        if(sluttDate > now){
            //sett inn under kommende kamper
        }
        else{
            //sett inn under resultater
        }
    }
}