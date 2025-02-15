import Unit from "./Unit";
import Weapon from "./Weapon";

class Vehicle extends Unit {


constructor (name: string, hitpoints: number, moveDistance: number, weapons: Weapon[],
    private fuelMax: number,
    private fuelLeft: number,
    private fuelConsumption: number,)
{
super (name, hitpoints, moveDistance, weapons);
}
}