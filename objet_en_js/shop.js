let toSell = [ {
    title : "Epée",
    physic : 4,
    magic : 1,
    minLevel : 1,
    available : true
    }, {
    title : "Dague",
    physic : 6,
    magic : 3,
    minLevel : 5,
    available : true
    }, {
    title : "Hache",
    physic : 10,
    magic : 2,
    minLevel : 10,
    available : false
    }, {
    title : "Sceptre",
    physic : 2,
    magic : 10,
    minLevel : 10,
    available : false
    }
]

let displayAllObjects = () => {
    for (let object in toSell) {
    console.log(toSell[object]);
    }
}

let displayAvailObjects = () => {
    for (let object in toSell) {
        if (toSell[object].available) {
            console.log(toSell[object]);
        }
    }
}

let displayUpTenObjects = () => {
    for (let object in toSell) {
        if (toSell[object].minLevel >= 10) {
            console.log(toSell[object]);
        }
    }
}