const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout

function cricle(xscale,yscale){
    window.addEventListener('mousemove',function(dets){
        // console.log(dets);
        // console.log(dets.clientX);
        // console.log(dets.clientY);
        document.querySelector('#circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale} )`;
    })
}

function circlecpta(){
    // define default scale value
    var xscale=1
    var yscale=1

    var xprev=0
    var yprev=0
    window.addEventListener('mousemove',function(dets){
        clearTimeout(timeout)
        var xdiff = dets.clientX-xprev
        var ydiff = dets.clientY-yprev
        xscale = gsap.utils.clamp(.8,1.2,xdiff)
        yscale = gsap.utils.clamp(.8,1.2,ydiff)

        xprev=dets.clientX
        yprev=dets.clientY

        cricle(xscale,yscale)
        // console.log(xdiff,ydiff);

        timeout = setTimeout(function(){
            document.querySelector('#circle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100)
    })
}

function firstpage(){
    var tl=gsap.timeline()
    tl.from('#nav',{
        y:-10,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
    tl.to('.elem',{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger:.2
    })
    tl.from('#last',{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}

cricle()
firstpage()
circlecpta()


document.querySelectorAll('#elem').forEach(function (elem) {
    var rotate=0
    var difroute=0

    elem.addEventListener('mouseleave',function(dets){
        gsap.to(elem.querySelector('img'),{
            display:'none',
            ease:Power3,
        })
    }) 

    elem.addEventListener('mousemove',function(dets){

        var diff = dets.clientY - elem.getBoundingClientRect().top

        difroute=dets.clientX-rotate
        rotate=dets.clientX

        gsap.to(elem.querySelector('img'),{
            display:'block',
            ease:Power3,
            top:diff,
            left:dets.clientX,
            rotate:gsap.utils.clamp(-20,20,difroute*0.8)
        })
    })
})