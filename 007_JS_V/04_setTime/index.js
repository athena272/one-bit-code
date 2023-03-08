console.log("Starting program...")

// const timeoutID = setTimeout(() => {
//     console.log("3 seconds to complete program")
// }, 1000 * 3)

// clearTimeout(timeoutID)

let seconds = 0
const timeIntervalID = setInterval(() => {
    seconds += 2
    console.log(`${seconds} have been passed`)

    if (seconds > 20) {
        console.log("That's enough")
        clearInterval(timeIntervalID)
    }
    
}, 1000 * 2);

