// gsap.to('#box',{
//     x:800,
//     duration:2,
//     dealy:0.3,
//     rotate:360,
//     backgroundColor:'red'
// })


gsap.from('#page1 .box',{
    scale:0,
    // delay:1,
    duration:1,
    rotate:360
})

gsap.from('#page2 .box',{
    scale:0,
    duration:1,
    rotate:360,
    // scrollTrigger:"#page2 .box"
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:'body',
        markers:true,
        start:'top 50%',
        end:'top 30%',
        // scrub:true // two value aapi saki 
        scrub:2 // 1 ane 5 ni vache 

        // start point trigger thi jayre scroller-start ne trigger kare tare animation chalu thse ane scroller-end tare tase jare end ne trigger kare tare animation puru thi
    }
})