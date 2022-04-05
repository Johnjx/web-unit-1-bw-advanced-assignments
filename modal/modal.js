// you will need to toggle the visibility off and on with DOM selectors

const toggle = document.getElementById("modal-button");
const modal = document.getElementById("modal-id");
const span = document.querySelector('span');

// toggle.addEventListener('click', function() {
//     modal.classList
// });

toggle.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(Event) {
    if (Event.target == modal) {
        modal.style.display = "none";
    }
}