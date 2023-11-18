import PropTypes from "prop-types"

const Input = ({ passwordSize, setPasswordSize }) => (
    <input
        type="number"
        id="passwordSize"
        min={1}
        max={50}
        value={passwordSize}
        onChange={(ev) => setPasswordSize(+ev.target.value)}
    />

)

Input.propTypes = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func.isRequired
}

export default Input