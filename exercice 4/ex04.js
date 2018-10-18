const check = document.getElementsByName('button')[0];
const mdp = document.getElementById('motdepasse');
const confirm = document.getElementById('confirmation');

check.addEventListener('click', function() {
    if (mdp.value == confirm.value) {
        mdp.style.border = '3px solid green';
        confirm.style.border = '3px solid green';
    } else {
        mdp.style.border = '3px solid red';
        confirm.style.border = '3px solid red';      
    }
});