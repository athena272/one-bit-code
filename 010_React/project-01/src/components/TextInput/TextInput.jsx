import PropTypes from "prop-types"

const TextInput = ({ id, label, value, onChange }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} value={value} onChange={onChange} />
    </div>
)

TextInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default TextInput    