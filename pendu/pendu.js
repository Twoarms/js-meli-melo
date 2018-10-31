let findLetters = ['B', 'O', 'N', 'H', 'E', 'U', 'R']; // Mot à trouver
let letter; // Variable récoltant les prompt inputs

let guessLetter = () => {
    let foundLetters = ['_', '_', '_', '_', '_', '_', '_'];
    let n = 5
    alert(`Bonjour ! Votre but est de deviner un mot en indiquant une et une seule lettre à chaque fois que l'on vous le demande.\nVous pouvez arreter le jeu à tout moment en cliquant sur annuler.\nVous avez droits à ${n} erreurs`);
    while (findLetters.toString() != foundLetters.toString() && n > 0) {
        letter = prompt(`Veuillez entrer une lettre.`);;
        while (!isNaN(letter) && letter !== null) {
            letter = prompt("Une lettre, s'il vous plait !");
        }
        if (findLetters.includes(letter.toUpperCase())) {
            let index = findLetters.indexOf(letter.toUpperCase());
            foundLetters[index] = letter.toUpperCase();
            alert(`Bravo ! ${letter.toUpperCase()} fait partie du mot mystère !\nLe mot mystère est ${foundLetters.toString()}`);
        } else {
            alert(`Cette lettre ne fait pas partie du mot mystère...`);
            n--;
        }
        if (findLetters.toString() == foundLetters.toString()) {
            alert(`Bravo, vous avez trouvé le mot mystère ${foundLetters.toString()} avec ${5-n} erreurs!`);
        } else if (n == 0) {
            alert(`Game over : Vous avez utilisé toutes vos chances...`);
        } else if (letter === null) {
            alert('Vous avez arreté le jeu.')
            break;
        }
    }
}