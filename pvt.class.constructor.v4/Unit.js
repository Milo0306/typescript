"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Unit = /** @class */ (function () {
    function Unit(name, hitpoints, moveDistance, weapons) {
        this.name = name;
        this.hitpointsMax = hitpoints;
        this.hitpointsLeft = hitpoints;
        this.moveDistance = moveDistance;
        this.weapons = weapons;
    }
    return Unit;
}());
exports.default = Unit;
