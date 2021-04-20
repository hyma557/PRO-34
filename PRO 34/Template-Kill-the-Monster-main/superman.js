class superman {
    constructor(x, y, width, height) {
        var options = {

            isStatic:false,
            density: 1,
            frictionAir: 0.01
        }
        this.body = Bodies.rectangle(x, y, width*5, height*3, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("Superhero-01.png")
    
        World.add(myWorld, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        fill("white");
        image(this.image,pos.x, pos.y, this.width*8, this.height*5);
    }
};