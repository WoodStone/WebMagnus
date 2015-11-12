/**
 * Created by Emil on 03.11.2015.
 */

//START innlasting
function lastInnFil(){
    var fil = document.getElementById("fraFil"); //laster inn en fil fra en iframe som ligger i kamper.html
    var filInnhold = fil.contentWindow.document.body.children[0].innerHTML; //Splitter filen opp i liste av kamper
    var kamper = filInnhold.split("\n");

    for(var i = 0; i<kamper.length; i++){ //For-l�kke som itererer gjennom hver kamp
        var kamp = kamper[i].split(","); // Splitter hver kamp inn i en liste med data
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

        var start = kamp[0].substring(0, kamp[0].length-3);
        // Til sammenligning av datoer:
        var slutt = kamp[1].split('-'); //[0] = �r, [1] = m�ned, [2] = dag, [3] = time
        for(var x = 0; x<slutt.length; x++){
            slutt[x] = parseInt(slutt[x], 10); //Konverterer alle elementene i arrayet til integers
        }
        var sluttDate = new Date(slutt[0], slutt[1]-1, slutt[2], slutt[3]);
        // -1 p� m�ned fordi Date-objektet indekserer m�neder fra null
        var now = new Date();

        var a = document.createElement('a');
        var kampLink = document.createTextNode(kamp[2]);
        a.appendChild(kampLink);
        a.title = kamp[2];
        a.href = kamp[3];
        var parsed = [kamp[0].substring(0, kamp[0].length-3)]; //dato
        parsed.push(a); // link

        if(sluttDate > now){
            //legg til under kommende kamper
            //document.getElementById("kommende").appendChild(a);
            leggTilTurnering("kommende", parsed);
        }
        else{
            //legg til under resultater
            //document.getElementById("resultater").appendChild(a);
            parsed.push(kamp[4]); // Plassering
            parsed.push(kamp[5]); // Antall poeng
            leggTilTurnering("resultater", parsed);
        }
    }
}

function leggTilTurnering(id, parsed){
    var table = document.getElementById(id);
    var rad = table.insertRow(table.length);

    for(y = 0; y<parsed.length; y++){
        if(y !== 1){
            var celle = rad.insertCell(rad.length);
            celle.innerHTML = parsed[y];
        }
        else{
            var c = rad.insertCell(rad.length);
            c.appendChild(parsed[1]);
        }
    }
}