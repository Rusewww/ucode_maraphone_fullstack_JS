function calculateTime() {
    let time = new Date(1939, 1, 1)
    let out = [];
    let now = new Date();
    out.years = () => {
        return now.getFullYear() - time.getFullYear() - 1
    }
    out.months = () => {
        return now.getMonth() - time.getMonth() - 1
    }
    out.days = () => {
        return now.getDate() - time.getDate() - 4
    }
    return out;
}

module.exports.calculateTime = calculateTime