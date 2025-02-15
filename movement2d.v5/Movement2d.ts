class Movement2d {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    public static distance(px: Movement2d, py: Movement2d): number {
        let xDiff = py.getX() - px.getX();
        let yDiff = py.getY() - px.getY();

        let dist = Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));
        return Math.ceil(dist);
    }

}

const px: Movement2d = new Movement2d(15, 11);
const py: Movement2d = new Movement2d(11, 13);

console.log(Movement2d.distance(px, py));