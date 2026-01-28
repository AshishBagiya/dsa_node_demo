const obj = {a:1,b:{c:3}};

const shallowCopy = {...obj};

shallowCopy.b.c = 10;
console.log(obj)
console.log(shallowCopy);
console.log(obj)
const deepCopy = structuredClone(obj);
deepCopy.b.c = 78;
console.log(obj)
console.log(deepCopy);
console.log(obj)