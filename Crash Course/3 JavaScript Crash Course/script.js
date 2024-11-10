// JavaScript Crash Course_ Master the Basics in One Video_ Ignite Your Front-End Mastery Series

// js

// - basic ✅
// -- big game changer ✅

// -word (name,any char or word) vs keyword (new,array,let,const...) ✅

// -variable (store any some data) and constants (store any not changeble data) ✅

// -var const let ✅

var name="jay ramoliya"
console.log(name);

const PI = 3.14 // not change
console.log(PI);

let age=18
console.log(age);


// --the difference
// --window object
// --browser context api
// --stack
// --heap memory
// --execution context
// --lexical environment

// -hoisting ✅
// (variable and function are hoisted which means there declaration is moved on the top of code)

console.log(first); // not a error show undefined
var first="pela use kari sakay"
console.log(first);

// undefined and not-undefined ✅

// -type in js ✅

// primitive -> num,str,null,bool,undefined  
// reference -> (),{},[]
// aisi koi bhi value jisko copy karne par real copy nahi hota, balki us main value ka reference pass hojaata hai, use hum reference value kahte hai, aur jiska copy karne par real copy ho jaaye wo value primitive type value hoti hai

// --how to copy reference values

// -conditionals (if else else-if) ✅

if(1==1){
    // code
}
else if(1==1){
    // code
}
else{
    // code
}

// --truthy vs falsy
// --switch

// -loops (for,while) ✅

// for(var i=0;i<4;i++){
//     console.log(i);
// }

// while(age<20){
//     console.log(age);
//     age++;
// }

// --foreach,forin,forof,do-while

// -functions ✅ (after some time code run,reuse code, repeat code)
function fname(){
    console.log('my name is jay');
}
function village(){
    console.log('my village name is rajkot');
}
fname()
village()

// --callback funs
// --what is first class funs

// -params (parameter), arguments (value) ✅
function sum(a,b){
    console.log(a+b);
}
sum(2,3)

// -arrays
var a=[1,2,3,4,5,'jay','manav',false]

// -push pop shift unshift
a.push('push')
console.log(a);

a.pop()
console.log(a);

a.unshift('start')
console.log(a);

a.shift()
console.log(a);

a.splice(2,2)
console.log(a);

// --how arrays are made behind the scenes
// --why we can make nagative indexes arrays in js
// --practice questions and scenarios


// -objects ✅
// var obj = {} //blank obj
var obj = {
    age:23,
    name:'jay',
    fun:function fun(){console.log('fun');}
} 
console.log(obj.age);

// -props vs methods ✅
console.log(obj.fun);

// -updating object props ✅
obj.age=133
console.log(obj);

// --how to delete object prop
// --practice questions, scenarios