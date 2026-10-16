const inc = (n) => {
return(n+1)
}

const a = 5 
const b = inc(a); 

console.log({a, b})

const incObj = (obj) => {
    obj.n = obj.n + 1
}

const myObj = { n: 5 }

incObj(myObj)

console.log(myObj)