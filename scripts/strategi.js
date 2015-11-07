
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

var testbrett = [
    [s.t, s.h, s.l, s.d, s.k, s.l, s.h, s.t],
    [s.b, s.b, s.b, s.b, s.b, s.b, s.b, s.b],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [h.b, h.b, h.b, h.b, h.b, h.b, h.b, h.b],
    [h.t, h.h, h.l, h.d, h.k, h.l, h.h, h.t]
];

var passant = [
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



onload = function() {

    loadBrett('passant', passant);
    loadBrett('patt', patt);
    loadBrett('kongebondeapning', kongebondeapning);

};

function loadBrett(section, brett_a) {
    var brett = brett_a[0];
    var brett_section = document.createElement('canvas');
    var ctx = brett_section.getContext('2d');
    ctx.clearRect(0, 0, 208, 208);
    brett_section.width = 208;
    brett_section.height = 208;
    brett_section.className = 'brett_section';

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
       animated(this, brett_a, 0);
    });
    document.getElementById(section).appendChild(brett_section);
}

function animated(self, brett_a, step) {
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
