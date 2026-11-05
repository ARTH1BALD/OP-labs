function sum(...args) {

    let total = 0;
    for ( let i = 0; i < args.length; i++) {
        total += args[i];   
    }

    return total;
}

const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7

console.log(a, b, c, d, e)