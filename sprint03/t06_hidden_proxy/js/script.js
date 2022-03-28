const validator = {
    get: function (obj, prop) {
        console.log(`Trying to access the property '${prop}'...`);
        if (obj.hasOwnProperty(prop))
            return obj[prop];
        return false;
    },
    set: function (object, prop, value) {
        if (prop === "age") {
            if (value < 0 || value > 200) {
                throw new TypeError("The age is invalid");
            }
            if (!Number.isInteger(value)) {
                throw new TypeError("The age is not an integer");
            }
        } else if (prop === "gender") {
            console.log(`Setting value '${value}' to '${prop}'`)
            object[prop] = value;
            return true;
        }
    }


}