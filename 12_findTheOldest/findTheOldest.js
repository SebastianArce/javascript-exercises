const findTheOldest = function(people) {
    let peopleSorted = people.sort((a, b) => {
        let currentYear = new Date().getFullYear()
        if (! ("yearOfDeath" in a)) {
            a["yearOfDeath"] = currentYear;
        }
        if (! ("yearOfDeath" in b)) {
            b["yearOfDeath"] = currentYear;
        }

        age_a = a.yearOfDeath - a.yearOfBirth
        age_b = b.yearOfDeath - b.yearOfBirth

        if (age_a < age_b) {
            return 1
        } else {
            return -1
        }
    })
    return peopleSorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
