function add(numbers) {
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a + b)
}

function subtract(numbers) {
    return numbers
        .split(',')
        .map(x => parseInt(x))
        .reduce((a, b) => a - b)
}

exports.add = add;
exports.subtract = subtract;