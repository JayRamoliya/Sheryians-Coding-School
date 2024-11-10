
const inputbox=document.getElementById('inputbox')
const list=document.getElementById('list')

function addtask(){
    if(inputbox.value===''){
        alert('You must write something!')
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=inputbox.value
        list.appendChild(li)
        let span=document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
    }
    inputbox.value='' // Clears the input field
    saveData() // Saves the updated task list to localStorage
}

list.addEventListener('click',function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle('check')
        saveData() // Saves the updated task list to localStorage
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveData() // Saves the updated task list to localStorage
    }
},false)

function saveData(){
    localStorage.setItem('data',list.innerHTML)
}
function showTask(){
    list.innerHTML=localStorage.getItem('data')
}
showTask()