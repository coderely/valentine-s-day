const moveButton = document.querySelector(".no");
const yesButton = document.querySelector(".yes");
let para = document.querySelector(".para");
let bgMusic = document.querySelector('#bgMusic');
const mains = document.querySelector(".mains");
const imgdeg = document.getElementById("img");

moveButton.addEventListener('click', ()=>{
    moveButton.style.left =  randomNumber() + "%";
    moveButton.style.top = randomNumber() + "%";
    moveButton.style.position = "absolute";
})

yesButton.addEventListener("click",()=>{
    yesFunction();
    bgMusic.play();
    typingEffect();
})
function randomNumber(){
    return Math.floor(Math.random()*80);
}
const yesFunction = () =>{
    let text = "<p>" + 'I love you more' + "</p>";
    para.innerHTML = text;
    yesButton.style.display = "none";
    moveButton.style.display = "none";
    mains.style.display = "block";
    changeImg();
}

const typingEffect = ()=>{
    let messgae = "Hello, Baby  How are you. How's your day ? Isn't it great,  I hope you're doing fine. I love you";
    
    let i = 0;

    const typeWrite = () =>{
        if(i < messgae.length){
            document.getElementById('mes').innerHTML+= messgae.charAt(i);
            i++;
            setTimeout(typeWrite, 50);
        }
    }
    typeWrite();
}

const imgElem = document.querySelector("#img");

const img = ["https://i.pinimg.com/originals/3d/6d/85/3d6d850aae1bd1a75ecea1b7e5381735.gif","https://i.pinimg.com/originals/b5/47/6e/b5476e2c5fb1cd6c9ef14a4ee5a1b72a.gif","https://i.pinimg.com/originals/7f/93/b4/7f93b4af0a3c753a7ee9cc0fbd2dd3d0.gif","https://i.pinimg.com/originals/58/99/f6/5899f6e93d8a463fb930a3714ceb7151.gif","https://i.pinimg.com/originals/31/15/98/31159803ceb30f8bc31edadccfeffe5f.gif","https://i.pinimg.com/originals/31/15/98/31159803ceb30f8bc31edadccfeffe5f.gif","https://i.pinimg.com/originals/b7/1e/5d/b71e5d43934f51200db961ff0e85ce6c.gif"]

let currentIndex = 0;
function changeImg(){
    imgElem.src = img[currentIndex];
    currentIndex = (currentIndex + 1) % img.length; // Loop through images
    setTimeout(changeImg, 3000 + currentIndex * 100); // Increase delay for each image
}

