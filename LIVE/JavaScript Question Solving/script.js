// [LIVE] JavaScript Question Solving _ Solving Popular JavaScript Interview Questions

// how you build logic

// array - foreach map filter

var a=[1,2,"jay",3,4];

// foreach is a loop which works on array

// a.forEach(function(val){
//     console.log(val+2);
// })

// FOREACH KA USE KAR KE EK ARRAY KE SARE MEMBERS KE AGE HELLO PRINT KARAVO?

// a.forEach(function(val){
//     console.log("Hello "+val);
// })

// ARRAY KE SARE MEMBERS PRINT KARO AUR UNHE CHHOD DO Jo KI 2 SE BADE HO?

// a.forEach(function(val){
//     if(val<2){
//         console.log(val);
//     }
// })
// var sum=0;


//SAARE ELEMENTS JO KI ARRAY MENI HAI UNKA SUM KARO?

// a.forEach(function(val){
//     sum=sum+val;
//     console.log(sum);
// })

// SARE BANDE ADD KARO AGAR UNME SE KOI BHI STRING NIKAL JAAYE TO FIR USE SKIP KARO?

// var sum1=0;
// a.forEach(function(val){
//     if(typeof val !== "string"){
//         sum1=sum1+val;
//         console.log(sum1);
//     } 
// })


setTimeout(function(){console.log("jay ramoliya 2 sec bad show thse");},2000)

// var arr=[];
// for(let i=0;i<10;i++){
//     arr.push(function(){
//         setTimeout(function(){
//             console.log(i);
//         },1000)
//     })
// }

// VAR NA KAARNE 10 CHE E 10 VAR PRINT THSE REASON IS GLOBAL SCOPE

// JARE LET LAKHISU TARE  123456789 PRINT THSE REASON IS BLOCK SCOPE

// for (var i=0;i<10;i++){
//     arr[i]();
// }

// foreach is higher order function jema inside function ave te

// sync vs async

// PELA SYNC CODE EXECUTED THY PACHI LAST MA ASYNC CODE 
//JEMA TIME AAVE TE DEALY THI TE CODE NE ASYNC KEVAY

// SYNCHRONOUS CODE EXECUTES LINE BY LINE AND IF FIRST LINE IS NOT RESOLVED THE CODE EXECUTION WILL NOT MOVE TO THE NEXT LINE

// ASYNCHRONOUS CODE WAITS TILL SYNCHRONOUS CODE IS NOT FINISHED AND WHEN THE SYNCHRONOUS CODE FINISHES EXECUTING, THEN THE ASYN CODE STARTS IT'S EXECUTION, AS THE ASYNC CODE MEANS IT PROBABLY CAN HAVE SOME DELAY, IT ALSO TAKES SOMETHING CALLED CALLBACK


// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// setTimeout(function(){
//     console.log("jay");
// },1000)
// console.log("5");
// console.log("6");

// jab facebook se photo aajaye to chal jaana - delay callback

// callback hota hai function jo ki chalta hai asyn code

// async code kuchh der baad chalta hai, kyuki wo code kuchh der baad chlta hai to humein nahi pata hota hai, ke kab chalega to jab bhi chale hum async code ko ek function dedete hai ke jab bhi chalna is function ko chala dena, wo jo function humne diya tha us function ko hum kahte hai callback

// setTimeout(function(){},1000)




// objects = access loop
// freeze, this call apply bind