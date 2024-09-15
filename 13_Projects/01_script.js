
const inputBox = document.querySelector("#inputBox");
const button = document.querySelector("button");
const list = document.querySelector("#list");

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#inputBox').focus();
})

button.addEventListener("click", function () {
    if (inputBox.value === "") {
        alert("Please enter a task!");
    } else {

        // Creating a li tag 
        const li = document.createElement("li");

        // Creating a input:checkbox 
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "todo-checkbox"
        li.appendChild(checkbox);

        // help to save the written content in input into li tag 
        let textNode = document.createTextNode(inputBox.value);
        li.appendChild(textNode);

        // li.innerHTML = inputBox.value; --> this overwriting the content and creat issue while creating checkbox 

        // Creating a span tag 
        const span = document.createElement("span");
        span.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'
        li.appendChild(span)

        list.appendChild(li);

        checkbox.addEventListener("change", function(){
            if(this.checked){
                li.classList.add("checked")
            }else{
                li.classList.remove("checked")
            }
        })
    }

    inputBox.value = "";
    inputBox.focus();
    saveData();
})

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        const checkbox = e.target.querySelector(".todo-checkbox");
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
        saveData();
    }
    else if (e.target.tagName === "I") {
        e.target.parentElement.parentElement.remove();
        saveData();
    }
}, false)


function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function getData(){
    list.innerHTML = localStorage.getItem("data");
}

getData();