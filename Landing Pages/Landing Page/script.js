var tl = gsap.timeline({
    repeat:-1
})



tl.to('.image',{
    width:"100%",
    ease:Expo.easeInOut,
    // duration:2,
    stagger:2
},'a') // a ni jagiya e kai pan lakhi saki
.to('.text h1',{
    stagger:2,
    ease:Expo.easeInOut,
    // duration:2,
    top:0
},'a')
.to('.text h1',{
    delay:2,
    stagger:2,
    ease:Expo.easeInOut,
    // duration:2,
    top:'-100%'
},'a')









// gsap.to('.image',{
//     width:"100%",
//     ease:Expo.easeInOut,
//     // duration:2,
//     stagger:2
// })

// gsap.to('.text h1',{
//     stagger:2,
//     ease:Expo.easeInOut,
//     // duration:2,
//     top:0
// })
// gsap.to('.text h1',{
//     delay:2,
//     stagger:2,
//     ease:Expo.easeInOut,
//     // duration:2,
//     top:'-100%'
// })


