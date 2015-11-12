/* Script for å telle ned til neste kamp.
   Bruker ../data/kamper.txt
   Erlend Midttun <erlend.midttun@ntnu.no>
 */

/* Algoritme:
   * Bruker XMLHttpRequest til å få ned fila
   * Laste inn i array
   * Splitte array i linjer
   * Loope over linjene for å finne neste kamp evt pågåande kamp
   ** Splitte opp linja
   *** Felt nr 1 er startdato for kamp
   *** Felt nr 2 er sluttdato for kamp
   *** Viss felt nr 2 er i fortida, skip linje
   *** Neste linje er vår linje:
   **** Viss felt nr 1 er i fortida -> Turnering pågår med link (felt 4)
   **** Viss felt nr 1 er i framtida -> Vis kor lenge det er til
   **** Unntak: Viss linja er tom -> Vis ingenting

   Corner case:
   * kamper.txt endres på server.  Håndteres ikkje.

   Datoformattering: 
   * "66d 12t 45m 23s". 
   * "Turnering pågår" med link (felt 4)
   * Evt blank viss ikkje meir data i fil
 
   Datokonvertering:
   * Bruk millisekunder sidan 1970-01-01 00:00 (aka getTime()) for utrekning
 */

var dataUrl = "/ebm/IT2805/WebMagnus/data/kamper.txt";

/* Returnerer tal med evt 0 foran
   Argumentet er eit tal
 */
function prettyPrint ( payload ) {
    if ( payload < 10 ) {
        return "0" + payload.toString();
    } else {
        return payload;
    }
}

/*
    Funksjon som sammenligner datoer
    Argument 1: Første dato
    Argument 2: Siste dato
    Returverdi: Differansen
 */
function getDateDiff ( firstDate, secondDate ) {
    return secondDate - firstDate;
}

/*
    Funksjon som splitter millisekunder opp i dager, timer, minutter og sekunder
    Argument: Millisekunder
    Returverdi: Streng 84d 23h 24m 01s
 */
function splitDate ( myMilliSeconds ) {
    // Lengde i millisekunder
    var day     = 24*60*60*1000;
    var hour    = 60*60*1000;
    var minute  = 60*1000;
    var second  = 1000;

    // Dager
    var days  = Math.floor( myMilliSeconds / day );
    var rest  = Math.floor( myMilliSeconds % day );

    // Timer
    var hours = prettyPrint(Math.floor( rest / hour ));
        rest  = Math.floor( rest % hour );

    // Minutter
    var minutes = prettyPrint(Math.floor( rest / minute ));
        rest    = Math.floor( rest % minute );

    // Sekunder
    var seconds = prettyPrint(Math.floor( rest / second ));
        rest    = Math.floor( rest % second );

    return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}


/*
  Funksjon som faktisk gjer jobben.
  Format datafil (henta frå resultater.js):
     * kamp[0] = startdato og tidspunkt
     * kamp[1] = slutt
     * kamp[2] = navn på turnering
     * kamp[3] = url til turneringens nettside
     * kamp[4] = Carlsens plassering hvis tilgjengelig (vil ikke være
       tilgjengelig hvis ikke kampen har vært enda, eller hvis
       resultat ikke er lagt inn enda).
     * kamp[5] = Antall poeng hvis tilgjengelig
 */
function reallyDisplayNextGame ( allTheGames ) {
    var games = allTheGames.split("\n");

    // Traverser fila
    for (var i = 0; i < games.length; i++) {
        // Del opp kvar line
        var game = games[i].split(",");

        // Dra ut det vi treng
        var startTime = game[0].split("-");
        var endTime = game[1].split("-");
        var gameUrl = game[3];

        var startDate = new Date( startTime[0], startTime[1] - 1,
                                  startTime[2], startTime[3]);
        var endDate = new Date( endTime[0], endTime[1] - 1,
                                endTime[2], endTime[3]);
 
        var now = new Date();
        // Sjekk om slutt-tid er i framtida
        if ( getDateDiff( endDate.getTime(), now.getTime() ) < 0 ) {
            var startDateDiff = getDateDiff( now.getTime(), startDate.getTime() )
            if ( startDateDiff > 0 ) {
                // Er startdato i framtida?
                document.getElementById("nedteller").innerHTML = splitDate(startDateDiff);
                break;
            } else {
                // Eller har denne matchen starta?
                document.getElementById("nedteller").innerHTML = '<a href="' + gameUrl + '">Turnering pågår</a>';
                break;
            }
        }
    }
}
/*
  Funksjon som wrapper resten.
  Filnedlasting er lagt hit for å unngå å laste ned dataUrl kvart sekund.
  Avhengig av datafil definert i global variabel "dataUrl"
 */
function displayNextGame () {
    var wholeFile;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
           wholeFile = xhttp.responseText;
           // Oppdateres kvart sekund
           setInterval( function () { reallyDisplayNextGame( wholeFile ); }, 1000);
        }
    }
    xhttp.open("GET", dataUrl, true);
    xhttp.send();

    return true;
}

displayNextGame ();
