 
 window.addEventListener('load', (e) =>{
    const form = document.querySelector("#forms");
    const inpField = document.querySelector("#ip");
    const listEl = document.querySelector("#tasks");
    form.addEventListener("submit",(e) =>{
        e.preventDefault();
        const task = inpField.value
         if(task ===""){
            alert('Please Insert a Todo Item');
            return;
         }  
            const taskEl = document.createElement("div");
            taskEl.classList.add('task');
            const contEl = document.createElement("div");
            contEl.classList.add('content');
            taskEl.appendChild(contEl);

    const inputEl = document.createElement("input");
    inputEl.classList.add('text');
    inputEl.type = "text";
    inputEl.value=task;
    inputEl.setAttribute = ("readonly","readonly")

contEl.appendChild(inputEl);
const actionsEl = document.createElement("div");
actionsEl.classList.add("actions");
inputEl.appendChild(actionsEl)
 

const editEl = document.createElement("button");
editEl.classList.add("edit");

const deleteEl = document.createElement("button");
deleteEl.classList.add("delete");


actionsEl.appendChild(deleteEl);
actionsEl.appendChild(editEl);
            listEl.appendChild(actionsEl);
            listEl.appendChild(taskEl); 
        
    })
 
 } )
    
 /*var inpBtn = document.getElementById("btn");
 const form = document.getElementById("forms");
   form.addEventListener ('submit', (e) => {
e.preventDefault();
 
   })*/
  
//getting API from backend with AJAX and JSON.

   /* function getTodoListFromBackend(){
        var http = new XMLHttpRequest();
        http.onreadystatechange = function(){
            if (this.readyState === 4) {
                var response=JSON.parse(this.responseText);
                for (var i=0; i < response.length;i++){
                    list .appendChild(createTODODynamically(response[i].id,response[i].title));
                }
            }
        }
        http.open('GET','https://jsonplaceholder.typicode.com/todos',true);
        http.send('')

    }
    getTodoListFromBackend();*/


 