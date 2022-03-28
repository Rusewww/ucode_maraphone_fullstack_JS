function total(addCount, addPrice, currentTotal){
    if(currentTotal == undefined){
        currentTotal = 0
    }
    let number = addCount*addPrice+currentTotal
    return Number(number)
}
