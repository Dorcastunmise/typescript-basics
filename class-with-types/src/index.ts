//----------Class with types 

class Coordinate  {
    protected x : number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
class MyCoordinate extends Coordinate {
    public getX() {
        return this.x;
    }
    public setX(value: number) {
        this.x = value;
    }
}
class MyCoordinates extends Coordinate {
    get anything() {
        return this.x;
    }
    set anything(value: number) {
        this.x = value;
    }
}
const points = new Coordinate(44, 789); //intialization
points.anything = 55;
console.log(points.anything);

