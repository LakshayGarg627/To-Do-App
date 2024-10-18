const inputBox=document.querySelector("#input-box");
const listContainer=document.querySelector("#list-container");

function AddTask(){
    if(inputBox.value === ''){
        alert("You must write something !")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();
}

listContainer.addEventListener("click",function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
        savedata();
    }else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("Data",listContainer.innerHTML);
}
function display(){
    listContainer.innerHTML=localStorage.getItem("Data");
}
display();