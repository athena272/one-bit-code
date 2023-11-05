import './Title.css'
import PropTypes from 'prop-types';

const Title = ({ children }) => (
    <h2 className='name'>{children}</h2>
)

Title.propTypes = {
    children: PropTypes.node
}

export default Title