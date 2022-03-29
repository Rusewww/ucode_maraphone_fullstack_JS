function calculateTime() {
    let time = new Date(1939, 1, 1)
    let now = new Date()
    let diff = (Math.abs(time) + Number(now)) / 7
    let qDate = new Date(Number(time) + Number(diff))
    let out = [];
    out.push(qDate.getFullYear() - time.getFullYear())
    out.push(qDate.getMonth() - time.getMonth())
    out.push(qDate.getDate() - time.getDate())
    return out
}

module.exports.calculateTime = calculateTime;