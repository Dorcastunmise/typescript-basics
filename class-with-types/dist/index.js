"use strict";
//----------Class with types 
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class MyCoordinate extends Coordinate {
    getX() {
        return this.x;
    }
    setX(value) {
        this.x = value;
    }
}
class MyCoordinates extends Coordinate {
    get anything() {
        return this.x;
    }
    set anything(value) {
        this.x = value;
    }
}
const points = new Coordinate(44, 789); //intialization
points.anything = 55;
console.log(points.anything);
