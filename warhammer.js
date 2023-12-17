const play = () => {
    // simulate a roll - returns a random number between 1 and 6
    const roll = () => {
        return Math.floor((Math.random() * 6 + 1))
    }

    // roll 20 times to hit
    let firstRoles = 0;
    let hits = 0;
    let hitResults = [];
    while (firstRoles < 20) {
        const result = roll();
        hitResults.push(result);
        // if the result is equal to or biger than 3 AND euqal to or smaller than 5 (3, 4, 5)
        if (result >= 3 && result <= 5) {
            hits = hits + 1;
        }
        // if the result is  6
        if (result === 6) {
            hits = hits + 3;
        }
        firstRoles++;
    }

    // rolls [hits] times to wound
    let secondRoles = 0;
    let wounds = 0;
    let woundResults = [];
    while (secondRoles < hits) {
        const result = roll();
        woundResults.push(result);
        // if the result is equal to or biger than 3
        if (result >= 3) {
            wounds = wounds + 1;
        }
        secondRoles++;
    }

    // rolls [wounds] times to save
    let thirdRoles = 0;
    let damage = 0;
    let damageResults = [];
    while (thirdRoles < wounds) {
        const result = roll();
        damageResults.push(result);
        // if the result is equal to or smaller than 2
        if (result <= 2) {
            damage = damage + 1;
        }
        thirdRoles++;
    }
    console.log(`hits：${hits}, wounds:${wounds}, damage:${damage}`)
    // return how many hits / wounds / damage it did and also combinations of dice for each set of rolls
    return {
        results: [hitResults, woundResults, damageResults],
        sum: [hits, wounds, damage]

    }
}