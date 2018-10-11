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