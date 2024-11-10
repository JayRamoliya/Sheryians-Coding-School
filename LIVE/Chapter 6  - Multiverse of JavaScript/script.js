// [LIVE _ BOOSTED⚡] Chapter 6  - Multiverse of JavaScript


// gamechanger question
// 1) reference kaise milega job/intern ke liye and mujhe reference kyu hi dega?

// tomorrow's gamechanger question
// js jab mai likhne baithta hu to khoob errors aate hai aur motivation khatam hojaata.

// loops=repeat


// for ✅
// loop humesha question dekh ke create hota hai, kabhi bhi andhi mein loop create nahi karte.

// for(var i=1;i<21;i++){
//     // code
// }


// foreach ✅
// foreach srf tab use hoga jab aapke paas ek array hai
// foreach loop array ke har memeber par ek baar chalta hai

// var aa=[1,2,3,4,5,6]

// aa.forEach(function(val){
//     console.log(val);
// })


// forin ✅
// forin loop is all about looping through the kay of objects


// map ✅
// map ka matlab array ke ek ek memeber par koi calculation karo and uska answer save karo ek naye array mein
// map ka use mainly tab hota hai jab aapko ek array mein koi calc karne ho and unka resultant answer save karne ho ek naye array mein.
// return ke bina map is not work

// aar=[1,2,3,5]

// var res = aar.map(function(val){
//     return val+2
// })
// console.log(res);


// foreach mein aap ek ek baar elements par jaate ho aur wo koi naya array default mein nahi banata, naa hi aapko force karta hai return karne ke liye, jabki map dose both the things.


// filter ✅
// filter jab bhi array hota hai and aapko uske har member par jaana hai anduske kisi member ko aapko place krna hai naye array mein and kisi ko nahi, wha par filter ata hai


var a=[1,2,3,4,5,9,9,0,9,8,9,9,9,88,8,8,7,8]

var ans = a.filter(function(val){
    // return kuchh aisa likho jo kabhi true ho and kabhi false
    return val>8
})

console.log(ans);