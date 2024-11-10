// 🔥 JS Practice 1: Master JavaScript Essentials with Fun Mini Projects! 💡

// 1. make a rectangle and 

// 2. when we move mouse on that rectangle on the left side we want to gradually change the color of that rectangle to red and

// 3. when we move mouse to the right side we want to change the color to blue.


// sabse pahle ye pata karo ke mouse rectangle par aaya and move hua ya nahi ✔

// ab ye calculate karo ke hum center se left par hai ya center se right par hai ✔

// ab ye calc ulate karo ke hum center se kitna left par hai, jitna left par hai utni intensity se coloe red lagao ✔

var rect = document.querySelector('#center')

rect.addEventListener('mousemove',function(details){
    var rectloc = rect.getBoundingClientRect() 
    // console.log(rectloc);

    // The getBoundingClientRect() method returns the size of an element and its position relative to the viewport. (left, top, right, bottom, x, y, width, height)

    // console.log(details);
    // console.log(details.clientX - rectloc.left);

    var insiderectval = details.clientX-rectloc.left

    if(insiderectval < rectloc.width/2){
        // console.log('left');

        var red = gsap.utils.mapRange(0,rectloc.width/2,255,0, insiderectval)
        // mapRange(inMin, inMax, outMin, outMax, valueToMap)

        gsap.to(rect,{
            backgroundColor:`rgb(${red},0,0)`,
            ease:Power4,
        })
    }
    else{
        // console.log('right');
        var blue = gsap.utils.mapRange(rectloc.width/2,rectloc.width,0,255, insiderectval)
        // mapRange(inMin, inMax, outMin, outMax, valueToMap)

        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${blue})`,
            ease:Power4,
        })
        
    }
})

rect.addEventListener('mouseleave',function(){
    // rect.style.backgroundColor='white' // gsap is overwrite
    gsap.to(rect,{
        backgroundColor:'white',
    })
})