document.addEventListener( 'DOMContentLoaded', function () {
    var secondarySlider = new Splide( '#perviy-slider', {
        fixedWidth  : 60,
        height      : 365,
        cover       : false,
        isNavigation: true,
        focus       : 'center',
        direction:      'ttb',
        heightRatio: 0.6,
        perPage    : 7,
        breakpoints : {
            '600': {
                fixedWidth: 30,
                height    : 58,
            },
            
        },
    } ).mount();
    
    var primarySlider = new Splide( '#vtoroy-slider', {
        type       : 'fade',
        heightRatio: 0.5,
        pagination : false,
        arrows     : false,
        cover      : true,
        height: 360,
        fixedWidth:300
    } ); // do not call mount() here.
    
    primarySlider.sync( secondarySlider ).mount();
} );


let scr = document.getElementById('screen');
let count = document.getElementById('count');

function minus() {
    if (scr.textContent > 0) {
        scr.textContent=parseInt(scr.textContent)-1;
        count.textContent=parseInt(count.textContent)+1;
    } else if ( scr.textContent == 0 ) {
        return false
    }
    
}
function plus() {
    if (count.textContent > 0) {
        scr.textContent = parseInt(scr.textContent)+1;
        count.textContent = parseInt(count.textContent)-1;
    } else if ( count.textContent == 0 ) {
        return false
    }
}

function modal() {
    document.querySelector('.modall__korzina').classList.toggle('show')
}

function menu() {
    document.querySelector('.header__menu').classList.toggle('active')
    document.querySelector('.header__btn').classList.toggle('active')
}
