// Master Async JavaScript_ What it is and How to Use it

// sync (aek kaam chalu hoy tayre biju no kari saki) and async () kay hota hai ✔

// sync => matlab ek ke baad dusra hoga, jab tak ek command complete naa ho, dusra shuru nahi hoga


// async => matlab saare kaam ek saath shuru kardo, jiska answer pahle aajaye uska jawaab dedena 

// kaise pata chalta hai ki hum sync code likh rahe ya async

// async => setTimeout
//          setInterval
//          Promise
//          fetch
//          axios
//          XMLHttpRequest


// async js hai kya ✔

// kai baar aapka final code depended hota hai kisi aur ke server par, is case mein humein nahi pata hota ki answer uske server se kab laut kar aayega, to hum kya naho kr sakte is writing sync code, isse nipatne ke liye hum log async code likh dete hai taaki blocking naa ho and jab bhi answer aaye humare answer ke respect mein chalne waale code chal jaaye

// async code ka main motiv hota hai ki un cases mein jinmein hume pata nahi code ka answer kitni der mein aayega to jab bhi answer aa jaaye uske answer ke respect mein koi particular code chala dena

// setTimeout(function,time in mili sec)

// console.log('reser 1');
// setTimeout(function(){
//     console.log('winner');
// },5000)
// console.log('looser');


// js is not asynchronous ✔
// first main stack is complete and after side stack se task lekar aayege agar voo pura huaa hoga to

// console.log('reser 1'); // main stack
// setTimeout(function(){
//     console.log('winner'); // side stack
// },0)
// console.log('looser'); // main stack



// async ki poori kahaani ✔
// single threading and multi threading ✔

// callbacks ✔ (hamesha async code mein answer aane par chalta hai)

// (humesha ek function hota hai, ye sirf tab chalta hai jab async code ka comp)

// async code likhne ke liye -> fetch, xmlhttprequest, axios...



// promises ✔

// user will ask for a number between 0 se 9 and if the number is below 5 resolve if not reject

// var ans = new Promise((res,rej) =>{
//     var n = Math.random.floor(Math.random()*10)
//     if (n<5) {
//         return res()
//     }
//     else{
//         return rej()
//     }
// })

// ans.then(function(){
//     console.log('below');
// })
// .catch(function(){
//     console.log('above');
// })

// var ans = new Promise(function(res,rej){
//     return res('sabse pahle ghar par aao')
// })

// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res('gate kholo aur gate lago')
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         console.log('khana pakav khana khaao');
//     })
// })
// var p4 = p3.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         console.log('');
//     })
// })



// then and catch

// async await

// koi bhi esa function jisme app async code likhege, kyoki async code hai to app promises ka istemaal kar sakte hai, jab uska answer aayega aapko then lagana padega, us then ko lagaana se bachne ke liye, aap async await ka istmaal kar sakte hai.

// function lin(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json()
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }

// async function lin(){
//     let raw = await fetch(`https://randomuser.me/api/`)
//     let ans = raw.json()
//     console.log(ans);
// }
// lin()

// dekho jab bhi koi code async hai to aapko uske liye wait karna padta hai kyoki humein naho pata uska answer kab aayega

// [concept aside]
// concurrency => jsmein sync code and async code ek saath process ho raha tha ye hai concurrency

// parallelism => focus jaada karta hai different processors and unke cores par kaam ko chalaane par

// throttling => kisi code control karna number of executions