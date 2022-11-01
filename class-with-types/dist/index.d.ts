declare class Coordinate {
    protected x: number;
    protected y: number;
    constructor(x: number, y: number);
}
declare class MyCoordinate extends Coordinate {
    getX(): number;
    setX(value: number): void;
}
declare class MyCoordinates extends Coordinate {
    get anything(): number;
    set anything(value: number);
}
declare const points: Coordinate;
