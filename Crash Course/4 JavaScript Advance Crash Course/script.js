// JavaScript Crash Course_ Master the Basics in One Video_ Ignite Your Front-End Mastery Series

// JavaScript Advance Crash Course_ Level Up Your Coding Skills_ Accelerate Your Front-End Mastery_ ✅

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


// --the difference ✅
// ES5 (var)

a='ramoliya' ;   
console.log('ES5',typeof a,'value:',a );
// output: ES5 string value: ramoliya

// ES6 (let/const)
{
    let b ='ramoliya';
}   
console.log("ES6", typeof b," value:",b ) // b is not defined
// output: ES6 undefined value: undefined

// ES6 (let, const) both are use ES5 AND ES6
// var is function scoped while let & const are block scoped
// var adds itself to the window object
// window search in console
// let const does not add to the window
// --window object


// --browser context api
// --stack
// --heap memory

// --execution context (is a container where the function's code is executed and it's created whenever a function is called, it contains 3 things, variables, functions and environment.)

// --lexical environment (hota hai ek chart jisme ye likha hota hai ke apka particular function ki cheejo ko access kar sakta hai and kinko nahi, matlab ki it holds it's scope chain)
/*
function abcd(){
    var a=12;
    // b not use outside use def() 
    function def(){
        var b=13;
    }
}
*/


// -hoisting ✅(variable and function are hoisted which means there declaration is moved on the top of code)

console.log(first); // not a error show undefined
var first="pela use kari saki"
console.log(first);

// undefined and not-undefined ✅

// -typr in js ✅

// primitive -> num,str,null,bool,undefined  
// reference -> (),{},[]
// aisi koi bhi value jisko copy karne par real copy nahi hota, balki us main value ka reference pass hojaata hai, use hum reference value kahte hai, aur jiska copy karne par real copy ho jaaye wo value primitive type value hoti hai

// --how to copy reference values ✅
// ... this is sprad operator
console.log('sprad opetator');
var obj = {a: 4};
var copyobj={...obj}
copyobj.a=7890;
console.log(obj);
console.log(copyobj);

var a=[1,2,3,4,5]
var b=[...a]
b.pop()
console.log(a);
console.log(b);

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

// --truthy vs falsy (convert value) ✅
/*
falsy value : false,null,undefiend,NaN (not a number),"", document.all
truthy value : true," ",[],{}
*/
if(""){
    console.log('hey');
}
else{
    console.log('hello');
}

// --switch (is not use any time) ✅

// -loops (for,while) ✅

// for(var i=0;i<4;i++){
//     console.log(i);
// }

// while(age<20){
//     console.log(age);
//     age++;
// }

// --foreach,forin,forof,do-while ✅
// foreach loop srf array pe chalta hai matlab ki jab bhi tumhaare paas ek array ho, tab use mein kaun aata hai foreach loop
// each element ma kai operation mate

// foreach kabhi bhi by default aapke array mein change nahi karta, wo aapko changes krke deta hai array ki temporary copy per jiske wajah se array humesha same rehta hai.

let arr=['one','two', 'three'];
arr.forEach(function(val){
    console.log(val+2);
});

// object par loop karne ke liye hota hai forin loop
var obj ={
    name:"jay",
    age:45,
    city:"surat"
}
for(var key in obj){
    console.log(`${key}:${obj[key]}`);
}


// -functions (after some time code run,reuse code, repeat code) ✅
function fname(){
    console.log('my name is jay');
}
function village(){
    console.log('my village name is rajkot');
}
fname()
village()

// --callback funs ✅ (jab bhi koi aisa code jo baad me chalta hai, kyuki wo code baad mein chalta hai js ko ye pata nahi hota ke wo complete hua ya nahi, aise code ke completion par js ko btaya jaata hai ke wo complete hogya aur app use chala sakte ho, ye bataane ka kaam callback ka hai)

// aisa code jo baad me chalta hai use hum ek function dedete hai ke bhaiya jab complete hojana to ye function chala dena, aur wo function jo hum dete hai wo ek normal fnc hi hota hai aur use kahte hai callback fnc.

setTimeout(()=>{ 
    // callback function call back me agrument
    console.log("hello");
},1000);// 1 second delay
console.log("world")

// --promise ✅
const promise= ()=>new Promise((resolve)=>{
    console.log("hello world");
})
const p=promise();
p.then().catch();// then and catch are promises method

// --what is first class funs ✅
// js mein ek concept hai jiska matlab hota hai ki aap fnc ko use kar sakte ho as a value

function ab(a){
    console.log(a());
}
ab(function(){console.log('inside');})


// -params (parameter), arguments (value) ✅
function sum(a,b){
    console.log(a+b);
}
sum(2,3)

// -arrays ✅
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

// --how arrays are made behind the scenes ✅
console.log(Array.isArray([]));
console.log(Array.isArray({}));
var arr1=[1,2,3,4]
arr1[-1] = 111
console.log(arr1);

// --why we can make nagative indexes arrays in js ✅


// -objects ✅
// var obj = {} //blank obj
var obj = {
    age:23,
    name:'jay',
    fun:function fun(){console.log('fun');}
} 
console.log(obj.age);

// -props vs methods
console.log(obj.fun);

// -updating object props
obj.age=133
console.log(obj);

// --how to delete object prop ✅
console.log(obj);
// delete obj['name']
delete obj.age
console.log(obj);

// --practice questions, scenarios