let btn1 = document.querySelector("#qst1");
let btn2 = document.querySelector("#qst2");
let btn3 = document.querySelector("#qst3");
let btn4 = document.querySelector("#qst4");
let btn5 = document.querySelector("#qst5");
let btn6 = document.querySelector("#qst6");
let list = document.querySelectorAll(".question");

btn1.addEventListener("click", destroy);
btn2.addEventListener("click", destroy);
btn3.addEventListener("click", destroy);
btn4.addEventListener("click", destroy);
btn5.addEventListener("click", destroy);
btn6.addEventListener("click", destroy);

function destroy () {
    list.forEach(answer => {
        if(answer.lastElementChild.style.display == "block" && answer.firstElementChild != this) {
            answer.firstElementChild.lastElementChild.style.transform = "rotate(-45deg)";
            answer.lastElementChild.style.display = "none";
        }
    });
    let element = this.nextElementSibling;
    if(element.style.display == "block") {
        this.lastElementChild.style.transform = "rotate(0deg)";
        element.style.display = "none";
    } else {
        this.lastElementChild.style.transform = "rotate(45deg)";
        element.style.display = "block";
    }
}