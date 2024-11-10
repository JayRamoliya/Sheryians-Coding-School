// array.reduce in js
// what is designing

var arr=[1,2,3,4,5]
var a=0
// while(a<10){
//     console.log('sorry',a);
//     a++
// }

// arr.forEach(function(ele){
//     console.log('hey',ele);
//     a+=ele
// })
// console.log(a);

var out=arr.reduce((accumlator,currentvalue)=>{
    accumlator+=currentvalue
    return accumlator
},0)
console.log(out);
