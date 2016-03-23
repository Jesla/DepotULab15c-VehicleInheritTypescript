var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle() {
    }
    Vehicle.prototype.insert = function () {
        this.div = document.createElement('div');
        this.div.className = null;
        document.getElementById('containerDiv').appendChild(this.div);
    };
    Vehicle.prototype.moveDirection = function () {
    };
    Vehicle.prototype.damagePoints = function () {
    };
    Vehicle.prototype.speedSet = function () {
    };
    Vehicle.prototype.removeVehicle = function () {
    };
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        _super.apply(this, arguments);
    }
    return Car;
}(Vehicle));
var CopCar = (function (_super) {
    __extends(CopCar, _super);
    function CopCar() {
        _super.apply(this, arguments);
    }
    return CopCar;
}(Vehicle));
var Motorcycle = (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        _super.apply(this, arguments);
    }
    return Motorcycle;
}(Vehicle));
var Tank = (function (_super) {
    __extends(Tank, _super);
    function Tank() {
        _super.apply(this, arguments);
    }
    return Tank;
}(Vehicle));
