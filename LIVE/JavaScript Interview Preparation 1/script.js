// [LIVE] JavaScript Interview Preparation 1 _  JavaScript Questions _ You in The Multiverse of JS(1080P_HD)

// 1. write a js function to check whether an input is an array or not 🚀

function checkArray(inp){
    return Array.isArray(inp);
}

// console.log(checkArray('jay'));
// console.log(checkArray([]));

// whenever we create an array it is always given a blueprint or an instance whice is arrya

function check(inp){
    return inp instanceof Array
}

// console.log(check('jay'));
// console.log(check([]));

// 2. write a js function to clone an array.

function cloing(inp){
    var colned = [...inp]
    return colned
}
console.log(cloing(['jay','ram']))