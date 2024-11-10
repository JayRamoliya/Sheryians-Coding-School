// Adding SCROLL TRIGGER in Webpage Animation_ Landing Page With GSAP _ 09 _ Sheryians Coding School _

// gsap.from('#img1',{
//     opacity:0,
//     duration:1,
//     delay:0.4,
//     y:60
// })
// gsap.from('#img2',{
//     opacity:0,
//     duration:1,
//     delay:0.4,
//     x:60
// })
// gsap.from('#img3',{
//     opacity:0,
//     duration:1,
//     delay:0.4,
//     y:-60
// })
// gsap.from('#main h1',{
//     opacity:0,
//     duration:1,
//     delay:0.4,
// })

var tl = gsap.timeline()
tl.from('#img1',{
    opacity:0,
    duration:0.8,
    delay:0.3,
    y:100
})
tl.from('#img2',{
    opacity:0,
    duration:0.8,
    delay:0.3,
    x:100
},"-=0.8")
tl.from('#img3',{
    opacity:0,
    duration:0.8,
    delay:0.3,
    y:-100
},"-=0.8")
tl.from('#main h1',{
    opacity:0,
    duration:0.8,
    delay:0.3,
},"-=0.8")



gsap.from('#page2 h5,#page2 h1, #page2 #about',{
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:'#page2 h5',
        scroller:'body',
        markers:true,
        start:'top 60%',
        
    }
})