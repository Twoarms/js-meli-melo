const texte = document.getElementById('texte');
const aff = document.getElementById('aff');
const mas = document.getElementById('mas');

aff.addEventListener('click', function() {
    texte.style.display = 'block';
});
mas.addEventListener('click', function() {
    texte.style.display = 'none';
});