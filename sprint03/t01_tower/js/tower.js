import Building from "./building.js";

export class Tower extends Building {
    hasElevator;
    arcCapacity;
    height;
    constructor(floors, material, address, hasElevator, arcCapacity, height) {
        super(floors, material, address);
        this.hasElevator = hasElevator;
        this.arcCapacity = arcCapacity;
        this.height = height;
    }

    getFloorHeight(){
        return this.height/this.floors
    }

    toString() {
        return [super.toString(),
            `Elevator: ${this.hasElevator}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.getFloorHeight()}`,].join('\n');
    }
}