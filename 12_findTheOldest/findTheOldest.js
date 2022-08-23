const findTheOldest = function (args) {
    let currentYear = (new Date).getFullYear()

    const oldestSort = args.sort((a, b) => {

        if (!a.yearOfDeath || !b.yearOfDeath){
            a.yearOfDeat = currentYear
            b.yearOfDeath = currentYear
        }

        const lastGuy = a.yearOfDeath - a.yearOfBirth
        const nextGuy = b.yearOfDeath - b.yearOfBirth

        return lastGuy > nextGuy ? -1 : 1
    })

    // console.log(oldestSort.name)

    return oldestSort[0]
};

// Do not edit below this line
module.exports = findTheOldest;
