function step02() {
    console.log("setp02")
}

console.log("step 1")
step02()
console.log("step 3")
console.log("step 4")
console.log("step 5")

let setp = 6
const setIntervalID = setInterval(() => {
    console.log(`Estou no setInterval no passo ${setp}`)
    setp += 1

    if (setp > 15) {
        clearInterval(setIntervalID)
        console.log("Os passos acabaram...")
    }
}, 1000 * 2)

console.log("setp 7")
console.log("setp 8")
console.log("setp 9")