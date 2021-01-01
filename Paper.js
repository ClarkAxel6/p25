class Paper{
    constructor(x, y){
        var options = {
            isStatic: false,
            restituition: 0.3,
            friction: 0.5,
            density: 1.8
        }
        this.image = loadImage('paper.png');
        this.body = Bodies.circle(x, y, 24, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill('yellow');
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 70, 70);
    }
}