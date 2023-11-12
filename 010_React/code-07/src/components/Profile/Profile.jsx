import './Profile.css'
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import ProfileSection from '../ProfileSection/ProfileSection';
import LinkButton from '../LinkButton/LinkButton';

const Profile = ({ avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl }) => {
    function handleClick(ev) {
        console.log(ev)
        alert("Você agora está seguindo!")
    }

    return (
        <div className="container">
            <img className="avatar" src={avatar} alt={name} />
            <Title>
                <span>Name: {name}</span>

                <button className='followButton' onClick={handleClick}>Follow</button>
            </Title>
            <ProfileSection>{bio}</ProfileSection>
            <ProfileSection>{phone}</ProfileSection>
            <ProfileSection>{email}</ProfileSection>
            <ProfileSection
                id="links-section"
                data-test="some value"
                aria-label="social links"
                className="links"
            >
                <LinkButton url={githubUrl}>GitHub</LinkButton>
                <LinkButton url={linkedinUrl}>LinkedIn</LinkButton>
                <LinkButton url={twitterUrl}>Twitter</LinkButton>
            </ProfileSection>
        </div>
    )
}

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