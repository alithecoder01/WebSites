const calc =document.querySelector('.calculator');
const calcContainer = document.querySelector('.container');


const openBtn =document.querySelector('.openCalc');
console.log(openBtn);

openBtn.addEventListener('click', ()=>{
    calcContainer.classList.add('active');
    redMenu.classList.remove("open");
    bars.classList.remove("change");
});

const closeIcon = document.querySelector('.icon-close');

closeIcon.addEventListener('click', ()=>{
    calcContainer.classList.remove('active');
});

const barsIcon = document.querySelector('.barsIcon');
const bars =document.querySelector('.bars');
const redMenu= document.querySelector('.reducedMenu');
barsIcon.addEventListener('click', ()=>{
    bars.classList.toggle("change");
    redMenu.classList.toggle("open");
});



