// navbar

var voyant = document.querySelectorAll('.lienVoyant');
var nonVoyant = document.querySelectorAll('.lienNonVoyant');

var li = document.querySelectorAll('.li-nav')
var tableauLi = Array.from(li)


var tableauVoyant = Array.from(voyant);
var tableauNonVoyant = Array.from(nonVoyant);


tableauLi.forEach((element, index) => {
    element.addEventListener('mouseover', function(){
        change(index);
    })
    element.addEventListener('mouseout', function(){
        changeNon(index);
    })
})

function change(i){
    tableauVoyant[i].style.opacity = '0';
    tableauNonVoyant[i].style.opacity = '1';
}

function changeNon(i){
    tableauVoyant[i].style.opacity = '1';
    tableauNonVoyant[i].style.opacity = '0';
}

// reveal-navbar

const ratio = 0.5

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio,
}

var home = document.querySelector('.homeVoyant');
var about = document.querySelector('.aboutVoyant');
var parcours = document.querySelector('.parcoursVoyant');
var services = document.querySelector('.servicesVoyant');
var portfolio = document.querySelector('.portfolioVoyant');
var contact = document.querySelector('.contactVoyant');
var instagram = document.querySelector('.instagramVoyant');
var linkedin = document.querySelector('.linkedinVoyant');
var github = document.querySelector('.githubVoyant');


var homeNon = document.querySelector('.homeNonVoyant');
var aboutNon = document.querySelector('.aboutNonVoyant');
var parcoursNon = document.querySelector('.parcoursNonVoyant');
var servicesNon = document.querySelector('.servicesNonVoyant');
var portfolioNon = document.querySelector('.portfolioNonVoyant');
var contactNon = document.querySelector('.contactNonVoyant');
var instagramNon = document.querySelector('.instagramNonVoyant');
var linkedinNon = document.querySelector('.linkedinNonVoyant');
var githubNon = document.querySelector('.githubNonVoyant');

const handleIntersect = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            home.style.color = "black";
            homeNon.style.color = "white";
            homeNon.style.backgroundColor = "black";
            about.style.color = "black";
            aboutNon.style.color = "white";
            aboutNon.style.backgroundColor = "black";
            parcours.style.color = "black";
            parcoursNon.style.color = "white";
            parcoursNon.style.backgroundColor = "black";
            services.style.color = "black";
            servicesNon.style.color = "white";
            servicesNon.style.backgroundColor = "black";
            portfolio.style.color = "black";
            portfolioNon.style.color = "white";
            portfolioNon.style.backgroundColor = "black";
            contact.style.color = "black";
            contactNon.style.color = "white";
            contactNon.style.backgroundColor = "black";
            instagram.style.color = "black";
            instagramNon.style.color = "white";
            instagramNon.style.backgroundColor = "black";
            linkedin.style.color = "black";
            linkedinNon.style.color = "white";
            linkedinNon.style.backgroundColor = "black";
            github.style.color = "black";
            githubNon.style.color = "white";
            githubNon.style.backgroundColor = "black";
        }else{
            home.style.color = "white";
            homeNon.style.color = "black";
            homeNon.style.backgroundColor = "white";
            about.style.color = "white";
            aboutNon.style.color = "black";
            aboutNon.style.backgroundColor = "white";
            parcours.style.color = "white";
            parcoursNon.style.color = "black";
            parcoursNon.style.backgroundColor = "white";
            services.style.color = "white";
            servicesNon.style.color = "black";
            servicesNon.style.backgroundColor = "white";
            portfolio.style.color = "white";
            portfolioNon.style.color = "black";
            portfolioNon.style.backgroundColor = "white";
            contact.style.color = "white";
            contactNon.style.color = "black";
            contactNon.style.backgroundColor = "white";
            instagram.style.color = "white";
            instagramNon.style.color = "black";
            instagramNon.style.backgroundColor = "white";
            linkedin.style.color = "white";
            linkedinNon.style.color = "black";
            linkedinNon.style.backgroundColor = "white";
            github.style.color = "white";
            githubNon.style.color = "black";
            githubNon.style.backgroundColor = "white";
        }
    })

}

const observer = new IntersectionObserver(handleIntersect,options)
document.querySelectorAll('.section-black').forEach(function(o){
    observer.observe(o); 
})

//slider
const items = document.querySelectorAll('.container-isabel');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedant = document.querySelector('.left');
let count = 0;
function slideSuivante(){
    items[count].classList.remove('active');
    if(count < nbSlide - 1){
        count++;
    }else{
        count = 0;
    }

    items[count].classList.add('active');
}

suivant.addEventListener('click', slideSuivante);

function slidePrecedente(){
    items[count].classList.remove('active');
    if(count > 0){
        count--;
    }else{
        count = nbSlide -1;
    }

    items[count].classList.add('active')
}

precedant.addEventListener('click', slidePrecedente);

// ouverture navbar

var openMenu = document.querySelector('.openMenu');
var ulNavbar = document.querySelector('.ul-navbar');

openMenu.addEventListener('click', open);

function open(){
    ulNavbar.classList.toggle('ouverture-navbar');
}