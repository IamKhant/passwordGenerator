const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
     "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", 
     "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", 
     "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?","/"];

let length = 15;
let password1 = document.getElementById("password-one");
let password2 = document.getElementById("password-two");
let generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", function () {
    if (password1.length === 0 && password2.length === 0) {
        for (let i = 0; i <= length; i++) {
            let indexOne = Math.floor(Math.random() * characters.length);
            password1.textContent += characters[indexOne]

            let indexTwo = Math.floor(Math.random() * characters.length);
            password2.textContent += characters[indexTwo]
        }
    } else {
        password1.textContent = ""
        password2.textContent = ""
        for (let i = 0; i <= length; i++) {
            let indexOne = Math.floor(Math.random() * characters.length);
            password1.textContent += characters[indexOne]

            let indexTwo = Math.floor(Math.random() * characters.length);
            password2.textContent += characters[indexTwo]
        }
    }
})


let toggleButton = document.getElementById("toggle-mode");

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleButton.textContent = "Dark";
    } else {
        toggleButton.textContent = "Light";
    }
});