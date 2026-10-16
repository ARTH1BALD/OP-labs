const largeMixedArray = [true, false, true, false, true, "hello", "world", "JavaScript", "AI", "open_source", "frontend", "backend", "array", "coffee", "code", 5, 12, 42, 100, 2026, 0, -1, -200, -999, 777, 3.14159, 2.718, 0.001, NaN, Infinity, -Infinity, { id: 1, name: "Alice" }, { role: "admin", active: true }, {}, null, undefined, 9007199254740991n, -42n, Symbol("id"), Symbol("tag"), new Date(), "last_element", 9999
];

const typesCounter = {
  boolean: 0,
  string: 0,
  number: 0,
  object: 0,
  undefined: 0,
  bigint: 0,
  symbol: 0
};

for (const element of largeMixedArray) {
 const type = typeof element
  typesCounter[type]++;
}

console.log(typesCounter);

const dynamicCounter = {} 

for (const item of largeMixedArray) { 
const type = typeof item;

    if (dynamicCounter[type] === undefined) {
  dynamicCounter[type] = 1;
} else {
  dynamicCounter[type]++;
}
}

console.log(dynamicCounter);