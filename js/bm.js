
var Mint = {};  // top level namespace
Mint.Abstract = {}; 

Mint.Abstract.Vehicle = function () { }
Mint.Abstract.Vehicle.prototype = (function () {
    
    // private members on the prototype
    var name = "",
        seats = 0,
        wheels = 0;
    
    // methods to access the private data
    return {
        getSeats: function () { return seats; },
        setSeats: function (val) { seats = val; },
        getName: function () { return name; },
        setName: function (val) { name = val; },
        getWheels: function () { return wheels; },
        setWheels: function (val) { wheels = val; },
        info: function () { return name + " -- " + seats + " -- " + wheels; }
    }
        
})();

Mint.Instances = {};
Mint.Instances.Car = function () { 
    this.setSeats(4);
    this.setWheels(4);
};
Mint.Instances.Car.prototype = new Mint.Abstract.Vehicle();

Mint.Instances.MotorCycle = function () {
    this.setSeats(2);
    this.setWheels(2);
};
Mint.Instances.MotorCycle.prototype = new Mint.Abstract.Vehicle();