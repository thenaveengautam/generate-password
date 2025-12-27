const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const allChars = uppercase + lowercase + numbers + symbols

const passwordBox = document.getElementById("password")
const btn = document.querySelector(".btn")
const copyBtn = document.querySelector(".copy-btn")

function createPassword() {
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password
}
btn.addEventListener("click", () => {
    createPassword()
})

function copyPassword() {
    passwordBox.select()
    document.execCommand("copy")
}
copyBtn.addEventListener("click", () => {
    copyPassword()
    alert("Password copied!")
})