function stepGenerator(prev) {
    if (Number.isInteger(prev)) {
        prev += Number(prompt(`Previous result: ${prev}. Enter a new number: `));
        if (prev > 10000) {
            prev = 1;
        }
        stepGenerator(prev);
    } else {
        console.error("Invalid number!");
    }
}
stepGenerator(1);