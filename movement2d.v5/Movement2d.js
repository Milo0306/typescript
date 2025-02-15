"use strict";
var Movement2d = /** @class */ (function () {
    function Movement2d(x, y) {
        this.x = x;
        this.y = y;
    }
    Movement2d.prototype.getX = function () {
        return this.x;
    };
    Movement2d.prototype.getY = function () {
        return this.y;
    };
    Movement2d.distance = function (px, py) {
        var xDiff = py.getX() - px.getX();
        var yDiff = py.getY() - px.getY();
        var dist = Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));
        return Math.ceil(dist);
    };
    return Movement2d;
}());
var px = new Movement2d(15, 11);
var py = new Movement2d(11, 13);
console.log(Movement2d.distance(px, py));
