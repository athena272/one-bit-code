import PropTypes from "prop-types"
import { useState, useEffect } from 'react'

const Counter = ({ position }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('O efeito colateral foi ativado!')

        return () => console.log("limpnando efeito colateral... COMPONENTE DESMONTADO")
    }, [count])

    return (
        <button
            onClick={() => setCount(count => count + 1)}
        >
            {position}º Contador: {count}
        </button>
    )
}

Counter.propTypes = {
    position: PropTypes.number.isRequired,
}

export default Counter