// 🚀 JS Practice 2_ Elevate Your JavaScript Skills with Exciting Projects! 💡

// 1. ek ractangle banao and 
// 2. jab mouse center par ho rectangle center par ho, jab mouse left jaana shuru ho rectangle bhi left jaana shru hojaaye, par jaise jaise mouse left jaaye rectangle ki speed left mein jaate jaate slow hojaaye same happens with right side as well.

// window -> yani ki puri window

window.addEventListener('mousemove',function(detalis){

    // console.log(detalis);
    // console.log(detali.clientX);

    var rect = document.querySelector('#rect')
    var xval = gsap.utils.mapRange(
        // mapRange(inMin, inMax, outMin, outMax, valueToMap)
        // inmin hoy tare outmin ape
        // inmax hoy tere outmax ape
        // last is position
        0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width/2,
        window.innerWidth-(100 + rect.getBoundingClientRect().width / 2),
        detalis.clientX)

    gsap.to('#rect',{
        // left: detalis.clientX+'px',
        left: xval+'px',
        ease: Power3
    })
})