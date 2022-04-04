// you need to create DOM selectors to grab the correct HTML elements and update their styles to the opposite theme's css classes when you want to toggle the theme off and on

// document.querySelector('h1').style.color = 'forestgreen'

// function darkFunction() {
//     const element = document.querySelector('body');
//     element.classList.toggle("dark-text");
// }

// function darkSpacer() {
//     const element = document.getElementsByClassName('spacer');
//     element.classList.toggle('dark-spacer');
// }



const toggle = document.getElementById("toggle");
const body = document.querySelector('body');
const spacer = document.querySelector('section div');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');


toggle.addEventListener('click', function() {
    body.classList.toggle('dark-text');
    spacer.classList.toggle('dark-spacer');
    h1.classList.toggle('dark-text');
    p.classList.toggle('dark-text');
});

