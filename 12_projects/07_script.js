
// const element = document.querySelector('#element');
// const img = document.querySelector('#element img')

// element.addEventListener('mousemove', function (event) {

//     img.style.left = event.x + 'px';
// })

// element.addEventListener('mouseenter', function (event) {
//     img.style.opacity = 1;
// })

// element.addEventListener('mouseleave', function (event) {
//     img.style.opacity = 0;
// })


const element = document.querySelectorAll('.element');

element.forEach(function(values){
    // console.log(values.childNodes[3]);

    values.addEventListener('mousemove', function(e){
        values.childNodes[3].style.left = e.x + 'px';
    })

    values.addEventListener('mouseenter', function(){
        values.childNodes[3].style.opacity = 1;
    })

    values.addEventListener('mouseleave', function(){
        values.childNodes[3].style.opacity = 0;
    })
})


