function checkDivision(beginRange, endRange){
    let res = " -"
    if(beginRange >= endRange || !(beginRange.match(/^[1-9]+[0-9]*$/)) || !(endRange.match(/^[1-9]+[0-9]*$/))){
        beginRange = 1
        endRange = 100
    }
    let clone = beginRange
    while(clone <= endRange){
        if ((clone % 2) == 0){
            res = " is even"
        }
        if ((clone % 3) == 0){
            if (res.match(" is even")){
                res += ", "
            }else{
                res = " is "
            }
            res += "a multiple of 3"
        }
        if ((clone % 10) == 0) {
            res += ", a multiple of 10"
        }
        console.log(clone + res)
        res = " -"
        clone++
    }
}

let begin = 0
let end = 0

begin = prompt("Enter the begining of the range");
end = prompt("Enter the end of the range");
checkDivision(begin,end);