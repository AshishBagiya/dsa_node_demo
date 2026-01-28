// What “flattening an object” means

// Nested object:

// const obj = {
//   a: 1,
//   b: { c: 2, d: { e: 3 } },
// };

// Flattened version:

// {
//   a: 1,
//   'b.c': 2,
//   'b.d.e': 3
// }

// function flattenObject(obj, parentKey = '', result = {}) {
//     for (let key in obj) {
//       if (!obj.hasOwnProperty(key)) continue;
  
//       const newKey = parentKey ? `${parentKey}.${key}` : key;
//       if (typeof obj[key] === 'object' && obj[key] !== null) {
//         flattenObject(obj[key], newKey, result);
//       } else {
//         result[newKey] = obj[key];
//       }
//     }
//     return result;
//   }
  
//   // Example
//   const nestedObj = { a: 1, b: { c: 2, d: { e: 3 } } };
//   console.log(flattenObject(nestedObj));
  /*
  {
    a: 1,
    'b.c': 2,
    'b.d.e': 3
  }
  */

  function flattenObj(obj, parentKey = '', result ={}){

    for(let key in obj){
        // if(!obj.hasOwnProperty(key)) continue;
        let newKey = parentKey ? `${parentKey}.${key}` : key;
        if(typeof obj[key] === 'object' && obj[key] !== null)
            flattenObj(obj[key],newKey, result);
        else
            result[newKey] = obj[key];
    }
    return result;
  }

  const obj1 = {a:1,b:{c:2,d:{e:3}}};
  console.log(flattenObj(obj1));