const inputbox= document.getElementById("input-box");
const list= document.getElementById("list-container");
const button = document.querySelector("button")


button.addEventListener("click",()=>{
    if(inputbox.value === ''){
        alert("You must write your task ")
    }else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
})
list.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data", list.innerHTML);
}
function showlist(){
    list.innerHTML=localStorage.getItem("data")
}
showlist();


