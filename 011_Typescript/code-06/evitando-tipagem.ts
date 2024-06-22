function sendSpaceship(spaceship: { pilot: string, copilot?: string }) {
    //...
}

sendSpaceship({ pilot: "Han Solo", copilot: "Chewbacca" })

sendSpaceship({ pilot: "Luke Skywalker" })

// let input: any
let input: unknown
input = "Teste"
input = 19
input = []

let text: string

function verification() {
    if (true) {

    } else {
        let _check: never
        return _check
    }
}