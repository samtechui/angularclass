
class Car{
    engine:string;
    constructor(enginess:string) {
        this.engine = enginess;
    }
        start()
        {
            alert("engine starts"+this.engine);
        }
        stop()
        {
            alert("engine stops"+this.engine);
        }

}
function myfunction() {
    var car = new Car("")
    car.start();
    car.stop();

};
