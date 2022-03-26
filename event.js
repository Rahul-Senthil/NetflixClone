const logo = document.getElementById("logo");

const box1 = document.getElementById("popular_box");
const box2 = document.getElementById("drama_box");
const box3 = document.getElementById("action_box");

const trailer1 = document.getElementById("popularTrailer");
const trailer2 = document.getElementById("dramaTrailer");
const trailer3 = document.getElementById("actionTrailer");

logo.addEventListener('click',()=>{
   alert("Welcome to Netflix!!!🤍");
});

box1.addEventListener('mouseover',()=>{
    trailer1.style.backgroundColor = 'black';
});

box1.addEventListener('mouseout',()=>{
   trailer1.style.backgroundColor = 'transparent';
});

trailer1.addEventListener('mousemove',()=>{
   trailer1.style.backgroundColor = 'transparent';
});

box2.addEventListener('mouseover',()=>{
   trailer2.style.backgroundColor = 'black';
});

box2.addEventListener('mouseout',()=>{
   trailer2.style.backgroundColor = 'transparent';
});

trailer2.addEventListener('mousemove',()=>{
   trailer2.style.backgroundColor = 'transparent';
});

box3.addEventListener('mouseover',()=>{
   trailer3.style.backgroundColor = 'black';
});

box3.addEventListener('mouseout',()=>{
   trailer3.style.backgroundColor = 'transparent';
});

trailer3.addEventListener('mousemove',()=>{
   trailer3.style.backgroundColor = 'transparent';
});
