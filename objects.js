const iface = {
    m1(x) {
        return [x];
    },
    m2(x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};

const result = Object.keys(iface).map(key => {
    const fn = iface[key];
    return [key, fn.length];

});

console.log(result);

