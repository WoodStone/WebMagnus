/*
 FILNAVN: strategi.js
 LAGET AV: Vestein Dahl
 NÅR: November 2015
 MÅL: Animasjon av forskjellige strategier.
 */
var src = '../img/laersjakk/';
var s = {
    b: src + 's_bonde.png',
    d: src + 's_dronning.png',
    h: src + 's_hest.png',
    k: src + 's_konge.png',
    l: src + 's_loper.png',
    t: src + 's_tarn.png'
};
var h = {
    b: src + 'h_bonde.png',
    d: src + 'h_dronning.png',
    h: src + 'h_hest.png',
    k: src + 'h_konge.png',
    l: src + 'h_loper.png',
    t: src + 'h_tarn.png'
};
var brettimg = src + 'brett.png';

var passant = [
    false,
    [
        [s.t, s.h, s.l, s.d, s.k, s.l, s.h, s.t],
        [s.b, s.b, s.b, s.b, 0, s.b, s.b, s.b],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, s.b, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [h.b, h.b, h.b, h.b, h.b, h.b, h.b, h.b],
        [h.t, h.h, h.l, h.d, h.k, h.l, h.h, h.t]
    ],
    [
        [s.t, s.h, s.l, s.d, s.k, s.l, s.h, s.t],
        [s.b, s.b, s.b, s.b, 0, s.b, s.b, s.b],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, h.b, s.b, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [h.b, h.b, h.b, 0, h.b, h.b, h.b, h.b],
        [h.t, h.h, h.l, h.d, h.k, h.l, h.h, h.t]
    ],
    [
        [s.t, s.h, s.l, s.d, s.k, s.l, s.h, s.t],
        [s.b, s.b, s.b, s.b, 0, s.b, s.b, s.b],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, s.b, 0, 0, 0, 0],
        [h.b, h.b, h.b, 0, h.b, h.b, h.b, h.b],
        [h.t, h.h, h.l, h.d, h.k, h.l, h.h, h.t]
    ],
    [
    [s.t, s.h, s.l, s.d, s.k, s.l, s.h, s.t],
        [s.b, s.b, s.b, s.b, 0, s.b, s.b, s.b],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, s.b, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [h.b, h.b, h.b, h.b, h.b, h.b, h.b, h.b],
        [h.t, h.h, h.l, h.d, h.k, h.l, h.h, h.t]
    ]
];

var patt = [
    false,
    [
        [0, 0, 0, 0, 0, 0, 0, s.k],
        [0, 0, 0, 0, 0, 0, 0, h.b],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, h.k],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, s.k],
        [0, 0, 0, 0, 0, 0, 0, h.b],
        [0, 0, 0, 0, 0, 0, 0, h.k],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, s.k],
        [0, 0, 0, 0, 0, 0, 0, h.b],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, h.k],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ]
];

var kongebondeapning = [
    false,
    [
        [s.t, s.h, s.l, s.d, s.k, s.l, s.h, s.t],
        [s.b, s.b, s.b, s.b, s.b, s.b, s.b, s.b],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [h.b, h.b, h.b, h.b, h.b, h.b, h.b, h.b],
        [h.t, h.h, h.l, h.d, h.k, h.l, h.h, h.t]
    ],
    [
        [s.t, s.h, s.l, s.d, s.k, s.l, s.h, s.t],
        [s.b, s.b, s.b, s.b, s.b, s.b, s.b, s.b],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, h.b, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [h.b, h.b, h.b, h.b, 0, h.b, h.b, h.b],
        [h.t, h.h, h.l, h.d, h.k, h.l, h.h, h.t]
    ],
    [
        [s.t, s.h, s.l, s.d, s.k, s.l, s.h, s.t],
        [s.b, s.b, s.b, s.b, s.b, s.b, s.b, s.b],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [h.b, h.b, h.b, h.b, h.b, h.b, h.b, h.b],
        [h.t, h.h, h.l, h.d, h.k, h.l, h.h, h.t]
    ]
];

var mattkongetarn = [
    false,
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, s.k, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [h.t, 0, 0, 0, h.k, 0, 0, h.t]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, s.k, 0, 0, 0],
        [h.t, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, h.k, 0, 0, h.t]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, s.k, 0, 0, 0, 0],
        [h.t, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, h.k, 0, 0, h.t]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, s.k, 0, 0, 0, h.t],
        [h.t, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, h.k, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, s.k, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, h.t],
        [h.t, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, h.k, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [h.t, 0, s.k, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, h.t],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, h.k, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, s.k, 0, 0, 0, 0, 0, 0],
        [h.t, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, h.t],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, h.k, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, s.k, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, h.t, 0],
        [0, 0, 0, 0, 0, 0, 0, h.t],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, h.k, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, s.k, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, h.t, 0],
        [0, 0, 0, 0, 0, 0, 0, h.t],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, h.k, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, s.k, 0, 0, 0, 0, h.t],
        [0, 0, 0, 0, 0, 0, h.t, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, h.k, 0, 0, 0]
    ],
    [
        [0, 0, 0, s.k, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, h.t],
        [0, 0, 0, 0, 0, 0, h.t, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, h.k, 0, 0, 0]
    ],
    [
        [0, 0, 0, s.k, 0, 0, h.t, 0],
        [0, 0, 0, 0, 0, 0, 0, h.t],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, h.k, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, s.k, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [h.t, 0, 0, 0, h.k, 0, 0, h.t]
    ]
];


//Laster inn de forskjellige brettene og animasjonene
onload = function() {

    loadBrett('passant', passant);
    loadBrett('patt', patt);
    loadBrett('kongebondeapning', kongebondeapning);
    loadBrett('mattkongetarn', mattkongetarn);

};

/*
Laster inn en liste, 'brett_a' med brett representert med matriser,
til den spesifike tag-en med id 'section'.
*/
function loadBrett(section, brett_a) {
    var brett = brett_a[1];
    var brett_section = document.createElement('canvas');
    var ctx = brett_section.getContext('2d');
    ctx.clearRect(0, 0, 208, 208);
    brett_section.width = 208;
    brett_section.height = 208;
    brett_section.className = 'brett_section';
    brett_section.title = "Trykk for å spille av animasjon.\n(original images by Wikipedia user Cburnett)";

    var background = new Image();
    background.className = 'brett';
    background.src = brettimg;
    background.addEventListener('load', function() {
        ctx.drawImage(background, 0, 0);
    });

    for (var i = 0; i < brett.length; i++) {
        for (var j = 0; j < brett.length; j++) {
            if (brett[i][j] != 0) {
                var brikke = new Image();
                brikke.src = brett[i][j];
                brikke.className = 'brikke';
                brikke.top = i * 26;
                brikke.left = j * 26;
                brikke.addEventListener('load', function() {
                    ctx.drawImage(this, this.left, this.top);
                });
            }
        }
    }

    brett_section.addEventListener('click', function() {
       animated(this, brett_a, 1);
    });
    document.getElementById(section).appendChild(brett_section);
}

/*
Rekursiv funksjon som viser animasjonen til et brett.
Funksjonen tar inn et canvas objekt, 'self', en liste
med brett, 'brett_a', og dypden til rekursjonen, 'step'.
Det rekursive kallet vil stoppe n�r dypden er lik antall
elementer i 'brett_a'.
 */
function animated(self, brett_a, step) {
    if (step == 1 && brett_a[0]) {
        return;
    }
    brett_a[0] = (step != brett_a.length - 1);
    console.log(brett_a[0]);
    var ctx = self.getContext('2d');
    var brett = brett_a[step];
    var background = new Image();
    background.className = 'brett';
    background.src = brettimg;
    background.addEventListener('load', function() {
        ctx.drawImage(background, 0, 0);
    });
    for (var i = 0; i < brett.length; i++) {
        for (var j = 0; j < brett.length; j++) {
            if (brett[i][j] != 0) {
                var brikke = new Image();
                brikke.src = brett[i][j];
                brikke.className = 'brikke';
                brikke.top = i * 26;
                brikke.left = j * 26;
                brikke.addEventListener('load', function() {
                    ctx.drawImage(this, this.left, this.top);
                });
            }
        }
    }
    if (step < brett_a.length - 2) {
        setTimeout(function () {
            animated(self, brett_a, step + 1);
        }, 1000);
    } else if ( step < brett_a.length -1) {
        setTimeout(function () {
            animated(self, brett_a, step + 1);
        }, 2000);
    }
}
