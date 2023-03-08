import { Component } from "./Component.js"

export class Label extends Component {
    constructor({ text, parent, options }) {
        super({ tag: "label", parent: parent, options: Object.assign({}, options, { textContent: text }) })
        this.text = text
    }

}