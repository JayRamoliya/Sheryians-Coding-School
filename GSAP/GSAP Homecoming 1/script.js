// gsap.to('#box',{
//     x:500,
//     duration:2,
//     delay:1,
//     backgroundColor:'red',
//     width:100,
//     height:100,
//     // rotate:360,
//     // scaleY:5
// })

// form ma animation ulta chalta hai

// gsap.from('#box',{
//     y:300,
//     duration:2,
//     delay:1,
//     backgroundColor:'red',
//     width:100,
//     height:100,
//     rotate:360,
//     // scaleX:5
// })

// gsap.to('h1',{
//     x:600,
//     color:'yellow',
//     duration:2,
//     delay:1
// })

// gsap.to('h2',{
//     x:300,
//     color:'red',
//     duration:2,
//     delay:3,
//     backgroundColor:'pink'
// })
    

// gsap.from('h1',{
//     x:600,
//     color:'yellow',
//     duration:2,
//     delay:1,
//     stagger:0.5,
//     repeat:2, // -1 means infite chalega
//     yoyo:true
// })

// timeline kem banavay timeline ka use cincronas ma chalava mate time line ek pachi ek element move thi

var tl = gsap.timeline()

tl.to('h1',{
    x:500,
    duration:2  
})
tl.to('h2',{
    x:800,
    duration:2
})
tl.to('h3',{
    x:300,
    duration:2
})