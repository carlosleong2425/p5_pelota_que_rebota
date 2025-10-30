let posx;
let posy;
let diam;
let rad;

function setup() {
    createCanvas(windowWidth,windowHeight);
   diam = random(50,300)
   rad = diam / 2
   
   posx = random(rad, width - rad)
   posy = random(rad, height - rad)

   velx = random (-5, 5);
   vely = random (-5, 5);
   console.log("velx = " + velx +" --> vely = " + vely);

}   
function draw(){
    background (150);
   
    
    if(posx > width - rad || posx < rad){
        velx *= -1;
}

    if(posy > height - rad || posy < rad){
        vely *= -1;
}


    posx += velx;
    posy += vely;

    circle( posx, posy, diam);
    
}