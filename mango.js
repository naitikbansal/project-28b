class Mango{
    constructor(x,y,r){
      var options={
          isStatic:true,
          friction:1
      }  
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage('mango.png');
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world, this.body);
    }
    display(){
        var mangopos=this.body.position;
        push()
        translate(mangopos.x,mangopos.y);
        rectMode(CENTER)
        fill("white");
        
        imageMode(CENTER);
        image(this.image,50,30,this.r,this.r);
         
        pop()
        }

}