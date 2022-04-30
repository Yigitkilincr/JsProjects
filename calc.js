console.log("My First Js Project...")

document.getElementById("answer").readOnly = true
let screen = getElementById("answer");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (a) => {
        buttontext = a.target.innerText;
        if (buttontext == "X") {
            buttontext = "*";
            screenValue += buttontext;
            screen.value = screenValue;
        }
        else if (buttontext == "C") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttontext == "CE") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttontext == "=") {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttontext;
            screen.value = screenValue;
        }
    })
}