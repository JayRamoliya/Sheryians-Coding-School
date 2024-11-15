var tl = gsap.timeline()
tl.from('#nav h2,#nav h3,#nav h4,#nav button',{
    y:-100,
    duration:0.3,
    dealy:0.5,
    opacity:0,
    stagger:0.2 // element one by one avse
})


tl.from('#main h1',{
    y:100,
    opacity:0,
    stagger:0.3
})

tl.from('#main img',{
    scale:0,
    opacity:0,
    stagger:0.3 
})
tl.from('h5',{
    scale:0,
    opacity:0,
    stagger:0.3 
})
tl.to('h5',{
    y:30,
    repeat:-1,
    duration:0.7,
    yoyo:true
})
