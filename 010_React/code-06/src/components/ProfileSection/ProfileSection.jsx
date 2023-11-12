import './ProfileSection.css'
import PropTypes from 'prop-types';


const ProfileSection = ({ children }) => (
    <div className='wrapper'>
        {children}
    </div>
)

ProfileSection.propTypes = {
    children: PropTypes.node
}

export default ProfileSection