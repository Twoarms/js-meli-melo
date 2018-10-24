let n; // Nombre d'essais, initié à 10 en début de partie
let minValue; // Prix minimum choisi par l'utilisateur en début de partie
let maxValue; // Prix maximum choisi par l'utilisateur en début de partie
let price; // prix choisi par randomPrice en début de partie
let guessPrice; // prix entré par l'utilisateur à chaque tentative

// Fonction nombre aléatoire entre min. & maxValue
let randomPrice = () => {
    return Math.floor(Math.random() * (Number(maxValue) - Number(minValue) + 1)) + Number(minValue);
};

// Fonction message (+, - ou juste)
let message = () => {
    if (guessPrice < price) {
        alert("C'est plus !");
    } else if (guessPrice > price) {
        alert("C'est moins !");
    } else {
        alert(`Bravo, c'est juste !\nVous avez trouvé en ${10 - n} essais`);
        n = 0; //Termine le jeu
    }
};


let juste_prix = () => {
    let play = confirm("Bienvenue sur le juste prix.\nDans quelques instants, il vous sera demandé de rentrer les prix minimum et maximum avec lesquels vous voulez jouer. Ces prix doivent être ronds.\nSachez que dans tous les cas, le nombre d'essais qui vous sera accordé est de 10. Vous pouvez donc choisir un écart plus grand ou plus petit en fonction de la difficulté à laquelle vous voulez jouer.\nVous pouvez cliquer sur 'annuler' si vous ne voulez pas jouer");
    if (play) {
        n = 10;
        minValue = prompt("Veuillez choisir un prix minimum");
        maxValue = prompt("Veuillez choisir un prix maximum");
        price = randomPrice();
        while (n > 0) {
            guessPrice = prompt(`Veuillez entrer un prix rond, compris entre ${minValue} et ${maxValue} inclus.\nVous disposez de ${n} essais.`);
            if (guessPrice < Number(minValue) || guessPrice > Number(maxValue)) {
                while (guessPrice < Number(minValue) || guessPrice > Number(maxValue)) {
                    guessPrice = prompt(`Le prix doit être compris entre ${minValue} et ${maxValue}`);
                }
            }
            n--;
            message();
            
        }
        // Si n atteint 0 et le prix n'a pas été trouvé
        if (n = 0 && guessPrice != price) {
            alert('Game over...');
        }
    }
}

