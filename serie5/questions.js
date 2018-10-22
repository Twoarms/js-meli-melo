/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    let result = texte.length;
    return result;
}
var remplaceECar = function (texte) {
    let result = texte.replace('e', ' ');
    return result;
}
var concatString = function (texte1, texte2) {
    let result = texte1 + texte2;
    return result;
}
var afficherCar5 = function (texte) {
    let result = texte.charAt(4);
    return result;
}
var afficher9Car = function (texte) {
    let result = texte.substr(0, 9);
    return result;
}
var majusculeString = function (texte) {
    let result = texte.toUpperCase();
    return result;
}
var minusculeString = function (texte) {
    let result = texte.toLowerCase();
    return result;
}
var SupprEspaceString = function (texte) {
    let result = texte.trim();
    return result;
}
var IsString = function (texte) {
    let result = typeof(texte);
    if (result == 'string') {
        return true;
    }    
}
var AfficherExtensionString = function (texte) {
    let result = texte.substring(texte.lastIndexOf('.')+1, texte.length);
    return result;
}
var NombreEspaceString = function (texte) {
    let result = texte.split(' ').length - 1;
    return result;
}
var InverseString = function (texte) {
    let result = texte.split('').reverse().join('');
    return result;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    let result = x ** y;
    return result;
}
var valeurAbsolue = function (nombre) {
    let result = Math.abs(nombre);
    return result;
}
var valeurAbsolueArray = function (array) {
    let result = [];
    for (i = 0; i < array.length; i++) {
        let abs = Math.abs(array[i]);
        result.push(abs);
    }
    return result;
}
var sufaceCercle = function (rayon) {
    let result = Math.round((rayon ** 2) * Math.PI);
    return result;
}
var hypothenuse = function (ab, ac) {
    let result = Math.hypot(ab, ac);
    return result;
}
var calculIMC = function (poids, taille) {
    let imc = poids / (taille ** 2);
    let result = Number(imc.toFixed(2));
    return result;
}
