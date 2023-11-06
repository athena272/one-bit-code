import './LinkButton.css'
import PropTypes from 'prop-types';


const LinkButton = ({ url, children }) => (
    <a href={url} target="_blank" rel="noreferrer">{children}</a>

)

LinkButton.propTypes = {
    url: PropTypes.string,
    children: PropTypes.node
}

export default LinkButton