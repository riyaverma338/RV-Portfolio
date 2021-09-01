//SCROLL TO TOP
var scrolltoTopButton = document.getElementById("myBtn");

scrolltoTopButton.addEventListener("click", scrollToTop);

function scrollToTop(){

window.scrollTo({
    top:0,
    behavior: "smooth"
});
}

//TYPING EFFECT
const words = ["Hi, I'm Riya" , "I'm glad you're here!"];
let i=0;
let timer;
function typingEffect() {
    let head = words[i].split("");
    var loopTyping = function() {
        if(head.length > 0) {
            document.getElementById('head').innerHTML += head.shift();
        }
        else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 250);
    };
    loopTyping();
}

function deletingEffect(){
    let head = words[i].split("");
    var loopDeleting = function() {
        if (head.length > 0) {
            head.pop();

            document.getElementById('head').innerHTML = head.join("");
        }
        else{
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                };
                typingEffect();
                return false;
            };
            timer = setTimeout(loopDeleting, 50);
        };
        loopDeleting();
    };
    
    typingEffect();



