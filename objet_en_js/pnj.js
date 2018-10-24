let character = {
    name : "CodeMaster",
    age : 9999,
    items_to_give : ["Maîtrise du Html", "Maîtrise du CSS", "Maîtrise du JavaScript", "Maîtrise du pseudo-code"],
    giveItems : function(){
        let randomObject = Math.floor(Math.random() * this.items_to_give.length);
        alert(`${this.name} vous cède ${this.items_to_give[randomObject]}`);
    }
};

for (let key in character) {
    console.log(key, character[key]);
}

character.giveItems();