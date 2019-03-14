

var Btn = document.getElementById('button');
var  aboutBox = document.getElementById('content2');

Btn.onclick = function () {
        if (aboutBox.className == 'open') {
          aboutBox.className = '';
          Btn.innerHTML = 'About Me';
        }else {
          aboutBox.className = 'open';
          Btn.innerHTML = 'Collapse';
        }
      };

var Posy, slides;

function Scrolly() {
  slides = document.getElementById('button');
  Posy = window.pageYOffset;

  if (Posy > 50) {
    slides.style.marginTop = '-15px';
  }else {
    slides.style.marginTop = '0px';
  }

}

window.addEventListener('scroll', Scrolly);

var allSayings = $('h2');
var openSayings = 0;

function changeSayings() {

  $(allSayings[openSayings]).fadeOut(700, function () {

    if (openSayings == allSayings.length - 1) {
      openSayings = 0;
    }else {
      openSayings++;
    }

    $(allSayings[openSayings]).fadeIn(700);

  });

}

var timer = setInterval(changeSayings, 6000);

$(window).ready(function () {

    $('#myname').toggleClass('show');

  });

var arrowdown = document.getElementById('openarrow');
var  canvasbox = document.getElementById('canvas');
var  arrowControl = document.getElementById('arrowbox');

arrowdown.onclick = function () {
        if (canvasbox.className == 'show') {
          canvasbox.className = '';
          arrowdown.style.transform = 'rotate(45deg)';
          arrowdown.className = '';
          arrowControl.className = '';

        }else {
          canvasbox.className = 'show';
          arrowdown.style.transform = 'rotate(225deg)';
          arrowdown.className = 'change';
          arrowControl.className = 'active';

        }
      };


      var arrowL = document.getElementById('Tarrow');
      var  rateBox = document.getElementById('content3');
      var Posyt = window.pageYOffset;
      arrowL.addEventListener('click', slideLeft);

             function slideLeft() {

              if (rateBox.className == 'popup') {
                rateBox.className = '';
                arrowL.style.transform = 'rotate(315deg)';

              }else {
                rateBox.className = 'popup';
                arrowL.style.transform = 'rotate(135deg)';

              }
            }

            function fadeOff() {

              if (Posy > 50) {
                rateBox.style.marginLeft = '-10%';
              }else {
                rateBox.style.marginLeft = '0';
              }

            }

window.addEventListener('scroll', fadeOff);
