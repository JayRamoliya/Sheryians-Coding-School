

var tl=gsap.timeline()
tl.from('img',{
    duration:1,
    y:-200
})

tl.from('nav h5',{
    duration:1,
    y:-200
})
tl.from('#vartical h1',{
    x:-400,
    duration:2
})
tl.from('#text h1',{
    duration:1,
    x:-100,
    opacity:0,
    stagger:0.3
})

