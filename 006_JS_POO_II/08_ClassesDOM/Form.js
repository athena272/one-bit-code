import { Component } from "./Component.js"

export class Form extends Component {
    constructor({ parent, options }) {
        super({ tag: "form", parent: parent, options: options })
    }

    addChildren(...children) {
        children.forEach(child => {
            this.getElement().appendChild(child.getElement())
        })
    }
}