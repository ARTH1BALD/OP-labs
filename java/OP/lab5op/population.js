function array() {
    const items = [];
    const arr = function (index) {
        return items[index];
    };
    arr.push = function (value) {
        items.push(value);
    };
    arr.pop = function () {
        return items.pop();
    };
    return arr;
}

const arr = array();


arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined