class houseBlueprint{
    address;
    date = new Date();
    description;
    owner;
    size;
    _averageBuildSpeed = 0.5;
    getDaysToBuild() {
        return this.size/this._averageBuildSpeed;
    }
    constructor(address,description,owner,size) {
        this.address = address;
        this.description = description;
        this.owner = owner;
        this.size = size;
    }
}


class HouseBuilder extends houseBlueprint{
    constructor(address,description,owner,size,roomCount) {
        super(address,description,owner,size);
        this.roomCount = roomCount;
    }
}