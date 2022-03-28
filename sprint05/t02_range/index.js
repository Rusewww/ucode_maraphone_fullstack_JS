module.exports.checkDivision = (beginRange, endRange) => {
    let res = " -"
    if(isNaN(endRange)){
        endRange = 60
    }
    if(beginRange >= endRange || isNaN(beginRange) || isNaN(endRange)){
        beginRange = 1
        endRange = 60
    }
    let clone = beginRange
    while(clone <= endRange){
        if ((clone % 2) === 0){
            res = " is even"
        }
        if ((clone % 3) === 0){
            if (res.match(" is even")){
                res += ", "
            }else{
                res = " is "
            }
            res += "a multiple of 3"
        }
        if ((clone % 10) === 0) {
            res += ", a multiple of 10"
        }
        console.log(clone + res)
        res = " -"
        clone++
    }
}
