class Weapon {
    private damage: number;
    private ammoMax: number;
    private ammoLeft: number;
    private rateOfFire: number;
    private range: number;
    private name: string;

    constructor(name: string, damage: number, ammo: number, rateOfFire: number, range: number) {
        this.name = name;
        this.damage = damage;
        this.ammoMax = ammo;
        this.ammoLeft = ammo;
        this.rateOfFire = rateOfFire;
        this.range = range;
    }
}


export default Weapon;