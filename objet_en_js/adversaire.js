function character (name, level, life, weaponName, weaponDamage) {
    this.name = name;
    this.level = level;
    this.life = life;
    this.weapon = {
        name : weaponName,
        damage : weaponDamage
    };
    this.attack = function(enemy) {
        let hit = this.receiveDamage();
        console.log(`${this.name} attaque ${enemy.name}\navec l'arme ${this.weapon.name}\net lui inflige ${hit} de dégats\n${enemy.name} a maintenant ${enemy.life - hit} de vie.`);
    };
    this.receiveDamage = function() {
        return this.weapon.damage * this.level;
    };
};

let mainCharacter = new character('Twoarms', 24, 777, 'Clavier', 6);
let opponentCharacter = new character('Empty code', 999, 145, 'Vide intersidéral', 0.01);

mainCharacter.attack(opponentCharacter);