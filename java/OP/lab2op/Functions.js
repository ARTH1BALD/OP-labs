function average(a, b) {
    return (a + b) / 2;
}

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function calculate() {
   const numbers = []
     
   for (let i = 0; i <= 9; i++) {
  average(square(i), cube(i));
  const value = average(square(i), cube(i));
    numbers.push(value);
    

}

return numbers;
} 

console.log(calculate());

