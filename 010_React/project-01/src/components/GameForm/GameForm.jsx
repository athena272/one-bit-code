import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "../TextInput/TextInput"

const GameForm = ({ addGame }) => {
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({ title, cover })
        console.log({ title, cover })
        setTitle("")
        setCover("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput id="title" label="Título" value={title} onChange={(ev) => setTitle(ev.target.value)} />
            <TextInput id="cover" label="Capa" value={cover} onChange={(ev) => setCover(ev.target.value)} />
            <button>Adicionar</button>
        </form>
    )
}

GameForm.propTypes = {
    addGame: PropTypes.func
}

export default GameForm