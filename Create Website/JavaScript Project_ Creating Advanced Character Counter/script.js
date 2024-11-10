const textarea=document.querySelector('.text-area')
const char_element = document.querySelector('.char-number')
const twitter_element = document.querySelector('.twitter-number')
const insta_element = document.querySelector('.insta-number')
const word_element = document.querySelector('.word-number')


// char function
const charCounter = (e)=>{
    char_element.innerText=e.target.value.length;
}

// change color function
const colorchange = (name,count)=>{
    if(name === 'twitter'){
        if(count>280){
        twitter_element.classList.add('change-color')
    }
    else{
        twitter_element.classList.remove('change-color')
    }
    }
    else{
        if(count>160){
        insta_element.classList.add('change-color')
    }
    else{
        insta_element.classList.remove('change-color')
    }
    }
}

// twitter function
let x=280
const twitterCounter = (e) =>{
    twitter_element.innerText=x-e.target.value.length;
    colorchange('twitter',e.target.value.length)
}

// instagram function
let i=160
const instaCounter = (e) =>{
    insta_element.innerText=i-e.target.value.length;
    colorchange('instagram',e.target.value.length)
}

// word function
const wordcounter = (e)=>{
    let str=e.target.value;
    str = str.split(' ')
    word_element.innerText=str.length;

}

// main function
textarea.addEventListener('input',(e)=>{
    charCounter(e)
    wordcounter(e)
    twitterCounter(e)
    instaCounter(e)
})