function ObjecttoArray(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let output = [];
    for (let i = 0; i < keys.length; i++) {
        output.push([keys[i], values[i]]);
    }
    return output;
};

console.log( ObjecttoArray({ a: 1, b: 2 }) );
console.log( ObjecttoArray({ shrimp: 15, tots: 12 }) );
console.log( ObjecttoArray({}) );