/**
 * Filename: resultater.js
 * Created by: Emil O. Kollstrøm.
 * Date: 03.11.2015.
 * Purpose: Laste inn data om kamper fra kamper.txt, sette inn data i tabell på fanene i kamper.html.
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

        var start = kamp[0].substring(0, kamp[0].length-3);
        // Til sammenligning av datoer:
        var slutt = kamp[1].split('-'); //[0] = år, [1] = måned, [2] = dag, [3] = time
        for(var x = 0; x<slutt.length; x++){
            slutt[x] = parseInt(slutt[x], 10); //Konverterer alle elementene i arrayet til integers
        }
        var sluttDate = new Date(slutt[0], slutt[1]-1, slutt[2], slutt[3]);
        // -1 på måned fordi Date-objektet indekserer måneder fra null
        var now = new Date();

        var a = document.createElement('a');
        var kampLink = document.createTextNode(kamp[2]);
        a.appendChild(kampLink);
        a.title = kamp[2];
        a.href = kamp[3];
        var parsed = [kamp[0].substring(0, kamp[0].length-3)]; //dato
        parsed.push(a); // link

        if(sluttDate > now){ //Hvis sluttdatoen er frem i tid i forhold til nåværende dato:
            //legg til under kommende kamper
            leggTilTurnering("kommende", parsed);
        }
        else{
            //legg til under resultater
            parsed.push(kamp[4]); // Plassering
            parsed.push(kamp[5]); // Antall poeng
            leggTilTurnering("resultater", parsed);
        }
    }
}
/**
 * leggTilTurnering tar inn to parametre
 * @param id brukes for å avgjøre hvilken fane kampen skal legges inn under kommende eller resultater
 * @param parsed er formatert data til kampene
 */
function leggTilTurnering(id, parsed){
    var table = document.getElementById(id);
    var rad = table.insertRow(table.length);
    /**
     * For-løkke som legger til kampdata i tabellen
     */
    for(y = 0; y<parsed.length; y++){
        if(y !== 1){ //på parsed[1] ligger det en link, derfor vil an ikke legge den til på samme måte som ellers
            var celle = rad.insertCell(rad.length);
            celle.innerHTML = parsed[y];
        }
        else{//Legger til linken
            var c = rad.insertCell(rad.length);
            c.appendChild(parsed[1]);
        }
    }
}
