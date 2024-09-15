
const inputBox = document.querySelector("#inputBox");
const btn = document.querySelector("#btn");
const copyBtn = document.querySelector("#copyBtn");

btn.addEventListener("click", function () {
    let password = "";
    const passwordLength = 10;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols = "=!@#$%^&*+_:;"

    const allChars = upperCase + lowerCase + numbers + symbols;

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (passwordLength > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    inputBox.value = password;
})

copyBtn.addEventListener("click", async function () {
    // inputBox.select();
    // document.execCommand("copy");
    // it is depricated 

    // new way : by using clickboard api 
    try {
        await navigator.clipboard.writeText(inputBox.value);

        copyBtn.classList.remove("fa-copy");
        copyBtn.classList.add("fa-solid", "fa-check");

        setTimeout(function () {
            copyBtn.classList.add("fa-regular", "fa-copy");
            copyBtn.classList.remove("fa-solid", "fa-check");
        }, 1000)
    } catch (err) {
        console.error("Failed to copy : ", err);
    }

})