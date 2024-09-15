
const subheading = document.querySelector('.subheading');
const addFriend = document.querySelector('.addFriend');
const removeFriend = document.querySelector('.removeFriend');

addFriend.addEventListener('click', ()=>{
    subheading.innerHTML = 'Friend 😍',
    subheading.style.color = 'green'
});

removeFriend.addEventListener('click', ()=>{
    subheading.innerHTML = 'Stranger 😒',
    subheading.style.color = 'red'
});


// *******************************

const text = document.querySelector('.text');
const add = document.querySelector('.add');
let check = 0;

add.addEventListener('click', () =>{
    if(check == 0){
        text.innerHTML = 'Friend 😍'
        text.style.color = 'green'
        add.innerHTML = "Remove"
        add.style.backgroundColor = '#dadada'
        add.style.color = '#111'
        check = 1
    }else{
        text.innerHTML = 'Stranger 😒'
        text.style.color = 'red'
        add.innerHTML = "Add Friend"
        add.style.backgroundColor = ''
        add.style.color = ''
        check = 0
    }
})