import { Component } from "./Component.js"

export class Input extends Component {
    constructor({ parent, options }) {
        super({ tag: "input", parent: parent, options: options })
    }
}