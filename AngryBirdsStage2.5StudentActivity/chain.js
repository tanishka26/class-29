class Chain
{
    constructor(bodyA,pointB)
    {
        //defining the properties or rules for object
        //for option JSON(Java script Object notation) { parameter:value for parameter}
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.3
        }
        this.pointB=pointB
        this.chain=Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    attach(body){this.chain.bodyA = body}
    fly(){this.chain.bodyA = null}
    display()
    {
        if(this.chain.bodyA){
        //to display the object using the property
        var pointA= this.chain.bodyA.position
        var pointB= this.pointB
        //line(x1,y1,x2,y2)
        //line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
        line(pointA.x,pointA.y,pointB.x,pointB.y)}
    }
}