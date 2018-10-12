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

let SurfaceCercle = () => {
    let surface = Math.PI * rayon ** 2;
    return alert(`L'aire du cercle est ${surface} cm²`)
} 
    
var a = 3
var b = 2

var triple = x => {return x * 3}

let afficheEx3 = () => {
    alert(`${a} multiplié par 3 = ${triple(a)}`)
    alert(`${b} multiplié par 3 = ${triple(b)}`)
}

let tabEx4 = [-2, 1, 4];

let additionne = x => x += 2;

let afficheEx4 = () => {
    alert(`${tabEx4[tabEx4.length-tabEx4.length]} additionné à 2 est = à ${additionne(tabEx4[tabEx4.length-tabEx4.length])}`);
    alert(`${tabEx4[tabEx4.length-1]} additionné à 2 est = à ${additionne(tabEx4[tabEx4.length-1])}`);
}

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