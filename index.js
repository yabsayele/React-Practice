
function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}

document.getElementsByClassName("w drum")[0].addEventListener('click', event => {
  var audio = new Audio('sounds/tom-1.mp3');
  audio.play()
});
document.getElementsByClassName("a drum")[0].addEventListener('click',event => {
  var audio = new Audio('sounds/tom-2.mp3');
  audio.play()
});
document.getElementsByClassName("s drum")[0].addEventListener('click',event => {
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play()
});
document.getElementsByClassName("d drum")[0].addEventListener('click',event => {
  var audio = new Audio('sounds/tom-4.mp3');
  audio.play()
});
document.getElementsByClassName("j drum")[0].addEventListener('click',event => {
  var audio = new Audio('sounds/snare.mp3');
  audio.play()
});
document.getElementsByClassName("k drum")[0].addEventListener('click',event => {
  var audio = new Audio('sounds/crash.mp3');
  audio.play()
});
document.getElementsByClassName("l drum")[0].addEventListener('click',event => {
  var audio = new Audio('sounds/kick-bass.mp3');
  audio.play()
});
