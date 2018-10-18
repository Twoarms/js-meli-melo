const texte = document.getElementById('texte');

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('green')) {
        texte.style.color = 'green';
    } else if (event.target.classList.contains('red')) {
        texte.style.color = 'red';
    } else if (event.target.classList.contains('blue')) {
        texte.style.color = 'blue';
    }
})

