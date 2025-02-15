"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Weapon = /** @class */ (function () {
    function Weapon(name, damage, ammo, rateOfFire, range) {
        this.name = name;
        this.damage = damage;
        this.ammoMax = ammo;
        this.ammoLeft = ammo;
        this.rateOfFire = rateOfFire;
        this.range = range;
    }
    return Weapon;
}());
exports.default = Weapon;
