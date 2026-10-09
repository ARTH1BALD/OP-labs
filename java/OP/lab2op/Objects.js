function fn() {
return { name: 'Artem' };
}

const a = fn();
let b = fn()
a.name = 'Vlad';
b.name = 'Oleg';


console.log(a); 
console.log(b); 


function createUser(name, city) {
    return { name, city };
}

const user1 = createUser('Alice', 'New York ');

console.log(user1);
