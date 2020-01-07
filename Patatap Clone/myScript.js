//set specific sounds for each letter key
var keyData = {
  q: {
    sound: new Howl({
      src: ['sounds/bubbles.mp3']
    })
  },
  w: {
    sound: new Howl({
      src: ['sounds/clay.mp3']
    })
  },
  e: {
    sound: new Howl({
      src: ['sounds/confetti.mp3']
    })
  },
  r: {
    sound: new Howl({
      src: ['sounds/corona.mp3']
    })
  },
  t: {
    sound: new Howl({
      src: ['sounds/dotted-spiral.mp3']
    })
  },
  y: {
    sound: new Howl({
      src: ['sounds/flash-1.mp3']
    })
  },
  u: {
    sound: new Howl({
      src: ['sounds/flash-2.mp3']
    })
  },
  i: {
    sound: new Howl({
      src: ['sounds/flash-3.mp3']
    })
  },
  o: {
    sound: new Howl({
      src: ['sounds/glimmer.mp3']
    })
  },
  p: {
    sound: new Howl({
      src: ['sounds/moon.mp3']
    })
  },
  a: {
    sound: new Howl({
      src: ['sounds/pinwheel.mp3']
    })
  },
  s: {
    sound: new Howl({
      src: ['sounds/piston-1.mp3']
    })
  },
  d: {
    sound: new Howl({
      src: ['sounds/piston-2.mp3']
    })
  },
  f: {
    sound: new Howl({
      src: ['sounds/piston-3']
    })
  },
  g: {
    sound: new Howl({
      src: ['sounds/prism-1.mp3']
    })
  },
  h: {
    sound: new Howl({
      src: ['sounds/prism-2.mp3']
    })
  },
  j: {
    sound: new Howl({
      src: ['sounds/prism-3.mp3']
    })
  },
  k: {
    sound: new Howl({
      src: ['sounds/splits.mp3']
    })
  },
  l: {
    sound: new Howl({
      src: ['sounds/squiggle.mp3']
    })
  },
  z: {
    sound: new Howl({
      src: ['sounds/strike.mp3']
    })
  },
  x: {
    sound: new Howl({
      src: ['sounds/suspension.mp3']
    })
  },
  c: {
    sound: new Howl({
      src: ['sounds/timer.mp3']
    })
  },
  v: {
    sound: new Howl({
      src: ['sounds/ufo.mp3']
    })
  },
  b: {
    sound: new Howl({
      src: ['sounds/veil.mp3']
    })
  },
  n: {
    sound: new Howl({
      src: ['sounds/wipe.mp3']
    })
  },
  m: {
    sound: new Howl({
      src: ['sounds/zig-zag.mp3']
    })
  }
}

var circles = [];
function onKeyDown(event) {

  if (keyData[event.key]) {
    var maxPoint =  new Point(view.size.width, view.size.height),
        randomPoint = Point.random(),
        //generates random point within screen size, responsive to resizing
        point = maxPoint * randomPoint,
        radius = (Math.random()+100)*5;
    var newCircle = new Path.Circle(point, radius);

    newCircle.fillColor = randomColor();
    keyData[event.key].sound.play();

    circles.push(newCircle);
  }//nothing happens if none of the key letters are pressed
}

function onFrame(event) {
  for(var i = 0 ; i < circles.length ; i++){
    circles[i].fillColor.hue += 1;
    circles[i].scale(.9);
    if (circles[i].area < 1) {
      circles[i].remove(); //remove from the canvas
      circles.splice(i, 1); //remove from the array
    }
  }
}

function randomColor(){
  //pick a red from 0-255
  var r = Math.floor(Math.random()*256);
  //pick a green from 0-255
  var g = Math.floor(Math.random()*256);
  //pick a blue from 0-255
  var b = Math.floor(Math.random()*256);
  //rgb(r,g,b)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
