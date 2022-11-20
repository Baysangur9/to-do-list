let inputElement = document.querySelector('input')
let formElement = document.querySelector('form')
let listElement = document.querySelector('ul')
let totalTaskslement = document.querySelector('#total-tasks')


let tasks = [
    
]

function deleteItem (e) {
    let task = e.target.parentElement.previousElementSibling.innerHTML;
    let index = tasks.indexOf(task)
    if(index !== -1) {
        tasks.splice(index,1)
    } 

  


    popuLateList()
}




function popuLateList() {

    listElement.innerHTML= ''
    tasks.forEach(function(item){
         let newItem = document.createElement('li')

         let span = document.createElement('span')
         span.innerHTML = item
         newItem.appendChild(span)


         let anchorElement = document.createElement('a')
         anchorElement.classList.add('delete')
         anchorElement.innerHTML = '  <i class="fas fa-trash-alt"></i>'
         newItem.appendChild(anchorElement)
 

           anchorElement.addEventListener('click',(e) => deleteItem(e))

         listElement.appendChild(newItem)
    })

    totalTaskslement.innerHTML = tasks.length
    inputElement.value = ''
}


popuLateList()



function addTask(){
    if(inputElement.value){
        tasks.push(inputElement.value)
        popuLateList()
    }
}

formElement.addEventListener('submit',function(e){
    e.preventDefault()
    addTask()
})