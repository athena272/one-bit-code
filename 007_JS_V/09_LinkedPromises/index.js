function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error("Age is required"))
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthdayYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthdayYear)
        } else {
            reject(new Error("Birthday is required"))
        }
    })
}

getAge("2009-09-02").then(age => checkAge(age)
    // return checkAge(age)
).then(isOver18 => {
    if (isOver18) {
        console.log("Age is over 18")
    } else {
        console.log("Age is NOT over 18")
    }
}).catch(err => {
    console.log(err.message)
})

// getAge("2002-09-02").then(age => {
//     checkAge(age).then(isOver18 => {
//         if (isOver18) {
//             console.log("Age is over 18")
//         } else {
//             console.log("Age is NOT over 18")
//         }
//     }).catch(err => {
//         console.log(err.message)
//     })
// }).catch(err => {
//     console.log(err.message)
// })