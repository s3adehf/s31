const defaultA = 50;
const getDefault = c => c**2

function compute(a = defaultA, b = getDefault(5)) {
    return a+b
}
console.log(compute())