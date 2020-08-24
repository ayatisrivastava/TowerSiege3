class Block{
    constructor(x,y,width.height,options){
var options{
    'restitution':0.8;
    'friction':1.0;
    'density':1.0;
}
this.Visibility = 255
    }
    display(){
     if (this.body.speed<3) {
         ball.display();
     }  
    }
    else {
    World.remove(world,this.body) 
    push();
    this.Visibility = this.Visibility-5
     tint(255,this.Visibility)
     pop();
    }
    rectMode(CENTER)

    score(){
        if (this.Visibility < 0 && this.Visibility > -1005){
            score++
        }
    }
}