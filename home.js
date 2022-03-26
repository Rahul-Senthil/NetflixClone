// import Toastify from 'toastify-js';

const url = "https://www.youtube.com/embed/";
const popularBox = document.getElementById("popular_box");
const dramaBox = document.getElementById("drama_box");
const actionBox = document.getElementById("action_box");

const arrowLeft_1 = document.getElementById("scrollArrow-left-1");
const arrowRight_1 = document.getElementById("scrollArrow-right-1");
const arrowLeft_2 = document.getElementById("scrollArrow-left-2");
const arrowRight_2 = document.getElementById("scrollArrow-right-2");
const arrowLeft_3 = document.getElementById("scrollArrow-left-3");
const arrowRight_3 = document.getElementById("scrollArrow-right-3");

const popularTrailer = document.getElementById("popularTrailer");
const popularSource = document.getElementById("popularFrame");
const dramaTrailer = document.getElementById("dramaTrailer");
const dramaSource = document.getElementById("dramaFrame");
const actionTrailer = document.getElementById("actionTrailer");
const actionSource = document.getElementById("actionFrame");
let previous = null;

function handlePopular(source) {
        if(source === previous)
        {
            popularTrailer.style.display = 'none';
            previous = null;
        }
        else{
            previous = source;
            popularTrailer.style.display = 'block';
            dramaTrailer.style.display = 'none';
            actionTrailer.style.display = 'none';
            popularSource.setAttribute("src", url+source);
        }

}

function handleDrama(source) {
        if(source === previous)
        {
            dramaTrailer.style.display = 'none';
            previous = null;
        }
        else{
            previous = source;
            dramaTrailer.style.display = 'block';
            popularTrailer.style.display = 'none';
            actionTrailer.style.display = 'none';
            dramaSource.setAttribute("src", url+source);
        }
}

function handleAction(source) {
        if(source === previous)
        {
            actionTrailer.style.display = 'none';
            previous = null;
        }
        else{
            previous = source;
            actionTrailer.style.display = 'block';
            popularTrailer.style.display = 'none';
            dramaTrailer.style.display = 'none';
            actionSource.setAttribute("src", url+source);
        }
    
}

function scrollMeLeft(which) {
    if(which === 'one')
    {
        popularBox.style.scrollBehavior = 'smooth';
        popularBox.scrollTo((popularBox.scrollLeft-1370),0);
        setTimeout(()=> {
            if(popularBox.scrollLeft<50)
            {
                arrowLeft_1.style.visibility = 'hidden';
            }
            if(Math.ceil(popularBox.scrollLeft) < 1300)
            {
                arrowRight_1.style.visibility = 'visible';
            }
        },800)
    }
    if(which === 'two')
    {
        dramaBox.style.scrollBehavior = 'smooth';
        dramaBox.scrollTo((dramaBox.scrollLeft-1370),0);
        setTimeout(()=> {
            if(dramaBox.scrollLeft<50)
            {
                arrowLeft_2.style.visibility = 'hidden';
            }
            if(Math.ceil(dramaBox.scrollLeft) < 1300)
            {
                arrowRight_2.style.visibility = 'visible';
            }
        },800)
    }
    if(which === 'three')
    {
        actionBox.style.scrollBehavior = 'smooth';
        actionBox.scrollTo((actionBox.scrollLeft-1370),0);
        setTimeout(()=> {
            if(actionBox.scrollLeft<50)
            {
                arrowLeft_3.style.visibility = 'hidden';
            }
            if(Math.ceil(actionBox.scrollLeft) < 1300)
            {
                arrowRight_3.style.visibility = 'visible';
            }
        },800)
    }
}

function scrollMeRight(which) {
    if(which === 'one')
    {
        popularBox.style.scrollBehavior = 'smooth';
        popularBox.scrollTo((popularBox.scrollLeft+1370),0);
        // console.log("Scroll left before",poster.scrollLeft);
        // console.log("Scroll width before",poster.scrollWidth);
        setTimeout(()=> {
            if(popularBox.scrollLeft>50){
                arrowLeft_1.style.visibility = 'visible';
            }
            if(Math.ceil(popularBox.scrollLeft) > 1300){
                arrowRight_1.style.visibility = 'hidden';
            }
        },800)
    }
    if(which === 'two')
    {
        dramaBox.style.scrollBehavior = 'smooth';
        dramaBox.scrollTo((dramaBox.scrollLeft+1370),0);
        setTimeout(()=> {
            if(dramaBox.scrollLeft>50){
                arrowLeft_2.style.visibility = 'visible';
            }
            if(Math.ceil(dramaBox.scrollLeft) > 1300){
                arrowRight_2.style.visibility = 'hidden';
            }
        },800)
    }
    if(which === 'three')
    {
        actionBox.style.scrollBehavior = 'smooth';
        actionBox.scrollTo((actionBox.scrollLeft+1370),0);
        setTimeout(()=> {
            if(actionBox.scrollLeft>50){
                arrowLeft_3.style.visibility = 'visible';
            }
            if(Math.ceil(actionBox.scrollLeft) > 1300){
                arrowRight_3.style.visibility = 'hidden';
            }
        },800)
    }
}
