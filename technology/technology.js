const btnOne = document.querySelector(".nav_one-btn");
const btnTwo = document.querySelector(".nav_two-btn");
const btnThree = document.querySelector(".nav_three-btn");
const image = document.querySelector(".technology-image");
const titleOne = document.querySelector(".info_title-one");
const titleTwo = document.querySelector(".info_title-two");
const titleThree = document.querySelector(".info_title-three");
const descOne = document.querySelector(".info_desc-one");
const descTwo = document.querySelector(".info_desc-two");
const descThree = document.querySelector(".info_desc-three");
let number = 1;

const removeActiveBtn = (number) => {
    if(number === 1){
        btnOne.style.backgroundColor = 'transparent';
        btnOne.style.color = 'white';
    }else if(number === 2){
        btnTwo.style.backgroundColor = 'transparent';
        btnTwo.style.color = 'white';
    }else if(number === 3){
        btnThree.style.backgroundColor = 'transparent';
        btnThree.style.color = 'white';
    }
}

const addActiveBtn = (number) => {
    if(number === 1){
        btnOne.style.backgroundColor = 'white';
        btnOne.style.color = 'black';
    }else if(number === 2){
        btnTwo.style.backgroundColor = 'white';
        btnTwo.style.color = 'black';
    }else if(number === 3){
        btnThree.style.backgroundColor = 'white';
        btnThree.style.color = 'black';
    }
}

const changeImage = (number) => {
    if(number === 1){
        if(window.innerWidth > 1080) image.src = 'images/image-launch-vehicle-portrait.jpg';
        else image.src = 'images/image-launch-vehicle-landscape.jpg';
    }else if(number === 2){
        if(window.innerWidth > 1080) image.src = 'images/image-spaceport-portrait.jpg';
        else image.src = 'images/image-spaceport-landscape.jpg';
    }else if(number === 3){
        if(window.innerWidth > 1080) image.src = 'images/image-space-capsule-portrait.jpg';
        else image.src = 'images/image-space-capsule-landscape.jpg';
    }
}

window.addEventListener("resize", function(){
    changeImage(number);
});

const pageLoadHide = () => {
    titleTwo.style.display = 'none';
    descTwo.style.display = 'none';
    titleThree.style.display = 'none';
    descThree.style.display = 'none'; 
}

const revealText = (number) => {
    if(number === 1){
        titleOne.style.display = 'block';
        descOne.style.display = 'block'; 
    }else if(number === 2){
        titleTwo.style.display = 'block';
        descTwo.style.display = 'block';
    }else if(number === 3){
        titleThree.style.display = 'block';
        descThree.style.display = 'block';
    }
}

const hideText = (number) => {
    if(number === 1){
        titleOne.style.display = 'none';
        descOne.style.display = 'none';
    }else if(number === 2){
        titleTwo.style.display = 'none';
        descTwo.style.display = 'none';
    }else if(number === 3){
        titleThree.style.display = 'none';
        descThree.style.display = 'none';
    }
}

const setNumber = (event, number) => {
    if(event.target.matches(".nav_one-btn")) number = 1;
    else if(event.target.matches(".nav_two-btn")) number = 2;
    else if(event.target.matches(".nav_three-btn")) number = 3;
    return number;
}

window.addEventListener('click', function(event){
    removeActiveBtn(number);
    hideText(number);
    number = setNumber(event, number);
    revealText(number);
    addActiveBtn(number);
    changeImage(number);
});


  

