import './Profile.css'
import PropTypes from 'prop-types';
import Title from '../Title/Title';

const Profile = ({ avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl }) => (
    <div className="container">
        <img className="avatar" src={avatar} alt={name} />
        <Title>
            <span>Name: {name}</span>
            
            <button>Follow</button>
        </Title>
        <div>{bio}</div>
        <div>{phone}</div>
        <div>{email}</div>
        <div className="links">
            <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={twitterUrl} target="_blank" rel="noreferrer">Twitter</a>
        </div>
    </div>
)

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    githubUrl: PropTypes.string,
    linkedinUrl: PropTypes.string,
    twitterUrl: PropTypes.string
}

export default Profile