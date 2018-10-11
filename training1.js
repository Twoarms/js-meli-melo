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