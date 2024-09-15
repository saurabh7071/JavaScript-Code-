
const images = [
    {
        dp : "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp : "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGElMjBob3QlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        story : "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp : "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp : "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://plus.unsplash.com/premium_photo-1682097632681-c493f8614f01?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp : "https://images.unsplash.com/photo-1611747881172-b44a9d8ff6c1?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

const storiyan = document.querySelector(".storiyan");
const fullDisplay = document.querySelector(".full-display");
let container = ""
images.forEach(function(items, index){
    container += `<div class="story">
                    <img id="${index}" src="${items.dp}" alt="models">
                </div>`
})

storiyan.innerHTML = container;

storiyan.addEventListener('click', function(details){
    fullDisplay.style.backgroundImage = `url("${images[details.target.id].story}")`
    fullDisplay.style.display = "block";

    setTimeout(function(){
        fullDisplay.style.display = "none";
    },3000)
});