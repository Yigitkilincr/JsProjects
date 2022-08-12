const colors = ["blue,green,red,black,yellow"];
const number = document.querySelector(".number_txt")
const btn_dec = document.getElementById("btn-dec");
const btn_res = document.getElementById("btn-res");
const btn_inc = document.getElementById("btn-inc");

let count = 0;

btn_dec.addEventListener("click", function(){
    count --;
    number.textContent = count;
    number.style.color = "magenta"
});

btn_res.addEventListener("click", function(){
    count = 0;
    number.textContent = count;
    number.style.color = "blue"
});

btn_inc.addEventListener("click", function(){
    count ++;
    number.textContent = count;
    number.style.color = "cyan"
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};




