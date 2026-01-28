// we have array like [1,[2,3],[4,[5,6,[7],9,],22]] , flatten this array

const a = [1,[2,3],[4,[5,6,[7],8],12,[13,[14,15]]]];


// using flatmap easy one liner
//solution 1
const flattenArr1 = arr => arr.flatMap(e => Array.isArray(e) ? flattenArr(e) : e);
console.log(flattenArr(a));


// solution 2
function flattenArr(arr){
    const flatArr = [];
    for(let i=0;i<arr.length;i++){  
        if(Array.isArray(arr[i])){
            flatArr.push(...flattenArr(arr[i]));
        }else {
            flatArr.push(arr[i]);
        }
    }
    return flatArr;
}

console.log(flattenArr(a));