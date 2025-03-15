const openBtn = document.querySelector(".top_menu-btn--open");
const closeBtn = document.querySelector(".top_menu-btn--close");
const navMenu = document.querySelector(".top_nav");
const home = document.querySelector(".top_link-home");
const dest = document.querySelector(".top_link-destination");
const crew = document.querySelector(".top_link-crew");
const tech = document.querySelector(".top_link-technology");

openBtn.addEventListener('click', function() {
    openBtn.style.display = 'none';
    navMenu.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    navMenu.style.display = 'none';
    openBtn.style.display = 'block';  
});

const fogScreen = () => {
    if(window.document.body.clientWidth > 550){
        openBtn.style.display = 'none';
        navMenu.style.display = 'flex';
        addBorder(document.title);
    }else{
        openBtn.style.display = 'block';
        navMenu.style.display = 'none';
        removeBorder(document.title);
    }
}

const checkPageLoad = () => {
    fogScreen();
}

window.addEventListener("resize", function(){
    fogScreen();
});

const addBorder = (title) => {
    if(title === "Home") {
        home.style.borderBottom = "3px solid white";
        home.style.paddingBottom = "55px";
    }else if(title === "Destination") {
        dest.style.borderBottom = "3px solid white";
        dest.style.paddingBottom = "55px";
    }else if(title === "Crew") {
        crew.style.borderBottom = "3px solid white";
        crew.style.paddingBottom = "55px";
    }else if(title === "Technology") {
        tech.style.borderBottom = "3px solid white";
        tech.style.paddingBottom = "55px";
    }
}

const removeBorder = (title) => {
    if(title === "Home") {
        home.style.borderBottom = "none";
        home.style.paddingBottom = "0";
    }else if(title === "Destination") {
        dest.style.borderBottom = "none";
        dest.style.paddingBottom = "0";
    }else if(title === "Crew") {
        crew.style.borderBottom = "none";
        crew.style.paddingBottom = "0";
    }else if(title === "Technology") {
        tech.style.borderBottom = "none";
        tech.style.paddingBottom = "0";
    }
}
