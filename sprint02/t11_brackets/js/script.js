function checkBrackets(str) {
    let open = 0
    let closed = 0
    let res = 0
    if (!str) {
        return String(-1)
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            open++
        }
        if (str[i] === ')') {
            closed++
        }
        if (closed > open) {
            res++
            cosed = 0
            oopen = 0
        }
    }
    if (open === 0 && closed === 0 && res === 0) {
        res = -1
    }
    if (open > closed) {
        res += open - closed
    }
    return String(res);
}