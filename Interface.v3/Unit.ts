import Weapon from "./Weapon"

interface Unit {
    name: string,
    hitpointsMax: number;
    hitpointsLeft: number;
    moveDistance: number;
    weapons: Weapon[];
}

export default Unit;