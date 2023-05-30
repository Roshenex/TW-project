const btn1 = document.querySelector(".btns_btn1");
const btn2 = document.querySelector(".btns_btn2");
const btn3 = document.querySelector(".btns_btn3");
const btn4 = document.querySelector(".btns_btn4");
const commanderimage = document.querySelector(".content_commanderimage");
const missionspecialist = document.querySelector(".content_missionspecialist");
const pilot = document.querySelector(".content_pilot");
const flightengineer = document.querySelector(".content_flightengineer");
const title1 = document.querySelector(".buttons_title1");
const title2 = document.querySelector(".buttons_title2");
const title3 = document.querySelector(".buttons_title3");
const title4 = document.querySelector(".buttons_title4");
const subtitle1 = document.querySelector(".buttons_subtitle1");
const subtitle2 = document.querySelector(".buttons_subtitle2");
const subtitle3 = document.querySelector(".buttons_subtitle3");
const subtitle4 = document.querySelector(".buttons_subtitle4");
const paragraf1 = document.querySelector(".buttons_paragraf1");
const paragraf2 = document.querySelector(".buttons_paragraf2");
const paragraf3 = document.querySelector(".buttons_paragraf3");
const paragraf4 = document.querySelector(".buttons_paragraf4");
let number = 1;

const removeActiveBtn = (number) => {
    if(number === 1){
        btn1.style.backgroundColor = 'transparent';
    }else if(number === 2){
        btn2.style.backgroundColor = 'transparent';
    }else if(number === 3){
        btn3.style.backgroundColor = 'transparent';
    }else if(number === 4){
        btn4.style.backgroundColor = 'transparent';
    }
}

const addActiveBtn = (number) => {
    if(number === 1){
        btn1.style.backgroundColor = 'white';
    }else if(number === 2){
        btn2.style.backgroundColor = 'white';
    }else if(number === 3){
        btn3.style.backgroundColor = 'white';
    }else if(number === 4){
        btn4.style.backgroundColor = 'white';
    }
}

const changeImage = (number) => {
    if(number === 1){
        if(window.innerWidth > 1080) image.src = 'images/image-douglas-hurley.png';
    }else if(number === 2){
        if(window.innerWidth > 1080) image.src = 'images/image-mark-shuttleworth.png';
    }else if(number === 3){
        if(window.innerWidth > 1080) image.src = 'images/image-victor-glover.png';
    }else if(number === 4){
        if(window.innerWidth > 1080) image.src = 'images/image-anousheh-ansari.png';
    }
}

window.addEventListener("resize", function(){
    changeImage(number);
});


const pageLoadHide = () => {
    title2.style.display = 'none';
    subtitle2.style.display = 'none';
    paragraf2.style.display = 'none';
    missionspecialist.style.display = 'none';
    title3.style.display = 'none'; 
    subtitle3.style.display = 'none'; 
    paragraf3.style.display = 'none'; 
    pilot.style.display = 'none';
    title4.style.display = 'none'; 
    subtitle4.style.display = 'none'; 
    paragraf4.style.display = 'none';
    flightengineer.style.display = 'none';
}

const revealText = (number) => {
    if(number === 1){
        title1.style.display = 'block';
        subtitle1.style.display = 'block'; 
        paragraf1.style.display = 'block';
        commanderimage.style.display = 'block';
    }else if(number === 2){
        title2.style.display = 'block';
        subtitle2.style.display = 'block'; 
        paragraf2.style.display = 'block';
        missionspecialist.style.display = 'block';
    }else if(number === 3){
        title3.style.display = 'block';
        subtitle3.style.display = 'block'; 
        paragraf3.style.display = 'block';
        pilot.style.display = 'block';
    }else if(number === 4){
        title4.style.display = 'block';
        subtitle4.style.display = 'block'; 
        paragraf4.style.display = 'block';
        flightengineer.style.display = 'block';
    }
}

const hideText = (number) => {
    if(number === 1){
        title1.style.display = 'none';
        subtitle1.style.display = 'none'; 
        paragraf1.style.display = 'none';
        commanderimage.style.display = 'none';
    }else if(number === 2){
        title2.style.display = 'none';
        subtitle2.style.display = 'none'; 
        paragraf2.style.display = 'none';
        missionspecialist.style.display = 'none';
    }else if(number === 3){
        title3.style.display = 'none';
        subtitle3.style.display = 'none'; 
        paragraf3.style.display = 'none';
        pilot.style.display = 'none';
    }else if(number === 4){
        title4.style.display = 'none';
        subtitle4.style.display = 'none'; 
        paragraf4.style.display = 'none';
        flightengineer.style.display = 'none';
    }
}

const setNumber = (event, number) => {
    if(event.target.matches(".btns_btn1")) number = 1;
    else if(event.target.matches(".btns_btn2")) number = 2;
    else if(event.target.matches(".btns_btn3")) number = 3;
    else if(event.target.matches(".btns_btn4")) number = 4;
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

const hideInactive = ()=>{
    btn2.style.backgroundColor = 'transparent';
    btn3.style.backgroundColor = 'transparent';
    btn4.style.backgroundColor = 'transparent';
}