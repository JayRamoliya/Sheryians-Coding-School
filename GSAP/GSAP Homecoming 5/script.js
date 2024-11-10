gsap.to('#page1 h1',{
    transform:'translateX(-100%)',
    fontWeight:"100",
    duration:2,
    scrollTrigger:{
        trigger:'#page1',
        scroller:'body',
        start: 'top 0',
        markers:true,
        end:'top -200%',
        scrub:2, // anathi reverse pan chale
        pin:true // pin hamesa parent ne karvano hoy
    }
})

var tl=gsap.timeline()

// main note agr niche no code tame pachi lagvso to nai chale

function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector('#loader h1').innerHTML=a+"%"
        }
        else{
            a=100
            document.querySelector('#loader h1').innerHTML=a+"%"
        }
    },100)
}
// time()

tl.to('#loader h1',{
    scale:0.8,
    delay:0.3,
    duration:0.9,
    onStart:time()
})

tl.to('#loader',{
    top:'-100vh',
    delay:0.5,
    duration:0.8
})
