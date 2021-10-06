const pass = document.getElementById("pw-display");
const len = document.getElementById("length");
const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("btn");

const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+=-|][{}|"

function getUppercase()  {
    return uppercase[Math.floor(Math.random() * uppercase.length)];
}
function getLowercase() {
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword()  {
    const len1 = len.value;
    let password = "";

    for(let i = 0; i < len1; i++) {
        const x = getValue();
        password += x;
    }
    pass.innerText = password;
}

function getValue() {

    const x1 = [];

    if(upper.checked) {
        x1.push(getUppercase());
    }
    if(lower.checked) {
        x1.push(getLowercase());
    }
    if(number.checked) {
        x1.push(getNumber());
    }
    if(symbol.checked) {
        x1.push(getSymbol());
    }

    if(x1.length == 0) return "";
    return x1[Math.floor(Math.random() * x1.length)];

}

generate.addEventListener("click",generatePassword);