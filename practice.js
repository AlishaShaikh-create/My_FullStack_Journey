let todo=[]
function addtask(task){
    todo.push(task)
    
}


addtask('eat')

function deleteTask(index){
    todo.splice(index,1)
    console.log(todo)
}


function showTodo(){
    for(let i=0 ;i<todo.length;i++){
        console.log(todo[i])
    }
}

showTodo()