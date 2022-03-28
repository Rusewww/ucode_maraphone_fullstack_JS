const copyObj = (object) => {
    const res = {};
    const enty = Object.entries(object);
    for (const [key, value] of enty) {
        res[key] = typeof value === 'object' ? copyObj(value) : value;
    }
    return res;
};
