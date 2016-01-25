  //Object variables
  var sun = new Image();
  var moon = new Image();
  var earth = new Image();

  //Main function
  function init(){
    sun.src = 'sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'earth.png';
    window.requestAnimationFrame(draw); //60fps, call draw function to get each new frame
  }

  //Drawing function
  function draw() {
    var ctx = document.getElementById('canvas').getContext('2d'); //get html canvas object

    ctx.globalCompositeOperation = 'destination-over'; //draw new shapes behind the canvas
    ctx.clearRect(0,0,600,600); // clear canvas

    ctx.fillStyle = 'rgba(0,0,0,0.4)'; //fill canvas - white
    ctx.strokeStyle = 'rgba(0,153,255,0.2)'; //stroke style for orbits
    ctx.save(); //save canvas state
    ctx.translate(300, 300); //move canvas origin to centre of canvas

    // Earth
    var time = new Date(); //time (to move Earth around)
    ctx.rotate(((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds()); //rotation
    ctx.translate(100,0); //translate (decide size of orbit)
    ctx.drawImage(earth,-12,-12); //draw Earth image
    ctx.translate(-210,0); //move back origin

    //Num before Math.PI decides speed
    //Translation value decides orbit size

    //Moon
    ctx.rotate(((3*Math.PI)/60)*time.getSeconds() + ((3*Math.PI)/60000)*time.getMilliseconds());
    ctx.translate(100,0);
    ctx.drawImage(moon,-5,-5);

    ctx.restore(); //restore to saved state

    ctx.beginPath();
    ctx.arc(300,300,280,0,Math.PI*2,false); // Neptune orbit
    //ctx.moveTo(400,300);
    ctx.arc(300,300,250,0,Math.PI*2,false); // Uranus orbit
    //ctx.moveTo(400,300);
    ctx.arc(300,300,210,0,Math.PI*2,false); // Saturn orbit
    //ctx.moveTo(400,300);
    ctx.arc(300,300,170,0,Math.PI*2,false); // Jupiter orbit
    //ctx.moveTo(400,300);
    ctx.arc(300,300,130,0,Math.PI*2,false); // Mars orbit
    //ctx.moveTo(400,300);
    ctx.arc(300,300,100,0,Math.PI*2,false); // Earth orbit
    //ctx.moveTo(400,300);
    ctx.arc(300,300,70,0,Math.PI*2,false); // Venus orbit
    //ctx.moveTo(400,300);
    ctx.arc(300,300,40,0,Math.PI*2,false); // Mercury orbit
    //ctx.moveTo(400,300);
    ctx.stroke(); //draw

    ctx.drawImage(sun,0,0,600,600); //draw sun (background)

    window.requestAnimationFrame(draw); //request next frame
  }

  init(); //start
