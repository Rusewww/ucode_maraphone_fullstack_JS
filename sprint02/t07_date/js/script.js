function time(hourOrMin) {
    return String(hourOrMin).length === 1 ? '0' + hourOrMin : hourOrMin;
}
function date(dayOrMonth) {
    return String(dayOrMonth).length === 1 ? '0' + dayOrMonth : dayOrMonth;
}

function getFormattedDate(dateObject) {
    let data = {
        day: dateObject.getDate(),
        month: dateObject.getMonth() + 1,
        year: dateObject.getFullYear(),
        hours: dateObject.getHours(),
        minutes: dateObject.getMinutes(),
        weekday: dateObject.toLocaleString("en-US", {weekday: 'long'})
    }
    return `${date(data.day)}.${date(data.month)}.${data.year} ${time(data.hours)}:${time(data.minutes)} ${data.weekday}`;
}