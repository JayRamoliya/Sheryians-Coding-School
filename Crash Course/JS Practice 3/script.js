// 🚀 JS Practice 3_ Elevate Your JavaScript Skills with Exciting Projects! 💡

// ek div banavo aur uspar jab mouse chale to picture pop ho jaaye aur fir dur ho jaaye. ✔

// humara mouse jab chal raha hai, to kai baar chal raha hai jiske wajah se kai baar card create hojaayega and wo hum nahi chaahte ✔

// mouse jitni baar chal raha hai chale bas execution of function kam baar ho ✔

// throttling ->  kisi particular code ke no of executions ko kam kardena

// this is not my code google code
const btn=document.querySelector("#throttle");
const throttleFunction=(func, delay)=>{
    let prev = 0; 
    return (...args) => {
    let now = new Date().getTime(); 
    if(now - prev> delay){ 
      prev = now;
      return func(...args);  
    }
  }
}

document.querySelector('#center')
.addEventListener("mousemove", throttleFunction((dets)=>{
    // dets->details
    // your less repeatation code
    var div = document.createElement('div') //create a element div
    div.classList.add('imagediv') // add a class
    
    div.style.left=dets.clientX+'px' 
    div.style.top=dets.clientY+'px'
    
    document.body.appendChild(div) // add div to body

    var img = document.createElement('img') // create a image
    img.setAttribute('src',"jay.png") // set src path image

    div.appendChild(img) // add img to div

    gsap.to(img,{
        y:'0',
        ease:Power1,
        duration:.6
    })
    gsap.to(img,{
        y:'100%',
        ease:Power2,
        delay:.6
    })
    
    setTimeout(function(){
        div.remove() // div remove
    },1000)

}, 500)); // 0.5 sec pachi avse img

// har bar ek div banao
// div ko absoulute banao ek width and height do overflow hidded karo
// and div keandar image banao and us image ko neeche push kardo
// image ko animated way mein upar laao