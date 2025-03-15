const btnOne = document.querySelector(".nav_moon-btn");
const btnTwo = document.querySelector(".nav_mars-btn");
const btnThree = document.querySelector(".nav_europa-btn");
const btnFour =document.querySelector(".nav_titan-btn");
const btnAnimatie= document.querySelector(".animatie");
const image = document.querySelector(".d-image");
const titleOne = document.querySelector(".info_title-moon");
const titleTwo = document.querySelector(".info_title-mars");
const titleThree = document.querySelector(".info_title-europa");
const titleFour = document.querySelector(".info_title-titan");
const descOne = document.querySelector(".info_desc-moon");
const descTwo = document.querySelector(".info_desc-mars");
const descThree = document.querySelector(".info_desc-europa");
const descFour = document.querySelector(".info_desc-titan");
const kmOne=document.querySelector(".km_moon")
const kmTwo=document.querySelector(".km_mars")
const kmThree=document.querySelector(".km_europa")
const kmFour=document.querySelector(".km_titan")
const daysOne=document.querySelector(".days_moon")
const daysTwo=document.querySelector(".days_mars")
const daysThree=document.querySelector(".days_europa")
const daysFour=document.querySelector(".days_titan")
let number=1;

const removeActiveBtn = (number) => {
    if(number === 1){
        btnOne.style.color = 'white';
    }else if(number === 2){
        btnTwo.style.color = 'white';
    }else if(number === 3){
        btnThree.style.color = 'white';
    }else if(number === 4){
         btnFour.style.color = 'white';
    }else if(number === 5){
         btnAnimatie.style.color = 'white';
    }
}

const addActiveBtn = (number) => {
    if(number === 1){
        btnOne.style.color = 'yellow';
    }else if(number === 2){
        btnTwo.style.color = 'red';
    }else if(number === 3){
        btnThree.style.color = 'orange';
    }else if(number === 4){
        btnFour.style.color = 'blue';}
    else if(number === 5){
        btnAnimatie.style.color = 'black';
    }
}



const changeImage = (number) => {
    if(number === 1){
        image.src = 'images/image-moon.webp';
       
    }else if(number === 2){
        image.src = 'images/image-mars.webp';
       
    }else if(number === 3){
         image.src = 'images/image-europa.webp';
        
    }else if(number === 4){
        image.src = 'images/image-titan.webp';
    }
}

window.addEventListener("resize", function(){
    changeImage(number);
});

const pageLoadHide = () => {
    titleTwo.style.display = 'none';
    descTwo.style.display = 'none';
    kmTwo.style.display = 'none';
    daysTwo.style.display = 'none';
    titleThree.style.display = 'none';
    descThree.style.display = 'none'; 
    kmThree.style.display = 'none';
    daysThree.style.display = 'none';
    titleFour.style.display = 'none';
    descFour.style.display = 'none'; 
    kmFour.style.display = 'none';
    daysFour.style.display = 'none';

}

const revealText = (number) => {
    if(number === 1){
        titleOne.style.display = 'block';
        descOne.style.display = 'block';
        kmOne.style.display = 'block';
        daysOne.style.display = 'block';
    }else if(number === 2){
        titleTwo.style.display = 'block';
        descTwo.style.display = 'block';
        kmTwo.style.display = 'block';
        daysTwo.style.display = 'block';
    }else if(number === 3){
        titleThree.style.display = 'block';
        descThree.style.display = 'block';
        kmThree.style.display = 'block';
        daysThree.style.display = 'block';
    }else if(number === 4){
        titleFour.style.display = 'block';
        descFour.style.display = 'block';
        kmFour.style.display = 'block';
        daysFour.style.display = 'block';} 
}

const hideText = (number) => {
    if(number === 1){
        titleOne.style.display = 'none';
        descOne.style.display = 'none';
        kmOne.style.display = 'none';
        daysOne.style.display = 'none';
    }else if(number === 2){
        titleTwo.style.display = 'none';
        descTwo.style.display = 'none';
        kmTwo.style.display = 'none';
        daysTwo.style.display = 'none';
    }else if(number === 3){
        titleThree.style.display = 'none';
        descThree.style.display = 'none';
        kmThree.style.display = 'none';
        daysThree.style.display = 'none';
    }else if(number === 4){
        titleFour.style.display = 'none';
        descFour.style.display = 'none'; 
        kmFour.style.display = 'none';
        daysFour.style.display = 'none';}
}

btnAnimatie.addEventListener('click', function() {
    window.location.href = "animatie.html";
});

const setNumber = (event, number) => {
    if (event.target.matches(".nav_moon-btn")) number = 1;
    else if (event.target.matches(".nav_mars-btn")) number = 2;
    else if (event.target.matches(".nav_europa-btn")) number = 3;
    else if (event.target.matches(".nav_titan-btn")) number = 4;
    else if (event.target.matches(".animatie")) number=5
    return number;
}

window.addEventListener('click', function(event) {
    removeActiveBtn(number);
    hideText(number);
    number = setNumber(event, number);
    revealText(number);
    addActiveBtn(number);
    changeImage(number);
   
});

