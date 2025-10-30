class Pelota{
   
    constructor (){
        /*
        this.posx;
        this.posy;
        this.diam;
        this.rad;
        this.velx;
        this.vely;* */
        
        this.diam = random(50,100);
        this.rad = this.diam / 2;
   
        this.posx = random(this.rad, width - this.rad);
        this.posy = random(this.rad, height - this.rad);

        this.velx = random (-5, 5);
        this.vely = random (-5, 5);
        
        this.nuevoColor = color(random(10,50), random(180,255), random(100,150), 100);

    }

    actualizar(){
    if(this.posx > width - this.rad || this.posx < this.rad){
        this.velx *= -1;
    }

    if(this.posy > height - this.rad || this.posy < this.rad){
        this.vely *= -1;
    }

    this.posx += this.velx;
    this.posy += this.vely;
    }

    visualizar(){
        
        fill(this.nuevoColor);
        stroke("#ff8000ff");
        strokeWeight(5);
        circle( this.posx, this.posy, this.diam);

    }
    
}