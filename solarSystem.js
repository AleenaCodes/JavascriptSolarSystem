  //Object variables
  var sun = new Image();
  var mercury = new Image();
  var venus = new Image();
  var earth = new Image();
  var mars = new Image();
  var jupiter = new Image();
  var saturn = new Image();
  var uranus = new Image();
  var neptune = new Image();

  //Main function
  function init(){
    sun.src = 'sun.png';
    mercury.src = 'mercury.png';
    venus.src = 'venus.png';
    earth.src = 'earth.png';
    mars.src = 'mars.png';
    jupiter.src = 'jupiter.png';
    saturn.src = 'saturn.png';
    uranus.src = 'uranus.png';
    neptune.src = 'neptune.png';
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

    //Neptune
    var time = new Date(); //time - rotate planets accordingly
    ctx.rotate(((10*Math.PI)/30)*time.getSeconds() + ((10*Math.PI)/30000)*time.getMilliseconds()); //place in orbit
    ctx.translate(280,0); //size of orbit
    ctx.drawImage(neptune,-9,-9); //draw planet pic
    ctx.translate(-280,0); //move origin back

    //Uranus
    ctx.rotate(((7.2*Math.PI)/30)*time.getSeconds() + ((7.2*Math.PI)/30000)*time.getMilliseconds());
    ctx.translate(250,0);
    ctx.drawImage(uranus,-11,-11);
    ctx.translate(-250,0);

    //Saturn
    ctx.rotate(((9.7*Math.PI)/60)*time.getSeconds() + ((9.7*Math.PI)/60000)*time.getMilliseconds());
    ctx.translate(210,0);
    ctx.drawImage(saturn,-14,-14);
    ctx.translate(-210,0);

    //Jupiter
    ctx.rotate(((4.1*Math.PI)/60)*time.getSeconds() + ((4.1*Math.PI)/60000)*time.getMilliseconds());
    ctx.translate(170,0);
    ctx.drawImage(jupiter,-16,-16);
    ctx.translate(-170,0);

    //Mars
    ctx.rotate(((6.9*Math.PI)/60)*time.getSeconds() + ((6.9*Math.PI)/60000)*time.getMilliseconds());
    ctx.translate(130,0);
    ctx.drawImage(mars,-9,-9);
    ctx.translate(-130,0);

    // Earth
    ctx.rotate(((3.3*Math.PI)/60)*time.getSeconds() + ((3.3*Math.PI)/60000)*time.getMilliseconds());
    ctx.translate(100,0);
    ctx.drawImage(earth,-12,-12);
    ctx.translate(-100,0);

    //Venus
    ctx.rotate(((8*Math.PI)/60)*time.getSeconds() + ((8*Math.PI)/60000)*time.getMilliseconds());
    ctx.translate(70,0);
    ctx.drawImage(venus,-12,-12);
    ctx.translate(-70,0);

    //Mercury
    ctx.rotate(((1.4*Math.PI)/60)*time.getSeconds() + ((1.4*Math.PI)/60000)*time.getMilliseconds());
    ctx.translate(40,0);
    ctx.drawImage(mercury,-9,-9);
    ctx.translate(-40,0);

    ctx.restore(); //restore to saved state

    ctx.beginPath();
    ctx.arc(300,300,280,0,Math.PI*2,false); // Neptune orbit
    ctx.moveTo(550,300);
    ctx.arc(300,300,250,0,Math.PI*2,false); // Uranus orbit
    ctx.moveTo(510,300);
    ctx.arc(300,300,210,0,Math.PI*2,false); // Saturn orbit
    ctx.moveTo(470,300);
    ctx.arc(300,300,170,0,Math.PI*2,false); // Jupiter orbit
    ctx.moveTo(430,300);
    ctx.arc(300,300,130,0,Math.PI*2,false); // Mars orbit
    ctx.moveTo(400,300);
    ctx.arc(300,300,100,0,Math.PI*2,false); // Earth orbit
    ctx.moveTo(370,300);
    ctx.arc(300,300,70,0,Math.PI*2,false); // Venus orbit
    ctx.moveTo(340,300);
    ctx.arc(300,300,40,0,Math.PI*2,false); // Mercury orbit
    ctx.stroke(); //draw

    ctx.drawImage(sun,0,0,600,600); //draw sun (background)

    window.requestAnimationFrame(draw); //request next frame
  }

  init(); //start
