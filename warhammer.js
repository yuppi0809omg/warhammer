const roll = () => {
    return Math.floor((Math.random() * 6 + 1))
}
// params [20, 3, true, 3, 4, 3]
const calcAverage = (params)=>{
    const averageHit = params[2]? (params[0] * 1/6 * (6 - params[1]) + params[0] * 1/6 * params[3])
    :(params[0] * 1/6 * (6 - params[1] + 1));

    const averageWound = averageHit * (1/6) * (6 - params[4] + 1);
    const averageDamage = averageWound * (1/6) * (params[5] - 1);

    return [averageHit, averageWound, averageDamage];

}
const play = (params) => {
    // simulate a roll - returns a random number between 1 and 6

    const [initialRollsMax, hitMinThresh, isExplosiveOn6, extraHits, woundMinTresh, saveMinThresh] = params;
    const hitMaxThresh = isExplosiveOn6 && extraHits ? 5 : 6;
    // roll times to hit
    let firstRoles = 0;
    let hits = 0;
    let hitResults = [];
    while (firstRoles < initialRollsMax) {
        const result = roll();
        hitResults.push(result);
        // if the result is equal to or biger than AND euqal to or smaller than
        if (result >= hitMinThresh && result <= hitMaxThresh) {
            hits = hits + 1;
        }
        // if the result is  6
        if ((isExplosiveOn6 && extraHits) && (result === 6)) {
            hits = hits + extraHits;
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
        // if the result is equal to or biger than
        if (result >= woundMinTresh) {
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
        // if the result is smaller than
        if (result < saveMinThresh) {
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