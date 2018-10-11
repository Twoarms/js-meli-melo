let clickEvent = () => {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let ville = document.getElementById("ville").value;
    return alert("Nom : " + nom + "\nPrenom : " + prenom + "\nVille : " + ville);
}

let multiplication = () => {
    let a = document.getElementById("premier_nombre").value;
    let b = document.getElementById("deuxieme_nombre").value;
    a = Math.floor(a);
    b = Math.floor(b);
    return alert(`La multiplication des entiers donne :   ${a * b}`);
}

let remainder = () => {
    let a = document.getElementById("premier_nombre").value;
    let b = document.getElementById("deuxieme_nombre").value;
    return alert(`Le reste de la division du premier par le deuxième donne : ${a % b}`);
}

let weirdCalc = () => {
    let pointure = document.getElementById("pointure").value;
    let annee = document.getElementById("annee").value;
    pointure *= 2;
    pointure += 5;
    pointure *= 50;
    let result = pointure - annee + 1766;
    return alert(result);
}

let majeur = () => {
    let age = document.getElementById("age").value;
    if (age >= 18) {
        return alert("Vous êtes majeur !");
    } else {
        return alert("Vous êtes mineur...");
    }
}