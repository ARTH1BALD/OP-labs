function random(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(random(10));
