import Weapon from "./Weapon"

abstract class Unit {
    private name: string;
    private hitpointsMax: number;
    private hitpointsLeft: number;
    private moveDistance: number;
    private weapons: Weapon[];

    constructor (name: string, hitpoints: number, moveDistance: number, weapons: Weapon[]){
    this.name = name;
    this.hitpointsMax = hitpoints;
    this.hitpointsLeft = hitpoints;
    this.moveDistance = moveDistance;
    this.weapons = weapons;
    
}
}

export default Unit;