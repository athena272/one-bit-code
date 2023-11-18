import PropTypes from "prop-types"

const Checkbox = ({ showInput, setShowInput }) => (
    <>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
            type="checkbox"
            id="showInput"
            value={showInput}
            onChange={() => setShowInput(show => !show)}
        />
    </>
)

Checkbox.propTypes = {
    showInput: PropTypes.number.isRequired,
    setShowInput: PropTypes.func.isRequired
}

export default Checkbox