
$('#random-button').on('click', function() {
  var randomColor = getColor();
  while (randomColor === '#ffffff') {
    getColor();
  } 
  $('html').css('background-color', randomColor);
});

function getColor(){
  var ascii = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70];
  var color = '#';
  while (color.length < 7){
    color += String.fromCharCode(ascii[Math.floor(Math.random() * 16)]);
  }
  return color;
}

$('#reset-button').on('click', function() {
  $('html').css('background', 'white');
});
