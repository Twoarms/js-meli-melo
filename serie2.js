/* Exercice 1 */
let surfaceRectangle = () => {
    let largeur = prompt("Entrez une largeur en cm");
    let longueur = prompt("Entrez une longueur en cm");
    let surface = +largeur * +longueur;
    return alert(`La surface du rectangle est de ${surface} cm²`);
}

let periRectangle = () => {
    let largeur = prompt("Entrez une largeur en cm");
    let longueur = prompt("Entrer une longueur en cm");
    let perimetre = (+largeur + +longueur) * 2;
    return alert(`Le périmètre du rectangle est de ${perimetre} cm`);
}

/* Exercice 2 */
let SurfaceCercle = () => {
    let surface = Math.PI * rayon ** 2;
    return alert(`L'aire du cercle est ${surface} cm²`)
} 

/* Exercice 3 */
var a = 3
var b = 2

var triple = x => {return x * 3}

let afficheEx3 = () => {
    alert(`${a} multiplié par 3 = ${triple(a)}`)
    alert(`${b} multiplié par 3 = ${triple(b)}`)
}

/* Exercice 4 */
let tabEx4 = [-2, 1, 4];

let additionne = x => x += 2;

let afficheEx4 = () => {
    alert(`${tabEx4[tabEx4.length-tabEx4.length]} additionné à 2 est = à ${additionne(tabEx4[tabEx4.length-tabEx4.length])}`);
    alert(`${tabEx4[tabEx4.length-1]} additionné à 2 est = à ${additionne(tabEx4[tabEx4.length-1])}`);
}

/* Exercice 5 */
let opeEnFolie = () => {
    let b = 2;
    alert(`a=b++, on assigne à 'a' la valeur de 'b' et on incrémente 'b'. Pour b = 2, on a a = ${a = b++} et b = ${b}`);
    b = 2;
    alert(`a=++b, on assigne à 'a' la valeur "'b' incrémenté". Pour b = 2, on a a = ${a = ++b} et b = ${b}`);
    b = 2;
    alert(`a=b--. Pour b = 2, on a a = ${a = b--} et b = ${b}`);
    b = 2;
    alert(`a=--b. Pour b = 2, on a a = ${a = --b} et b = ${b}`);
    b = 2;
    alert(`a+=b++.Pour b = 2, on a a = ${a += b++} et b = ${b}`);
    b = 2;
    a = 1;
    alert(`a+=++b.Pour a = 1 et b = 2, on a a = ${a += ++b} et b = ${b}`);
    b = 2;
    a = 1;
    alert(`a-=b++.Pour a = 1 et b = 2, on a a = ${a -= b++} et b = ${b}`);
    b = 2;
    a = 1;
    alert(`a-=++b.Pour a = 1 et b = 2, on a a = ${a -= ++b} et b = ${b}`);
    b = 2;
    a = 1;
    alert(`a+=b--.Pour a = 1 et b = 2, on a a = ${a += b--} et b = ${b}`);
    b = 2;
    a = 1;
    alert(`a+=--b.Pour a = 1 et b = 2, on a a = ${a += --b} et b = ${b}`);
}

/* Exercice 6 */
let tabEx6 = [-2, 1, 4];

let soustrait = x => {
    if (x >= 0) {
        return x -= 2;
    } else {
        return "Nombre négatif !"
    }
}

let afficheEx6 = () => {
    alert(`2 soustrait à ${tabEx6[tabEx6.length-tabEx6.length]} est = à ${soustrait(tabEx6[tabEx6.length-tabEx6.length])}`);
    alert(`2 soustrait à ${tabEx6[tabEx6.length-1]} est = à ${soustrait(tabEx6[tabEx6.length-1])}`);
}

/* Exercice 7 */
let faireChoix = () => {
    let choix = prompt(`Entrez '1', '2' ou '3'`)
    switch(+choix) {
        case 1:
            alert(`1. Merci !`);
            break;
        case 2:
            alert(`2. Bonjour !`);
            break;
        case 3:
            alert(`3. Au revoir !`);
            break;
        default:
            alert(`Pardon, que voulez-vous ?`)
    }
}

/* Exercice 8 */
let jourDeLaSemaine = () => {
    switch (new Date().getDay()) {
        case 0:
            alert("Dimanche");
            break;
        case 1:
            alert("Lundi");
            break;
        case 2:
            alert("Mardi");
            break;
        case 3:
            alert("Mercredi");
            break;
        case 4:
            alert("Jeudi");
            break;
        case 5:
            alert("Vendredi");
            break;
        case 6:
            alert("Samedi");
    }
}

/* exercice 9 */
let testWhile = () => {
    let testP = prompt("Veuillez entrer un mot ou une phrase contenant la lettre 'p'");
    while (testP.indexOf("p") == -1) {
        testP = prompt("Veuillez entrer, SVP, un mot ou une phrase QUI CONTIENT la lettre 'p'");
    }
    alert(`Vous avez écrit : "${testP}", merci !`);
}

/* Exercice 10 */
let somme = () => {
    let nombres = [];
    alert("Vous allez devoir entrer 3 nombres, si vous le voulez bien");
    let y = 1
    for (let i = 0; i < 3; i++) {
        nombres[i] = prompt(`Veuillez entrer le nombre N° ${y++}`);
    }
    alert(`Le résultat de la somme de ces 3 nombres est ${+nombres[0] + +nombres[1] + +nombres[2]}`);
}

/* Exercice 11 */
let isNumeric = value => {
    return /^-{0,1}\d+$/.test(value);
}

let calculMoyenne = () => {
    let somme = 0;
    let i = 0;
    let entier = prompt(`Entrez un nombre entier s'il vous plait.`);

    while (!isNumeric(entier) || +entier >= 0) {
        if (!isNumeric(entier)) {
            entier = prompt(`Un nombre ENTIER, SVP`);       
        } else if (+entier >= 0) {
            somme += +entier
            i++
            entier = prompt(`Merci, entrez un autre nombre entier s'il vous plait.`)
        }
    }
    let moyenne = somme / i;
    alert(`L'entier négatif a déclenché le calcul de la moyenne, elle est de ${moyenne}`)
}