$(document).ready(function() {

  var dog = document.createElement('audio');
    dog.setAttribute('src', 'sounds/dog.wav');

  var cat = document.createElement('audio');
      cat.setAttribute('src', 'sounds/meow.wav');

  var wildcard = document.createElement('audio');
      wildcard.setAttribute('src', 'sounds/raccoon.wav');

  $("button#hello").click(function() {
    $("ul").prepend('<img id="dog" src="img/dog.gif" />')
    dog.play();


  });

  $("button#goodbye").click(function() {
    $("ul").prepend('<img id="cat" src="img/cat.gif" />')
    cat.play();

  });

  $("button#stop").click(function() {
    $("ul").prepend('<img id="dog" src="img/raccoon.gif" />')
    wildcard.play();

  });
});
