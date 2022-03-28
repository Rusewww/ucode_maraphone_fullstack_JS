function sortEvenOdd(arr) {
    arr.sort((a, b) => a - b);
    arr.sort(function (a, b) {
        return a % 2 - b % 2;
    });
}