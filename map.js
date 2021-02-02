 const num = [2,24,4,5,6,7,8,98];
// const output =[];
// for (let i = 0; i<num.length;i++){
//     const element = num[i];
//     const result = element * element;
//     output.push(result);
// }

//  const result = num.map(function(element){
//     return element * element;

// })


// const result = num.map(x => x*x);

// const result = num.filter(x=>x>59)

const isThere = num.find (x => x>59);
console.log(isThere);
