const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var myEngine, myWorld;

var bg

var ground;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var b17, b18, b19, b20, b21, b22, b23, b24, b25, b26;
var rope
var m1
var flag = 0
var superhero;

function preload() {

  bg = loadImage("Background.png")


}

function setup() {
  createCanvas(1200, 600);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  // creating ground, superhero, monster
  ground = new Ground(300, 480, 1500, 20)
  superhero = new superman(400, 480, 50, 20)
  rope = new slingshot(superhero.body, {x:400, y:300})
  m1 = new monster(950, 300, 60, 40)


  //creating boxes (column1)
  b1 = new Box(600, 450, 40, 40)
  b2 = new Box(600, 410, 40, 40)
  b3 = new Box(600, 380, 40, 40)
  b4 = new Box(600, 350, 40, 40)
  b5 = new Box(600, 320, 40, 40)
  b6 = new Box(600, 290, 40, 40)
  b7 = new Box(600, 260, 40, 40)

  //creating boxes (column2)
  b8 = new Box(650, 450, 40, 40)
  b9 = new Box(650, 410, 40, 40)
  b10 = new Box(650, 380, 40, 40)
  b11 = new Box(650, 350, 40, 40)
  b12 = new Box(650, 320, 40, 40)
  b13 = new Box(650, 290, 40, 40)

  //creating boxes (column3)
  b14 = new Box(700, 450, 40, 40)
  b15 = new Box(700, 410, 40, 40)
  b16 = new Box(700, 380, 40, 40)
  b17 = new Box(700, 350, 40, 40)
  b18 = new Box(700, 320, 40, 40)
  b19 = new Box(700, 290, 40, 40)
  b20 = new Box(700, 260, 40, 40)
  b21 = new Box(700, 230, 40, 40)

  //creating boxes (column4)
  b22 = new Box(750, 450, 40, 40)
  b23 = new Box(750, 410, 40, 40)
  b24 = new Box(750, 380, 40, 40)
  b25 = new Box(750, 350, 40, 40)
  b26 = new Box(750, 320, 40, 40)
  
  
  

}

function draw() {
  background("lightblue");
  Engine.update(myEngine);

  //diplaying ground, superhero, monster
  ground.show()
  superhero.display()
  rope.display()
  m1.display()


  //displaying box (column1)
  b1.show()
  b2.show()
  b3.show()
  b4.show()
  b5.show()
  b6.show()
  b7.show()

  //displaying box (column2)
  b8.show()
  b9.show()
  b10.show()
  b11.show()
  b12.show()
  b13.show()
  
  //displaying box (column3)
  b14.show()
  b15.show()
  b16.show()
  b17.show()
  b18.show()
  b19.show()
  b20.show()
  b21.show()

  //displaying box (column3)
  b22.show()
  b23.show()
  b24.show()
  b25.show()
  b26.show()

  var collision = Matter.SAT.collides(b1.body||b2.body||b3.body||b4.body||b5.body||b6.body||b7.body||b8.body||b9.body||b10.body||b11.body||b12.body||b13.body||b14.body||b15.body||b16.body||b17.body||b18.body||b19.body||b20.body||b21.body||b22.body||b23.body||b24.body||b25.body||b26.body,m1.body);
   if(collision.collided){
    flag=1;
     }
     if(flag ===1){
         textSize(30);
         stroke(3);
          fill('blue');
          text("YOU WON",600,200);
       
       }
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot1.fly();

}




