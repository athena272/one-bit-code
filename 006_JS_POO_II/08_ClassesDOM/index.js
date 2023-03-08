import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"

const title = new Component({
    tag: 'h1',
    parent: 'body',
    options: { innerText: 'Hello World' }
})
console.log(title)
title.render()

title.tag = 'h3'
title.build().render()

const form = new Form({
    parent: 'body'
})

const label = new Label({
    text: 'Nome: ',
    parent: form,
    options: { htmlFor: 'nameInput' }
})

const input = new Input({
    parent: form,
    options: { id: 'nameInput', name: 'name' }
})

form.render()
label.render()
form.addChildren(input)

form.addChildren(
    new Component({
        tag: 'br',
    }),
    new Component({
        tag: 'br',
    }),
    new Label({
        text: 'Data de Nascimento: ',
        htmlFor: 'birthdayInput'
    }),
    new Input({
        parent: form,
        options: { id: 'birthdayInput', name: 'birthday', type: 'date' }
    })
)