
const chatInput = document.querySelector('#input');
const sendMessageBtn = document.querySelector('#sendMessage');
const chatbox = document.querySelector('.chatbox');

let userMessage;
const API_KEY = "sk-proj-Ur6TNlygYHS1YIjHemHDT3BlbkFJPPYILddmGbjBZRQKilEC";

function createChatLi(message, className) {
    // creat a chat <li> element with passed message and className
    const li = document.createElement('li');
    li.classList.add("chat", className);
    li.innerHTML = (className === "outgoing") ? `<p>${message}</p>` : `<i class="ri-robot-2-line"></i><p>${message}</p>`;
    return li;
}

function generateResponse() {
    const API_URL = "https://api.openai.com/v1/chat/completions";

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-4o-mini-2024-07-18",
            "messages": [
                {
                    role: "user",
                    content: userMessage
                }
            ] 
        })
}

fetch(API_URL, requestOptions)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
}

function handleChat() {
    userMessage = chatInput.value.trim();
    if (!userMessage) return; // if usermessage is empty return it

    // Append the user's message to the chatbox 
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        // Display "Thinking..." message while waiting for the respone
        chatbox.appendChild(createChatLi("Thinking...", "incoming"));
        generateResponse();
    }, 600);
}

sendMessageBtn.addEventListener('click', handleChat);