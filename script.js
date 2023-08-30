const charUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const charLowercase = ["abcdefghijklmnopqrstuvwxyz"];
const charNumeric = ["1234567890"];
const charSymbols = ["!@#$%^&*()"];

function generatePassword() {
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumeric = document.getElementById("numeric").checked;
    const useSymbols = document.getElementById("symbols").checked;

    let validChars = '';
    if (useUppercase) validChars += charUppercase;
    if (useLowercase) validChars += charLowercase;
    if (useNumeric) validChars += charNumeric;
    if (useSymbols) validChars += charSymbols;

    if (validChars.length === 0) {
        document.getElementById("password").textContent = '';
        return;
    }

    const passwordLength = 20;
    let newPassword = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        newPassword += validChars[randomIndex];
    }

    document.getElementById("password").textContent = newPassword;
}
