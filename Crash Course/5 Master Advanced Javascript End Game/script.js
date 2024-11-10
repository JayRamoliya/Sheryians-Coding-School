// Master Advanced JavaScript Concepts and Become a JavaScript Ninja

// Higher order functions ✅ 
// (aisa fnc jo accept karle ek aur fnc ya fir wo return karde ek aur fnc) foreach function

// function name(){
    // return 
// }
// name(age(){})

// constructor function ✅ 
// (normal fnc jismein this ka istemaal ho and app fnc ko call karte waqt new keyword ka use karein) 

// jab aapke paas aisa koi bhi mauka ho ke aapko ek jaisi properties waale abhut saare elements banaane hai us waqt aap constructor fnc use kar sakte ho

// function info(name,age){
//     this.name=name
//     this.age=age
// }

// var info1=new info('jay',133)
// var info2=new info('sneh',23)
// var info3=new info('manav',34)
// console.log(info1);
// console.log(info2);
// console.log(info3);

// first class function ✅ 
// (you can save function in variable)


// new keyword ✅
// (jab bhi new lagta hai humesha ek blank object apne man mein bana lo)


// iife ✅ (immediately invoked function expression)
// iife hai function kp turant chalane ki kala, is tareeke se ki hum log koi private variable bana paaye

// var ans = (function(){
//     var prival=12

//     return {
//         getter: function(){
//             console.log(prival);
//         },
//         setter:function(val){
//             prival=val
//         }
//     }
// })()

// console.log(ans);
// console.log(ans.getter());
// console.log(ans.setter('jay'));
// console.log(ans.getter());


// prototype ✅


// prototype inheritance ✅
// var human={
//     name:'jay',
//     canfly:false,
//     eat:true,
//     canwalk:true
// }

// var std={
//     js:true,
//     html:true
// }

// std.__proto__=human;

// console.log(std.name);
// console.log(std.eat);


// this, call apply bind ✅ 
// (this keyword is a special keyword in javascript which changes it's value in different context.)

// global => window
// function => window
// mehtod => obj

// in global scope (jab bhi kuchh likh rahe ho check karo kya usemein kahi bhi koi function, object ya fir scope bana hai {} )

// global scope
// console.log(this); // gives window

// function scope
// function name(){
//     return console.log(this); // gives window
// }
// name()

// in method scope ( ek function jo object ke andar ho, use method kahte hai)

// var obj={
//     name:"jay",
//     somemethod:function(){
//         console.log(this); //gives object obj
//     }
// }
// console.log(obj.somemethod());

// imp ✅ => in any method, this keyword always refers to parent object

// call apply bind ✅
// => agar tumhaare paas koi function hai and koi object hai and tumhe function chalana hai aur by default jo this ki value window hai use window naa rakh kar point karwana hai kidi object ki taraf

// function abc(val1,val2){
//     console.log(this,val1,val2);
// }
// var obj={
//     age:45
// }
// abc.call(obj,1,2)

// abc.apply(obj,[1,2])

// var binded=abc.bind(obj)
// console.log(binded());

// pure & impure function ✅
function sum(a,b){
    return a*b
}
console.log(sum(2,4));
console.log(sum(3,4));

// function sum(val){
//     return Math.random()*val
// }
// console.log(sum(2));
// console.log(sum(3));
