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

let triple = x => {
    return x * 3
}

let affiche = () => {
    alert(`${a} multiplié par 3 = ${triple(a)}`)
    alert(`${b} multiplié par 3 = ${triple(b)}`)
}