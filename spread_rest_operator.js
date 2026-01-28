const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

const combined = [...arr1,...arr2];
console.log('combined spread operaton...',combined);


function restFunction(...numbers){
    return numbers.reduce((a,b) => a+b,0);
}

console.log(restFunction(2,3,4,5));