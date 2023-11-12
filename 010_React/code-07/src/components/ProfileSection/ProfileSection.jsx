import './ProfileSection.css'
import PropTypes from 'prop-types';


const ProfileSection = (props) => (
    <div
        {...props}
        className={`wrapper ${props.className}`}
    >
        {props.children}
    </div>
)

ProfileSection.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default ProfileSection