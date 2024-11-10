var tl = gsap.timeline()

tl.from('nav a, i',{
    y:-100,
    opacity:0,
    stagger:0.5
})

tl.from('#rtopleft',{
    opacity:0,
    scale:0.8,
    duration:0.3
})
tl.from('#rtopright',{
    opacity:0,
    scale:0.8,
    duration:0.3
})


