// gsap

// to => element jaya 6 taya thi apde kaya lai javu 6

// gsap.to('#box',{
//     x:500,
//     y:300,
//     duration:2,
//     dealy:0.5,
//     rotate:360,
//     backgroundColor:'red',
//     scale:0.1,
//     // scaleX:4
// })

// from => element jaya hot thy thi pacho ave

gsap.from('#box',{
    x:500,
    y:500,
    duration:2,
    dealy:0.5,
    rotate:360,
    backgroundColor:'red',
    scale:0,
    // scaleX:4,
    repeat:-1, // -1 yani ki infite
    yoyo:true
})

//gsap is change css property 