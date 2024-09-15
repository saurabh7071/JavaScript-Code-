
const container = document.querySelector('.container');
const icon = document.querySelector('i');

container.addEventListener('dblclick', function(){
    icon.style.transform = `translate(-50%, -50%) scale(1)`;
    icon.style.opacity = 0.6;

    setTimeout(function(){
        icon.style.transform = `translate(-50%, -50%) scale(0)`;
        icon.style.opacity = 0;
    },1500)

    // setTimeout(function(){
    //     icon.style.transform = `translate(-50%, -50%) scale(0)`;
    // },2000)
})
