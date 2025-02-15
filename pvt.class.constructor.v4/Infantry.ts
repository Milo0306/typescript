import Unit from "./Unit"
import Weapon from "./Weapon"

class Infantry extends Unit {

constructor (name: string, hitpoints: number, moveDistance: number, weapons: Weapon[]) 
{
super (name, hitpoints, moveDistance, weapons);
}
}