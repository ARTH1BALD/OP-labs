function seq(...args) {
  const functions = [...args];
  
function chain(next) {
if (typeof next === 'function') {
   functions.push(next);
   return chain;
  }

else if (typeof next === 'number') {
    let result = next;
    for(let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
    }
    return result;
}
}
return chain;
}
console.log(seq(x => x + 1)
(x => x * 2)
(x => x / 3)
(x => x - 4)(7));
