var numOfDrumButtons = document.querySelectorAll('.drum').length;
for (var i = 0; i < numOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var keyPressed = this.innerHTML;
    buttonAnimation(keyPressed);
    playSound(keyPressed);
  });
}
document.addEventListener('keypress', function (event) {
  buttonAnimation(event.key);
  playSound(event.key);
});

function playSound(key) {
  switch (key) {
    case 'w':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case 'a':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case 's':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case 'd':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case 'j':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case 'k':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case 'l':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    default:
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
  }
}

function buttonAnimation(buttonPressed) {
  var actualButton = document.querySelector('.' + buttonPressed);
  actualButton.classList.add('pressed');
  setTimeout(function () {
    actualButton.classList.remove('pressed');
  }, 100);
}
/* ---------------To change current element's style----------------------

document.querySelectorAll('.drum')[i].addEventListener('click', function(){console.log(this.style.comor="white");});


*/
