let mainCharacter = {
    name : "Twoarms",
    level : 24,
    life : 777,
    weapon : {
        name : "Clavier",
        damage : 6
    },
    attack : function() {
        return alert(`${mainCharacter["name"]} attaque avec l'arme ${mainCharacter.weapon["name"]} et les dégats sont de ${mainCharacter["level"] * mainCharacter.weapon["damage"]}`)
    }
};