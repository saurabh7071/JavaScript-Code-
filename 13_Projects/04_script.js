
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
// const notes = document.querySelectorAll(".notes");

function showNotes() {
    container.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", container.innerHTML);
}


btn.addEventListener("click", function () {
    const div = document.createElement("div");
    div.classList.add("notes-container");

    let p = document.createElement("p");
    p.classList.add("notes");
    p.setAttribute("contenteditable", "true");
    // p.setAttribute("autocomplete", "off");

    let btn = document.createElement("button");
    btn.classList.add("deletBtn");
    btn.textContent = "X";

    div.appendChild(btn);
    div.appendChild(p);
    container.appendChild(div);

    p.addEventListener("input", updateStorage); // ye jaruri hai...
    
    updateStorage();
    p.focus();
});

container.addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        updateStorage();
    }
    if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".notes");
        notes.forEach(data => {
            data.onkeyup = function () {
                updateStorage();
            }
        })
    }
})


